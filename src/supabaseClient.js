import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.API_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
