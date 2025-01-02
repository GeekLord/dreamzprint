import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wycwyqxiozwjlutwypjx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5Y3d5cXhpb3p3amx1dHd5cGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMzg0MDAsImV4cCI6MjAxOTYxNDQwMH0.SvD8sXtfVE8ZE6QkPDxvHj5eO4I-dT-7gM6LZHoVsZQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
});