# Admin Panel Setup Guide

## Overview
This application now has a full admin control panel for managing gambling sites with backlinks.

## Features
- **Dashboard**: View statistics (total sites, active sites, total clicks, clicks today)
- **Sites Manager**: Add, edit, delete sites with complete backlink control
- **Analytics**: Track click-through rates and site performance
- **Admin Users**: Manage admin access levels

## Access the Admin Panel
Navigate to: `/admin` route

Example: `http://localhost:5173/admin`

## Creating Your First Admin User

After signing up with an email/password, you need to add your user to the `admin_users` table.

### Method 1: Using Supabase SQL Editor

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run this query (replace with your email):

```sql
-- First, find your user_id
SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';

-- Then insert into admin_users (replace USER_ID and EMAIL)
INSERT INTO admin_users (user_id, email, full_name, role, is_active)
VALUES (
  'YOUR_USER_ID_HERE',
  'your-email@example.com',
  'Your Full Name',
  'super_admin',
  true
);
```

### Method 2: Using Supabase MCP Tool

Run this SQL query:

```sql
INSERT INTO admin_users (user_id, email, full_name, role, is_active)
SELECT
  id,
  email,
  email as full_name,
  'super_admin' as role,
  true as is_active
FROM auth.users
WHERE email = 'your-email@example.com';
```

## Admin Roles

- **super_admin**: Full access (create/edit/delete sites, manage admins)
- **admin**: Can create/edit sites
- **moderator**: View-only access

## Site Management Features

### Backlink Configuration
Each site has:
- **Display URL**: The URL shown to users (e.g., `https://casino-example.com`)
- **Backlink URL**: The actual affiliate/partner URL users are redirected to (e.g., `https://partner-site.com?ref=YOUR_CODE`)

### Site Properties
- Name, description, category
- Logo and banner URLs
- Rating (0-5 stars)
- Bonus information
- Display order
- Status flags (active, featured, live, trusted)
- Click tracking

### Click Tracking
Every time a user clicks on a site, the following is recorded:
- Site ID
- User ID (if authenticated)
- IP address
- User agent
- Referrer
- Timestamp

## Database Tables

### `admin_users`
Stores admin user information and permissions

### `sites`
Stores all gambling sites with backlink configuration

### `site_clicks`
Tracks all clicks on site backlinks for analytics

## Security Features

- Row Level Security (RLS) enabled on all tables
- Only authenticated admins can access admin panel
- Super admins required for sensitive operations
- Audit trail for all changes
- Secure backlink redirects

## Usage

1. Sign in with your admin account
2. Navigate to `/admin`
3. Use "Manage Sites" to add new sites
4. Fill in the site details including the important **Backlink URL**
5. Set site status (active, featured, live, trusted)
6. View analytics and click data in the Dashboard

## Important Notes

- **Backlink URL** is where users will be redirected when they click on a site
- Use your affiliate/partner URLs with tracking codes in the Backlink URL field
- The Display URL is what users see, but they'll be redirected to the Backlink URL
- All clicks are tracked for analytics and reporting
- Make sure to test backlinks before making sites live
