import { z } from 'zod';
import { HomeSize, Stories, Condition, LastCleaned } from '@/types/calculator';

// Calculator-specific validation schema
export const calculatorQuoteSchema = z.object({
  // Contact info
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  phone: z.string()
    .min(10, 'Phone must be at least 10 digits')
    .regex(/^[\d\s\-\(\)]+$/, 'Invalid phone number format'),

  email: z.string()
    .email('Invalid email address')
    .optional(),

  // Property assessment
  zipCode: z.string()
    .regex(/^\d{5}$/, 'ZIP code must be 5 digits'),

  homeSize: z.enum(['small', 'medium', 'large', 'xl'] as const),

  stories: z.enum(['1', '2', '3+'] as const),

  lastCleaned: z.enum(['recent', '1-2yr', 'over2yr', 'never'] as const),

  trackCondition: z.enum(['clean', 'dusty', 'dirty', 'neglected'] as const),

  // Service selection
  selectedPackage: z.enum(['basic', 'deluxe', 'luxury'] as const),

  calculatedPrice: z.number()
    .min(0, 'Price must be positive')
    .max(10000, 'Price seems unusually high'),

  // AI insights (optional - in case API fails)
  aiInsights: z.object({
    observation: z.string(),
    riskFactor: z.string(),
    financialImpact: z.string(),
    proTip: z.string(),
    healthScore: z.number().min(0).max(100),
  }).optional(),

  // Source tracking
  quoteSource: z.literal('calculator'),

  // Services requested
  services: z.array(z.string()).optional(),
  requestedServices: z.array(z.string()).optional(),
});

export type CalculatorQuoteData = z.infer<typeof calculatorQuoteSchema>;
