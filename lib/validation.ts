import { z } from 'zod';

// Email regex pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone regex pattern (formats: (123) 456-7890, 123-456-7890, 1234567890)
const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[-.]?)?\d{3}[-.]?\d{4}$/;

// Service types enum
export const serviceTypes = [
  'residential',
  'commercial',
  'gutter-cleaning',
  'screen-repair',
  'pressure-washing',
  'other'
] as const;

// Quote validation schema
export const quoteSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

  contact: z
    .string()
    .refine(
      (value) => emailRegex.test(value) || phoneRegex.test(value),
      'Please provide a valid email or phone number'
    ),

  service: z.enum(serviceTypes),

  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
