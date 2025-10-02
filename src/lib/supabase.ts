import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserPreferences = {
  id: string;
  user_id: string;
  theme: 'light' | 'dark';
  language: 'tr' | 'en';
  created_at: string;
  updated_at: string;
};

export type Site = {
  id: string;
  name: string;
  url: string;
  logo_url: string | null;
  category: 'trusted' | 'featured' | 'live' | 'community';
  is_active: boolean;
  order_index: number;
  created_at: string;
};

export type Translation = {
  id: string;
  key: string;
  tr: string;
  en: string;
  created_at: string;
};
