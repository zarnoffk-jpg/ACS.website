import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { quoteSchema } from '@/lib/validation';
import { calculatorQuoteSchema } from '@/lib/calculator-validation';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { sendQuoteNotification } from '@/lib/email';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    // 1. CSRF PROTECTION - Validate request origin
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      'https://alexanderscleaning.com',
      'https://www.alexanderscleaning.com',
    ];

    const isValidOrigin = origin && allowedOrigins.some(allowed =>
      origin.startsWith(allowed)
    );

    const isValidReferer = referer && allowedOrigins.some(allowed =>
      referer.startsWith(allowed)
    );

    if (!isValidOrigin && !isValidReferer) {
      console.warn('CSRF attempt detected:', { origin, referer });
      return NextResponse.json(
        { error: 'Invalid request origin' },
        { status: 403 }
      );
    }

    // 2. RATE LIMITING - Prevent spam/DoS attacks
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimit(clientIp, {
      interval: 60 * 1000, // 1 minute window
      maxRequests: 5, // 5 requests per minute
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 3. PARSE REQUEST BODY
    const body = await request.json();

    // 4. VALIDATE INPUT - Using appropriate Zod schema based on source
    let validatedData;
    const isCalculatorQuote = body.quoteSource === 'calculator';

    try {
      if (isCalculatorQuote) {
        validatedData = calculatorQuoteSchema.parse(body);
      } else {
        validatedData = quoteSchema.parse(body);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json(
          {
            error: 'Validation failed',
            details: error.issues.map((issue) => ({
              field: issue.path.join('.'),
              message: issue.message,
            })),
          },
          { status: 400 }
        );
      }
      console.error('Non-Zod validation error:', error);
      throw error;
    }

    // 5. CHECK SUPABASE CONNECTION
    if (!supabaseAdmin || !supabaseAdmin.from) {
      console.error('Supabase admin client not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    // 6. SAVE TO DATABASE
    // Build quote record with appropriate fields based on source
    const quoteRecord: Record<string, any> = {
      name: validatedData.name,
      contact: isCalculatorQuote ? (validatedData as any).phone : (validatedData as any).contact,
      ip_address: clientIp,
      user_agent: request.headers.get('user-agent')?.substring(0, 500) || null,
    };

    // Add source-specific fields
    if (isCalculatorQuote) {
      quoteRecord.service = 'Calculator Quote';
      quoteRecord.message = (validatedData as any).message || null;
      // Store calculator-specific data in message field as JSON for now
      // (If your DB schema has additional columns, add them here)
      quoteRecord.calculator_data = JSON.stringify({
        zipCode: (validatedData as any).zipCode,
        homeSize: (validatedData as any).homeSize,
        stories: (validatedData as any).stories,
        lastCleaned: (validatedData as any).lastCleaned,
        trackCondition: (validatedData as any).trackCondition,
        selectedPackage: (validatedData as any).selectedPackage,
        calculatedPrice: (validatedData as any).calculatedPrice,
        healthScore: (validatedData as any).aiInsights?.healthScore || null,
      });
    } else {
      quoteRecord.service = (validatedData as any).service;
      quoteRecord.message = (validatedData as any).message || null;
    }

    const { data, error } = await supabaseAdmin.from('quotes').insert([quoteRecord]).select();

    if (error) {
      // Log error for debugging (no PII)
      console.error('Database error:', {
        code: error.code,
        message: error.message,
        hint: error.hint,
      });

      return NextResponse.json(
        { error: 'Failed to save quote request' },
        { status: 500 }
      );
    }

    // 7. SEND EMAIL NOTIFICATION
    // Send email in background (don't wait for it)
    const emailData = {
      name: validatedData.name,
      contact: isCalculatorQuote ? (validatedData as any).phone : (validatedData as any).contact,
      service: isCalculatorQuote ? 'Calculator Quote' : (validatedData as any).service,
      message: isCalculatorQuote
        ? `Selected Package: ${(validatedData as any).selectedPackage}\nEstimated Price: $${(validatedData as any).calculatedPrice}\nProperty Health Score: ${(validatedData as any).aiInsights?.healthScore || 'N/A'}`
        : (validatedData as any).message,
      timestamp: new Date().toISOString(),
    };

    sendQuoteNotification(emailData).catch((error) => {
      // Log email errors but don't fail the request
      console.error('Email notification failed (non-fatal):', error);
    });

    // 8. LOG SUCCESS (NO PII - only metadata)
    if (process.env.NODE_ENV === 'development') {
      console.log('Quote saved successfully:', {
        id: data?.[0]?.id,
        service: isCalculatorQuote ? 'calculator' : (validatedData as any).service,
        source: isCalculatorQuote ? 'calculator' : 'form',
        timestamp: new Date().toISOString(),
      });
    }

    // 9. SEND SUCCESS RESPONSE
    return NextResponse.json(
      {
        success: true,
        message: 'Quote request received successfully. We\'ll contact you soon!',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        },
      }
    );

  } catch (error) {
    // Log error for debugging (no sensitive data)
    console.error('Unexpected error in quote API:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
    });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
