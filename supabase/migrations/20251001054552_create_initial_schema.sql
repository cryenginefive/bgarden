/*
  # Kumar Çiftliği Dashboard - Initial Schema

  ## Overview
  This migration creates the core database structure for the Kumar Çiftliği dashboard application
  with support for multi-language content and user preferences.

  ## New Tables
  
  ### 1. `user_preferences`
  Stores user-specific settings including theme and language preferences
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid, foreign key) - Reference to auth.users
  - `theme` (text) - Theme preference ('light' or 'dark')
  - `language` (text) - Language preference ('tr' or 'en')
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `sites`
  Manages the list of sites shown in various categories
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Site name
  - `url` (text) - Site URL
  - `logo_url` (text, nullable) - Site logo image URL
  - `category` (text) - Category type ('trusted', 'featured', 'live', 'community')
  - `is_active` (boolean) - Whether the site is currently active
  - `order_index` (integer) - Display order within category
  - `created_at` (timestamptz) - Record creation timestamp

  ### 3. `translations`
  Stores all translatable content for the application
  - `id` (uuid, primary key) - Unique identifier
  - `key` (text, unique) - Translation key identifier
  - `tr` (text) - Turkish translation
  - `en` (text) - English translation
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  
  ### Row Level Security (RLS)
  All tables have RLS enabled with the following policies:
  
  #### user_preferences
  - Users can view only their own preferences
  - Users can insert only their own preferences
  - Users can update only their own preferences
  - Users can delete only their own preferences
  
  #### sites
  - All authenticated users can view active sites
  - Only authenticated users can manage sites (for admin features)
  
  #### translations
  - All users (including anonymous) can read translations
  - Only authenticated users can manage translations (for admin features)

  ## Notes
  - Default values are set for better data integrity
  - Timestamps use `now()` for automatic date tracking
  - Foreign key constraints ensure referential integrity
  - Indexes are added for frequently queried columns
*/

-- Create user_preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  theme text DEFAULT 'dark' CHECK (theme IN ('light', 'dark')),
  language text DEFAULT 'tr' CHECK (language IN ('tr', 'en')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create sites table
CREATE TABLE IF NOT EXISTS sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  logo_url text,
  category text NOT NULL CHECK (category IN ('trusted', 'featured', 'live', 'community')),
  is_active boolean DEFAULT true,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create translations table
CREATE TABLE IF NOT EXISTS translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  tr text NOT NULL,
  en text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_preferences
CREATE POLICY "Users can view own preferences"
  ON user_preferences FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own preferences"
  ON user_preferences FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences"
  ON user_preferences FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own preferences"
  ON user_preferences FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for sites
CREATE POLICY "Anyone can view active sites"
  ON sites FOR SELECT
  TO authenticated
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert sites"
  ON sites FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update sites"
  ON sites FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete sites"
  ON sites FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for translations
CREATE POLICY "Anyone can view translations"
  ON translations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert translations"
  ON translations FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update translations"
  ON translations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete translations"
  ON translations FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_preferences_user_id ON user_preferences(user_id);
CREATE INDEX IF NOT EXISTS idx_sites_category ON sites(category);
CREATE INDEX IF NOT EXISTS idx_sites_is_active ON sites(is_active);
CREATE INDEX IF NOT EXISTS idx_translations_key ON translations(key);

-- Insert initial translations
INSERT INTO translations (key, tr, en) VALUES
  ('app_name', 'Kumar Çiftliği', 'Kumar Ciftligi'),
  ('trusted_sites', 'Güvenilir Siteler', 'Trusted Sites'),
  ('featured_sites', 'Özel Önerilen Siteler', 'Featured Sites'),
  ('live_sites', 'Yayında Oynanan Siteler', 'Live Playing Sites'),
  ('community', 'Topluluk', 'Community'),
  ('rewards', 'Ödüller', 'Rewards'),
  ('giveaways', 'Çekilişler', 'Giveaways'),
  ('tickets', 'Biletler', 'Tickets'),
  ('score_prediction', 'Skor Tahmin', 'Score Prediction'),
  ('bonuses', 'Bonuslar', 'Bonuses'),
  ('trial_bonuses', 'Deneme Bonusları', 'Trial Bonuses'),
  ('daily_rewards', 'Günlük Ödüller', 'Daily Rewards'),
  ('entertainment', 'Eğlence, Kazan', 'Entertainment, Win'),
  ('special_events', 'Özel Etkinlikler', 'Special Events'),
  ('points', 'Puanlar', 'Points'),
  ('wheel_of_fortune', 'Şans Çarkı', 'Wheel of Fortune'),
  ('market', 'Market', 'Market'),
  ('streams', 'Yayınlar', 'Streams'),
  ('support', 'Destek', 'Support'),
  ('help_center', 'Yardım Merkezi', 'Help Center')
ON CONFLICT (key) DO NOTHING;