/**
 * Data access layer for Virkavastuu.fi
 *
 * Currently uses static seed data. When Supabase is configured,
 * swap these functions to query the database instead.
 */

import {
  getOfficialBySlug as getOfficialBySlugSeed,
  getAllOfficials as getAllOfficialsSeed,
  searchOfficials as searchOfficialsSeed,
  policyAreas as policyAreasSeed,
} from "./seed-data";
import type { Official, OfficialProfile, PolicyArea } from "@/types/database";

const USE_SUPABASE = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

export async function getOfficialBySlug(
  slug: string
): Promise<OfficialProfile | null> {
  if (!USE_SUPABASE) {
    return getOfficialBySlugSeed(slug);
  }

  // TODO: Replace with Supabase queries when configured
  // const { data: official } = await supabase
  //   .from('officials')
  //   .select('*')
  //   .eq('slug', slug)
  //   .single();
  return getOfficialBySlugSeed(slug);
}

export async function getAllOfficials(): Promise<Official[]> {
  if (!USE_SUPABASE) {
    return getAllOfficialsSeed();
  }

  // TODO: Replace with Supabase query
  return getAllOfficialsSeed();
}

export async function searchOfficials(query: string): Promise<Official[]> {
  if (!USE_SUPABASE) {
    return searchOfficialsSeed(query);
  }

  // TODO: Replace with Supabase full-text search
  return searchOfficialsSeed(query);
}

export async function getPolicyAreas(): Promise<PolicyArea[]> {
  if (!USE_SUPABASE) {
    return policyAreasSeed;
  }

  // TODO: Replace with Supabase query
  return policyAreasSeed;
}
