-- Alexander's Cleaning Service - Database Schema
-- Run this in your Supabase SQL Editor: https://app.supabase.com/project/_/sql

-- Create quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact VARCHAR(150) NOT NULL,
  service VARCHAR(50) NOT NULL CHECK (service IN ('residential', 'commercial', 'gutter', 'screen', 'other')),
  message TEXT,
  ip_address VARCHAR(50),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at DESC);

-- Create index on service for filtering
CREATE INDEX IF NOT EXISTS idx_quotes_service ON quotes(service);

-- Enable Row Level Security
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public quote submissions" ON quotes
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow service role to read all quotes (for admin access)
CREATE POLICY "Allow service role to read quotes" ON quotes
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Optional: Create a function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_quotes_updated_at
  BEFORE UPDATE ON quotes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for recent quotes (useful for dashboard)
CREATE OR REPLACE VIEW recent_quotes AS
SELECT
  id,
  name,
  contact,
  service,
  SUBSTRING(message, 1, 100) as message_preview,
  created_at
FROM quotes
ORDER BY created_at DESC
LIMIT 50;

COMMENT ON TABLE quotes IS 'Customer quote requests from the website';
COMMENT ON COLUMN quotes.name IS 'Customer full name';
COMMENT ON COLUMN quotes.contact IS 'Customer email or phone number';
COMMENT ON COLUMN quotes.service IS 'Type of service requested';
COMMENT ON COLUMN quotes.message IS 'Optional message from customer';
COMMENT ON COLUMN quotes.ip_address IS 'Client IP address (for abuse prevention)';
COMMENT ON COLUMN quotes.user_agent IS 'Client user agent (for analytics)';
