// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jeokrpqugmheyledrycq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Implb2tycHF1Z21oZXlsZWRyeWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MDkxODMsImV4cCI6MjA2NTI4NTE4M30.x-P9UQb1j2qbqkx2Ep-pIkJR3JtWjGCYLsV4bkFCZW8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);