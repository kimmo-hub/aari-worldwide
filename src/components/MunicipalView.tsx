"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Official } from "@/types/database";
import type { Locale } from "@/i18n/config";
import FinlandMap from "./FinlandMap";

interface RegionData {
  region_fi: string;
  region_en: string;
  municipalities: { fi: string; en: string }[];
}

function localized(obj: Record<string, unknown>, field: string, locale: Locale): string {
  return (obj[`${field}_${locale}`] as string) ?? (obj[`${field}_en`] as string) ?? "";
}

// Extract municipality name from org like "Paraisten kaupunki" -> "Parainen"
// This is approximate — we match against the MUNICIPALITIES list instead
function getMuniName(official: Official, municipalities: string[]): string | null {
  for (const m of municipalities) {
    if (official.organization_fi.includes(m) || official.organization_en.includes(m)) return m;
  }
  return null;
}

export default function MunicipalView({
  officials,
  regions,
}: {
  officials: Official[];
  regions: RegionData[];
}) {
  const t = useTranslations("officials");
  const locale = useLocale() as Locale;
  const [view, setView] = useState<"list" | "map">("list");
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // All municipality names flat list
  const allMuniNames = regions.flatMap(r => r.municipalities.map(m => m.fi));

  // Count officials per municipality
  const officialCounts: Record<string, number> = {};
  for (const o of officials) {
    const muni = getMuniName(o, allMuniNames);
    if (muni) officialCounts[muni] = (officialCounts[muni] || 0) + 1;
  }

  // Filter
  const searchFiltered = query
    ? officials.filter((o) => {
        const q = query.toLowerCase();
        return (
          o.first_name.toLowerCase().includes(q) ||
          o.last_name.toLowerCase().includes(q) ||
          `${o.first_name} ${o.last_name}`.toLowerCase().includes(q) ||
          o.organization_fi.toLowerCase().includes(q) ||
          o.organization_en.toLowerCase().includes(q) ||
          o.title_fi.toLowerCase().includes(q) ||
          o.title_en.toLowerCase().includes(q)
        );
      })
    : officials;

  // If a region is selected from map, filter to that region's municipalities
  const regionMunis = selectedRegion
    ? new Set(regions.find(r => r.region_fi === selectedRegion)?.municipalities.map(m => m.fi) || [])
    : null;

  const filtered = regionMunis
    ? searchFiltered.filter(o => {
        const muni = getMuniName(o, allMuniNames);
        return muni && regionMunis.has(muni);
      })
    : searchFiltered;

  // Sort alphabetically by last name
  const sorted = [...filtered].sort((a, b) => a.last_name.localeCompare(b.last_name, "fi"));

  return (
    <>
      {/* Controls row */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted/60 focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100"
          />
        </div>
        {/* View toggle */}
        <div className="flex rounded-lg border border-border overflow-hidden shrink-0">
          <button
            onClick={() => setView("list")}
            className={`px-3 py-2 text-xs font-medium transition-colors ${view === "list" ? "bg-civic-800 text-white" : "bg-white text-muted hover:bg-civic-50"}`}
          >
            <svg className="h-4 w-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            {locale === "fi" ? "Lista" : "List"}
          </button>
          <button
            onClick={() => setView("map")}
            className={`px-3 py-2 text-xs font-medium transition-colors ${view === "map" ? "bg-civic-800 text-white" : "bg-white text-muted hover:bg-civic-50"}`}
          >
            <svg className="h-4 w-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {locale === "fi" ? "Kartta" : "Map"}
          </button>
        </div>
      </div>

      {/* Region filter chip */}
      {selectedRegion && (
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs text-muted">{locale === "fi" ? "Maakunta" : "Region"}:</span>
          <button
            onClick={() => setSelectedRegion(null)}
            className="inline-flex items-center gap-1 rounded-full bg-civic-100 px-3 py-1 text-xs font-medium text-civic-800 hover:bg-civic-200 transition-colors"
          >
            {locale === "fi"
              ? regions.find(r => r.region_fi === selectedRegion)?.region_fi
              : regions.find(r => r.region_fi === selectedRegion)?.region_en}
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Count */}
      <p className="mb-3 text-[10px] text-muted/60 uppercase tracking-wider">
        {sorted.length} / {officials.length} {locale === "fi" ? "viranhaltijaa" : "officials"}
        {" — "}
        {Object.keys(officialCounts).length} / {allMuniNames.length} {locale === "fi" ? "kuntaa" : "municipalities"}
      </p>

      {view === "map" ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <FinlandMap
            regions={regions}
            officialCounts={officialCounts}
            onRegionClick={(region) => setSelectedRegion(region === selectedRegion ? null : region)}
          />
          {/* Side list for selected region or all */}
          <div className="space-y-px max-h-[600px] overflow-y-auto rounded-xl border border-border bg-white">
            {sorted.length > 0 ? sorted.map((official) => (
              <Link
                key={official.id}
                href={`/officials/${official.slug}`}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-civic-50 transition-colors border-b border-border/50 last:border-0"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-civic-100 text-[9px] font-bold text-civic-700">
                  {official.first_name[0]}{official.last_name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium text-civic-900">{official.first_name} {official.last_name}</span>
                  <span className="text-[10px] text-muted ml-1.5">{localized(official as unknown as Record<string, unknown>, "title", locale)}</span>
                </div>
              </Link>
            )) : (
              <p className="text-center text-xs text-muted py-8">{t("noResults")}</p>
            )}
          </div>
        </div>
      ) : (
        /* Compact alphabetical list view */
        <div className="rounded-xl border border-border bg-white overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0">
            {sorted.length > 0 ? sorted.map((official) => (
              <div key={official.id} className="border-b border-border/30 last:border-0 sm:border-b sm:border-r sm:border-border/30">
                <Link
                  href={`/officials/${official.slug}`}
                  className="flex items-center gap-2 px-3 py-1.5 hover:bg-civic-50 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-civic-900 truncate">
                      {official.last_name}, {official.first_name}
                    </p>
                    <p className="text-[10px] text-muted truncate">
                      {localized(official as unknown as Record<string, unknown>, "title", locale)}
                      {" — "}
                      {localized(official as unknown as Record<string, unknown>, "organization", locale)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {official.email && (
                      <span className="text-civic-400" title={official.email}>
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    )}
                    {official.phone && (
                      <span className="text-civic-400" title={official.phone}>
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            )) : (
              <p className="col-span-full text-center text-xs text-muted py-8">{t("noResults")}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
