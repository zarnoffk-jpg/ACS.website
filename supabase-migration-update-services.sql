-- Migration: Update service types to include new services
-- Run this in your Supabase SQL Editor after the initial schema

-- Drop the old CHECK constraint
ALTER TABLE quotes DROP CONSTRAINT IF EXISTS quotes_service_check;

-- Add new CHECK constraint with updated service types
ALTER TABLE quotes
ADD CONSTRAINT quotes_service_check
CHECK (service IN ('residential', 'commercial', 'gutter-cleaning', 'screen-repair', 'pressure-washing', 'other'));

-- Verify the constraint
SELECT conname, pg_get_constraintdef(oid)
FROM pg_constraint
WHERE conrelid = 'quotes'::regclass AND contype = 'c';
