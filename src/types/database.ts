// Database types for Virkavastuu.fi

export type OfficialCategory = "state" | "municipal";
export type OfficialRoleType = "staff" | "council";

export interface Official {
  id: string;
  slug: string;
  first_name: string;
  last_name: string;
  title_fi: string;
  title_en: string;
  organization_fi: string;
  organization_en: string;
  photo_url: string | null;
  appointment_date: string;
  appointed_by_fi: string;
  appointed_by_en: string;
  bio_fi: string;
  bio_en: string;
  email: string | null;
  phone: string | null;
  category: OfficialCategory;
  role_type: OfficialRoleType;
  party?: string | null;
  created_at: string;
  updated_at: string;
}

export interface PreviousRole {
  id: string;
  official_id: string;
  role_fi: string;
  role_en: string;
  organization_fi: string;
  organization_en: string;
  start_date: string;
  end_date: string | null;
  source_url: string | null;
}

export interface Affiliation {
  id: string;
  official_id: string;
  organization_fi: string;
  organization_en: string;
  role_fi: string;
  role_en: string;
  start_date: string | null;
  end_date: string | null;
  source_url: string | null;
}

export interface PublicStatement {
  id: string;
  official_id: string;
  title_fi: string;
  title_en: string;
  summary_fi: string;
  summary_en: string;
  date: string;
  policy_area_id: string;
  source_url: string;
  source_name: string;
}

export interface PolicyArea {
  id: string;
  name_fi: string;
  name_en: string;
  slug: string;
  description_fi: string;
  description_en: string;
}

export interface FeedbackRating {
  id: string;
  official_id: string;
  policy_area_id: string;
  rating: number; // 1-5
  comment: string | null;
  email_hash: string;
  verified: boolean;
  created_at: string;
}

export interface FeedbackAggregation {
  policy_area_id: string;
  policy_area_name_fi: string;
  policy_area_name_en: string;
  total_responses: number;
  average_rating: number;
  distribution: Record<number, number>; // { 1: count, 2: count, ... 5: count }
}

// Full profile combining all data
export interface OfficialProfile {
  official: Official;
  previous_roles: PreviousRole[];
  affiliations: Affiliation[];
  public_statements: PublicStatement[];
  feedback: FeedbackAggregation[];
}
