/**
 * Simple in-memory rate limiter
 * Note: This won't work across multiple server instances.
 * For production, consider using:
 * - @upstash/ratelimit with Redis
 * - Vercel Edge Config
 * - A dedicated rate limiting service
 */

interface RateLimitStore {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitStore>();

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of store.entries()) {
    if (now > value.resetTime) {
      store.delete(key);
    }
  }
}, 10 * 60 * 1000);

export interface RateLimitOptions {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Max requests per interval
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

/**
 * Rate limit checker
 * @param identifier - Unique identifier (usually IP address)
 * @param options - Rate limit configuration
 * @returns Rate limit result
 */
export function rateLimit(
  identifier: string,
  options: RateLimitOptions = { interval: 60 * 1000, maxRequests: 5 }
): RateLimitResult {
  const now = Date.now();
  const record = store.get(identifier);

  // No previous record, create new one
  if (!record) {
    store.set(identifier, {
      count: 1,
      resetTime: now + options.interval,
    });

    return {
      success: true,
      limit: options.maxRequests,
      remaining: options.maxRequests - 1,
      reset: now + options.interval,
    };
  }

  // Reset time passed, create new window
  if (now > record.resetTime) {
    store.set(identifier, {
      count: 1,
      resetTime: now + options.interval,
    });

    return {
      success: true,
      limit: options.maxRequests,
      remaining: options.maxRequests - 1,
      reset: now + options.interval,
    };
  }

  // Within time window, check if limit exceeded
  if (record.count >= options.maxRequests) {
    return {
      success: false,
      limit: options.maxRequests,
      remaining: 0,
      reset: record.resetTime,
    };
  }

  // Increment counter
  record.count++;
  store.set(identifier, record);

  return {
    success: true,
    limit: options.maxRequests,
    remaining: options.maxRequests - record.count,
    reset: record.resetTime,
  };
}

/**
 * Get client IP from request headers
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return 'unknown';
}
