import { createClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL || 'https://dlttbhgdjyxldovctyqa.supabase.co';
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_WQPewRXfnmBJVlb-YDSecg_s7f0bWmG';
export const supabase = createClient(url, key);
