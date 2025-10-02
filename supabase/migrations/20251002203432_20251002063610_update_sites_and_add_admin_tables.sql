/*
  # Admin Dashboard and Sites Management System Update

  ## Overview
  Updates existing sites table and creates admin management tables

  ## Updates to Existing Tables
  
  ### `sites` - Add new columns
  - `description` (text) - Site description
  - `backlink_url` (text) - Backlink URL to redirect to
  - `banner_url` (text) - Site banner image URL
  - `rating` (numeric) - Site rating (0-5)
  - `bonus_text` (text) - Bonus offer text
  - `bonus_amount` (text) - Bonus amount display
  - `features` (jsonb) - Array of site features
  - `is_featured` (boolean) - Whether site is featured
  - `is_live` (boolean) - Whether site is live/active
  - `is_trusted` (boolean) - Whether site is verified/trusted
  - `display_order` (integer) - Order for displaying sites
  - `click_count` (integer) - Number of clicks on backlink
  - `updated_at` (timestamptz) - Last update timestamp

  ## New Tables
  
  ### `admin_users`
  - `id` (uuid, primary key) - Unique admin identifier
  - `user_id` (uuid, foreign key to auth.users) - Links to authenticated user
  - `email` (text) - Admin email address
  - `full_name` (text) - Admin full name
  - `role` (text) - Admin role (super_admin, admin, moderator)
  - `is_active` (boolean) - Whether admin account is active
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `site_clicks`
  - `id` (uuid, primary key) - Unique click identifier
  - `site_id` (uuid, foreign key) - References sites table
  - `user_id` (uuid, nullable) - User who clicked (if authenticated)
  - `ip_address` (text) - IP address of clicker
  - `user_agent` (text) - Browser user agent
  - `referrer` (text) - Referrer URL
  - `clicked_at` (timestamptz) - Click timestamp

  ## Security
  - Enable RLS on all tables with appropriate policies
*/

-- Add new columns to existing sites table
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'description') THEN
    ALTER TABLE sites ADD COLUMN description text NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'backlink_url') THEN
    ALTER TABLE sites ADD COLUMN backlink_url text NOT NULL DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'banner_url') THEN
    ALTER TABLE sites ADD COLUMN banner_url text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'rating') THEN
    ALTER TABLE sites ADD COLUMN rating numeric(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'bonus_text') THEN
    ALTER TABLE sites ADD COLUMN bonus_text text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'bonus_amount') THEN
    ALTER TABLE sites ADD COLUMN bonus_amount text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'features') THEN
    ALTER TABLE sites ADD COLUMN features jsonb DEFAULT '[]'::jsonb;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'is_featured') THEN
    ALTER TABLE sites ADD COLUMN is_featured boolean DEFAULT false NOT NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'is_live') THEN
    ALTER TABLE sites ADD COLUMN is_live boolean DEFAULT false NOT NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'is_trusted') THEN
    ALTER TABLE sites ADD COLUMN is_trusted boolean DEFAULT false NOT NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'display_order') THEN
    ALTER TABLE sites ADD COLUMN display_order integer DEFAULT 0 NOT NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'click_count') THEN
    ALTER TABLE sites ADD COLUMN click_count integer DEFAULT 0 NOT NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sites' AND column_name = 'updated_at') THEN
    ALTER TABLE sites ADD COLUMN updated_at timestamptz DEFAULT now() NOT NULL;
  END IF;
END $$;

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  email text NOT NULL,
  full_name text NOT NULL,
  role text NOT NULL DEFAULT 'moderator' CHECK (role IN ('super_admin', 'admin', 'moderator')),
  is_active boolean DEFAULT true NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create site_clicks table
CREATE TABLE IF NOT EXISTS site_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid REFERENCES sites(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  ip_address text DEFAULT '',
  user_agent text DEFAULT '',
  referrer text DEFAULT '',
  clicked_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_admin_users_user_id ON admin_users(user_id);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);
CREATE INDEX IF NOT EXISTS idx_sites_is_featured ON sites(is_featured);
CREATE INDEX IF NOT EXISTS idx_sites_is_live ON sites(is_live);
CREATE INDEX IF NOT EXISTS idx_sites_is_trusted ON sites(is_trusted);
CREATE INDEX IF NOT EXISTS idx_sites_display_order ON sites(display_order);
CREATE INDEX IF NOT EXISTS idx_site_clicks_site_id ON site_clicks(site_id);
CREATE INDEX IF NOT EXISTS idx_site_clicks_clicked_at ON site_clicks(clicked_at);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_clicks ENABLE ROW LEVEL SECURITY;

-- Admin Users Policies
CREATE POLICY "Super admins can view all admin users"
  ON admin_users FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Super admins can insert admin users"
  ON admin_users FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Super admins can update admin users"
  ON admin_users FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Admins can view own profile"
  ON admin_users FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Update Sites Policies (keep existing and add new)
DROP POLICY IF EXISTS "Admins can view all sites" ON sites;
DROP POLICY IF EXISTS "Admins can insert sites" ON sites;
DROP POLICY IF EXISTS "Admins can update sites" ON sites;
DROP POLICY IF EXISTS "Super admins can delete sites" ON sites;

CREATE POLICY "Admins can view all sites"
  ON sites FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Admins can insert sites"
  ON sites FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role IN ('super_admin', 'admin')
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Admins can update sites"
  ON sites FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role IN ('super_admin', 'admin')
      AND admin_users.is_active = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role IN ('super_admin', 'admin')
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Super admins can delete sites"
  ON sites FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

-- Site Clicks Policies
CREATE POLICY "Anyone can insert clicks"
  ON site_clicks FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Admins can view all clicks"
  ON site_clicks FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.user_id = auth.uid()
      AND admin_users.is_active = true
    )
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to automatically update updated_at
DROP TRIGGER IF EXISTS update_admin_users_updated_at ON admin_users;
CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON admin_users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_sites_updated_at ON sites;
CREATE TRIGGER update_sites_updated_at
  BEFORE UPDATE ON sites
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();