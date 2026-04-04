/**
 * Data access layer for Virkavastuu.fi
 *
 * Reads from Supabase when configured, falls back to seed data.
 */

import {
  getOfficialBySlug as getOfficialBySlugSeed,
  getAllOfficials as getAllOfficialsSeed,
  searchOfficials as searchOfficialsSeed,
  policyAreas as policyAreasSeed,
} from "./seed-data";
import { getSupabase } from "./supabase";
import type { Official, OfficialProfile, PolicyArea } from "@/types/database";

export async function getOfficialBySlug(
  slug: string
): Promise<OfficialProfile | null> {
  const supabase = getSupabase();
  if (!supabase) return getOfficialBySlugSeed(slug);

  const { data: official, error } = await supabase
    .from("officials")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !official) return getOfficialBySlugSeed(slug);

  const [rolesRes, affsRes, stmtsRes, feedbackRes] = await Promise.all([
    supabase
      .from("previous_roles")
      .select("*")
      .eq("official_id", official.id)
      .order("start_date", { ascending: false }),
    supabase
      .from("affiliations")
      .select("*")
      .eq("official_id", official.id),
    supabase
      .from("public_statements")
      .select("*")
      .eq("official_id", official.id)
      .order("date", { ascending: false }),
    supabase
      .from("feedback_ratings")
      .select("*, policy_areas(name_fi, name_en)")
      .eq("official_id", official.id)
      .eq("verified", true),
  ]);

  // Aggregate feedback by policy area
  const feedbackMap = new Map<
    string,
    { name_fi: string; name_en: string; ratings: number[] }
  >();

  for (const fb of feedbackRes.data || []) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pa = (fb as any).policy_areas;
    if (!feedbackMap.has(fb.policy_area_id)) {
      feedbackMap.set(fb.policy_area_id, {
        name_fi: pa?.name_fi || "",
        name_en: pa?.name_en || "",
        ratings: [],
      });
    }
    feedbackMap.get(fb.policy_area_id)!.ratings.push(fb.rating);
  }

  const feedback = Array.from(feedbackMap.entries()).map(
    ([policy_area_id, { name_fi, name_en, ratings }]) => {
      const distribution: Record<number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
      for (const r of ratings) distribution[r] = (distribution[r] || 0) + 1;
      const average_rating =
        ratings.reduce((a, b) => a + b, 0) / ratings.length;
      return {
        policy_area_id,
        policy_area_name_fi: name_fi,
        policy_area_name_en: name_en,
        total_responses: ratings.length,
        average_rating: Math.round(average_rating * 10) / 10,
        distribution,
      };
    }
  );

  return {
    official: official as Official,
    previous_roles: rolesRes.data || [],
    affiliations: affsRes.data || [],
    public_statements: stmtsRes.data || [],
    feedback,
  };
}

export async function getAllOfficials(): Promise<Official[]> {
  const supabase = getSupabase();
  if (!supabase) return getAllOfficialsSeed();

  const { data, error } = await supabase
    .from("officials")
    .select("*")
    .order("last_name", { ascending: true });

  if (error || !data) return getAllOfficialsSeed();
  return data as Official[];
}

export async function searchOfficials(query: string): Promise<Official[]> {
  const supabase = getSupabase();
  if (!supabase) return searchOfficialsSeed(query);

  const q = `%${query}%`;
  const { data, error } = await supabase
    .from("officials")
    .select("*")
    .or(
      `first_name.ilike.${q},last_name.ilike.${q},title_fi.ilike.${q},title_en.ilike.${q},organization_fi.ilike.${q},organization_en.ilike.${q}`
    )
    .order("last_name", { ascending: true });

  if (error || !data) return searchOfficialsSeed(query);
  return data as Official[];
}

export async function getPolicyAreas(): Promise<PolicyArea[]> {
  const supabase = getSupabase();
  if (!supabase) return policyAreasSeed;

  const { data, error } = await supabase
    .from("policy_areas")
    .select("*")
    .order("name_en", { ascending: true });

  if (error || !data) return policyAreasSeed;
  return data as PolicyArea[];
}
