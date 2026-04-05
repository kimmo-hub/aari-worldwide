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
  const [selectedMuni, setSelectedMuni] = useState<string | null>(null);

  const allMuniNames = regions.flatMap(r => r.municipalities.map(m => m.fi));

  // Index officials by municipality
  const officialsByMuni: Record<string, Official[]> = {};
  for (const o of officials) {
    const muni = getMuniName(o, allMuniNames);
    if (muni) {
      if (!officialsByMuni[muni]) officialsByMuni[muni] = [];
      officialsByMuni[muni].push(o);
    }
  }

  // Counts for map
  const officialCounts: Record<string, number> = {};
  for (const [muni, offs] of Object.entries(officialsByMuni)) {
    officialCounts[muni] = offs.length;
  }

  // Filter regions/municipalities by search
  const q = query.toLowerCase();
  function muniMatchesQuery(mName: string): boolean {
    if (!query) return true;
    if (mName.toLowerCase().includes(q)) return true;
    const offs = officialsByMuni[mName] || [];
    return offs.some(o =>
      o.first_name.toLowerCase().includes(q) ||
      o.last_name.toLowerCase().includes(q) ||
      `${o.first_name} ${o.last_name}`.toLowerCase().includes(q) ||
      o.title_fi.toLowerCase().includes(q) ||
      o.title_en.toLowerCase().includes(q)
    );
  }

  const regionName = (r: RegionData) => locale === "fi" ? r.region_fi : r.region_en;
  const muniName = (m: { fi: string; en: string }) => locale === "fi" ? m.fi : m.en;

  // ─── LEVEL 3: Person list for a municipality ───
  function PersonList({ muni }: { muni: string }) {
    const offs = (officialsByMuni[muni] || []).sort((a, b) => a.last_name.localeCompare(b.last_name, "fi"));
    if (offs.length === 0) {
      return (
        <p className="px-4 py-3 text-[11px] text-muted italic">
          {locale === "fi" ? "Ei vielä tietoja" : "No data yet"}
        </p>
      );
    }
    return (
      <div className="divide-y divide-border/30">
        {offs.map(official => (
          <Link
            key={official.id}
            href={`/officials/${official.slug}`}
            className="flex items-center gap-2 px-4 py-1.5 hover:bg-civic-50 transition-colors"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-medium text-civic-900">
                {official.last_name}, {official.first_name}
              </span>
              <span className="text-[10px] text-muted ml-1.5">
                — {localized(official as unknown as Record<string, unknown>, "title", locale)}
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {official.email && (
                <span className="text-civic-400" title={official.email}>
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              )}
              {official.phone && (
                <span className="text-civic-400" title={official.phone}>
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // ─── LEVEL 2: Municipality list for a region ───
  function MuniList({ region }: { region: RegionData }) {
    const munis = [...region.municipalities]
      .filter(m => muniMatchesQuery(m.fi))
      .sort((a, b) => a.fi.localeCompare(b.fi, "fi"));

    if (munis.length === 0) return null;

    return (
      <div className="divide-y divide-border/30">
        {munis.map(m => {
          const count = officialsByMuni[m.fi]?.length || 0;
          const isOpen = selectedMuni === m.fi;
          return (
            <div key={m.fi}>
              <button
                onClick={() => setSelectedMuni(isOpen ? null : m.fi)}
                className="flex w-full items-center justify-between px-4 py-2 text-left hover:bg-civic-50/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-civic-800">{muniName(m)}</span>
                  {count > 0 && (
                    <span className="text-[10px] text-civic-500 bg-civic-50 rounded-full px-1.5 py-0.5">{count}</span>
                  )}
                  {count === 0 && (
                    <span className="text-[10px] text-muted/40">—</span>
                  )}
                </div>
                <svg
                  className={`h-3 w-3 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="bg-civic-50/30 border-t border-border/20">
                  <PersonList muni={m.fi} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // ─── Filtered regions ───
  const filteredRegions = regions.filter(r => {
    if (selectedRegion && r.region_fi !== selectedRegion) return false;
    return r.municipalities.some(m => muniMatchesQuery(m.fi));
  });

  return (
    <>
      {/* Controls */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedMuni(null); }}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted/60 focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100"
          />
        </div>
        <div className="flex rounded-lg border border-border overflow-hidden shrink-0">
          <button
            onClick={() => setView("list")}
            className={`px-3 py-2 text-xs font-medium transition-colors ${view === "list" ? "bg-civic-800 text-white" : "bg-white text-muted hover:bg-civic-50"}`}
          >
            {locale === "fi" ? "Lista" : "List"}
          </button>
          <button
            onClick={() => setView("map")}
            className={`px-3 py-2 text-xs font-medium transition-colors ${view === "map" ? "bg-civic-800 text-white" : "bg-white text-muted hover:bg-civic-50"}`}
          >
            {locale === "fi" ? "Kartta" : "Map"}
          </button>
        </div>
      </div>

      {/* Region filter chip */}
      {selectedRegion && (
        <div className="mb-4 flex items-center gap-2">
          <button
            onClick={() => { setSelectedRegion(null); setSelectedMuni(null); }}
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

      {/* Stats */}
      <p className="mb-3 text-[10px] text-muted/60 uppercase tracking-wider">
        {Object.keys(officialCounts).length}/{allMuniNames.length} {locale === "fi" ? "kuntaa tiedoilla" : "municipalities with data"}
        {" · "}
        {officials.length} {locale === "fi" ? "viranhaltijaa" : "officials"}
      </p>

      {view === "map" ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <FinlandMap
            regions={regions}
            officialCounts={officialCounts}
            onRegionClick={(region) => {
              setSelectedRegion(region === selectedRegion ? null : region);
              setSelectedMuni(null);
            }}
          />
          {/* Drill-down list next to map */}
          <div className="max-h-[600px] overflow-y-auto rounded-xl border border-border bg-white">
            {filteredRegions.map(region => (
              <div key={region.region_fi}>
                <div className="sticky top-0 bg-civic-800 px-4 py-1.5 z-10">
                  <span className="text-[11px] font-semibold text-white">{regionName(region)}</span>
                  <span className="text-[10px] text-civic-300 ml-2">{region.municipalities.length}</span>
                </div>
                <MuniList region={region} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ─── LEVEL 1: Region accordion list view ─── */
        <div className="space-y-2">
          {filteredRegions.map(region => (
            <RegionAccordion key={region.region_fi} region={region} locale={locale} officialsByMuni={officialsByMuni}>
              <MuniList region={region} />
            </RegionAccordion>
          ))}
          {filteredRegions.length === 0 && (
            <p className="text-center text-xs text-muted py-12">{t("noResults")}</p>
          )}
        </div>
      )}
    </>
  );
}

// ─── Region accordion (level 1) ───

function RegionAccordion({
  region,
  locale,
  officialsByMuni,
  children,
}: {
  region: { region_fi: string; region_en: string; municipalities: { fi: string; en: string }[] };
  locale: Locale;
  officialsByMuni: Record<string, Official[]>;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const name = locale === "fi" ? region.region_fi : region.region_en;
  const muniCount = region.municipalities.length;
  const withData = region.municipalities.filter(m => (officialsByMuni[m.fi]?.length || 0) > 0).length;
  const totalOfficials = region.municipalities.reduce((sum, m) => sum + (officialsByMuni[m.fi]?.length || 0), 0);

  return (
    <div className="rounded-xl border border-border bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3 text-left hover:bg-civic-50 transition-colors"
      >
        <div>
          <h2 className="text-sm font-semibold text-civic-800">{name}</h2>
          <p className="text-[10px] text-muted">
            {muniCount} {locale === "fi" ? "kuntaa" : "municipalities"}
            {withData > 0 && (
              <span className="text-civic-600"> · {totalOfficials} {locale === "fi" ? "viranhaltijaa" : "officials"}</span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted">{withData}/{muniCount}</span>
          <svg
            className={`h-4 w-4 text-civic-500 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="border-t border-border">
          {children}
        </div>
      )}
    </div>
  );
}
