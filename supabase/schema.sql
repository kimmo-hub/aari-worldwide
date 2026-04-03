-- Virkavastuu.fi Database Schema
-- Run this against your Supabase project to create the required tables

-- Policy areas (e.g., economic policy, digitalization)
CREATE TABLE policy_areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_fi TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description_fi TEXT NOT NULL DEFAULT '',
  description_en TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Officials (senior civil servants)
CREATE TABLE officials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  title_fi TEXT NOT NULL,
  title_en TEXT NOT NULL,
  organization_fi TEXT NOT NULL,
  organization_en TEXT NOT NULL,
  photo_url TEXT,
  appointment_date DATE NOT NULL,
  appointed_by_fi TEXT NOT NULL,
  appointed_by_en TEXT NOT NULL,
  bio_fi TEXT NOT NULL DEFAULT '',
  bio_en TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_officials_slug ON officials(slug);

-- Previous roles held by officials
CREATE TABLE previous_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  official_id UUID NOT NULL REFERENCES officials(id) ON DELETE CASCADE,
  role_fi TEXT NOT NULL,
  role_en TEXT NOT NULL,
  organization_fi TEXT NOT NULL,
  organization_en TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  source_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_previous_roles_official ON previous_roles(official_id);

-- Organizational affiliations
CREATE TABLE affiliations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  official_id UUID NOT NULL REFERENCES officials(id) ON DELETE CASCADE,
  organization_fi TEXT NOT NULL,
  organization_en TEXT NOT NULL,
  role_fi TEXT NOT NULL,
  role_en TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  source_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_affiliations_official ON affiliations(official_id);

-- Public statements linked to policy areas
CREATE TABLE public_statements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  official_id UUID NOT NULL REFERENCES officials(id) ON DELETE CASCADE,
  title_fi TEXT NOT NULL,
  title_en TEXT NOT NULL,
  summary_fi TEXT NOT NULL,
  summary_en TEXT NOT NULL,
  date DATE NOT NULL,
  policy_area_id UUID NOT NULL REFERENCES policy_areas(id),
  source_url TEXT NOT NULL,
  source_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_public_statements_official ON public_statements(official_id);
CREATE INDEX idx_public_statements_policy_area ON public_statements(policy_area_id);

-- Citizen feedback ratings (per policy area per official)
CREATE TABLE feedback_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  official_id UUID NOT NULL REFERENCES officials(id) ON DELETE CASCADE,
  policy_area_id UUID NOT NULL REFERENCES policy_areas(id),
  rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  email_hash TEXT NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_feedback_official ON feedback_ratings(official_id);
CREATE INDEX idx_feedback_policy_area ON feedback_ratings(policy_area_id);
CREATE INDEX idx_feedback_verified ON feedback_ratings(verified);

-- One verified rating per email per official per policy area
CREATE UNIQUE INDEX idx_feedback_unique_rating
  ON feedback_ratings(email_hash, official_id, policy_area_id)
  WHERE verified = true;

-- Row Level Security
ALTER TABLE officials ENABLE ROW LEVEL SECURITY;
ALTER TABLE previous_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public_statements ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback_ratings ENABLE ROW LEVEL SECURITY;

-- Public read access for all profile data
CREATE POLICY "Public read access" ON officials FOR SELECT USING (true);
CREATE POLICY "Public read access" ON previous_roles FOR SELECT USING (true);
CREATE POLICY "Public read access" ON affiliations FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public_statements FOR SELECT USING (true);
CREATE POLICY "Public read access" ON policy_areas FOR SELECT USING (true);

-- Feedback: public can read verified ratings, anyone can insert
CREATE POLICY "Public read verified feedback" ON feedback_ratings
  FOR SELECT USING (verified = true);
CREATE POLICY "Anyone can submit feedback" ON feedback_ratings
  FOR INSERT WITH CHECK (true);
