import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Create clients only if environment variables are available
let supabase: SupabaseClient | null = null;
let supabaseAdmin: SupabaseClient | null = null;

try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);

    if (supabaseServiceKey) {
      supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    }
  }
} catch (error) {
  // Silently fail during build if env vars are not available
  if (process.env.NODE_ENV === 'production' && !process.env.SKIP_ENV_VALIDATION) {
    console.error('Failed to initialize Supabase:', error);
  }
}

// Export clients (may be null if env vars not available during build)
export { supabase, supabaseAdmin };

// Database types
export interface Quote {
  id: string;
  name: string;
  contact: string;
  service: string;
  message?: string;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}
