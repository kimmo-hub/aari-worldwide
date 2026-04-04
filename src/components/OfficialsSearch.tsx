"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Official } from "@/types/database";
import type { Locale } from "@/i18n/config";

function localized(obj: Record<string, unknown>, field: string, locale: Locale): string {
  return (obj[`${field}_${locale}`] as string) ?? (obj[`${field}_en`] as string) ?? "";
}

function OrgGroup({ org, officials, locale }: { org: string; officials: Official[]; locale: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-civic-50 transition-colors"
      >
        <div>
          <h2 className="text-lg font-semibold text-civic-800">{org}</h2>
          <p className="text-sm text-muted">{officials.length} {officials.length === 1 ? "official" : "officials"}</p>
        </div>
        <svg
          className={`h-5 w-5 text-civic-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border divide-y divide-border">
          {officials.map((official) => (
            <div key={official.id} className="flex items-center gap-3 px-5 py-3 hover:bg-civic-50 transition-colors">
              <Link
                href={`/officials/${official.slug}`}
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-civic-100 text-xs font-bold text-civic-700">
                  {official.first_name[0]}
                  {official.last_name[0]}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-civic-900">
                    {official.first_name} {official.last_name}
                  </p>
                  <p className="text-sm text-muted">
                    {localized(official as unknown as Record<string, unknown>, "title", locale)}
                  </p>
                </div>
              </Link>
              <div className="hidden sm:flex items-center gap-3 shrink-0 text-xs text-muted">
                {official.email && (
                  <a href={`mailto:${official.email}`} className="hover:text-civic-800 transition-colors" title={official.email}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
                {official.phone && (
                  <a href={`tel:${official.phone}`} className="hover:text-civic-800 transition-colors" title={official.phone}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OfficialsSearch({
  officials,
}: {
  officials: Official[];
}) {
  const t = useTranslations("officials");
  const locale = useLocale() as Locale;
  const [query, setQuery] = useState("");
  const [selectedOrg, setSelectedOrg] = useState<string>("all");

  // Group all officials by organization
  const orgGroups = new Map<string, Official[]>();
  for (const o of officials) {
    const org = localized(o as unknown as Record<string, unknown>, "organization", locale);
    if (!orgGroups.has(org)) orgGroups.set(org, []);
    orgGroups.get(org)!.push(o);
  }
  const orgList = Array.from(orgGroups.keys()).sort();

  // Filter by search query
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

  // Filter by selected organization
  const filtered =
    selectedOrg === "all"
      ? searchFiltered
      : searchFiltered.filter(
          (o) =>
            localized(o as unknown as Record<string, unknown>, "organization", locale) ===
            selectedOrg
        );

  // Group filtered results by organization
  const grouped = new Map<string, Official[]>();
  for (const o of filtered) {
    const org = localized(o as unknown as Record<string, unknown>, "organization", locale);
    if (!grouped.has(org)) grouped.set(org, []);
    grouped.get(org)!.push(o);
  }

  return (
    <>
      {/* Search and filter row */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted/60 focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100"
          />
        </div>
        <select
          value={selectedOrg}
          onChange={(e) => setSelectedOrg(e.target.value)}
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100 sm:w-72"
        >
          <option value="all">
            {t("allCategories")} ({officials.length})
          </option>
          {orgList.map((org) => (
            <option key={org} value={org}>
              {org} ({orgGroups.get(org)!.length})
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="mb-4 text-xs text-muted/60">
        {filtered.length !== officials.length
          ? `${filtered.length} / ${officials.length}`
          : t("totalOfficials", { count: String(officials.length) })}
      </p>

      {/* Grouped officials */}
      {filtered.length > 0 ? (
        <div className="space-y-3">
          {Array.from(grouped.entries()).map(([org, orgOfficials]) => (
            <OrgGroup key={org} org={org} officials={orgOfficials} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-muted py-12">{t("noResults")}</p>
      )}
    </>
  );
}
