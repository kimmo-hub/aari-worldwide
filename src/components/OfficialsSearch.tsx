"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Official } from "@/types/database";
import type { Locale } from "@/i18n/config";

function localized(obj: Record<string, unknown>, field: string, locale: Locale): string {
  return (obj[`${field}_${locale}`] as string) ?? (obj[`${field}_en`] as string) ?? "";
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
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([org, orgOfficials]) => (
            <div key={org}>
              <h2 className="mb-3 text-lg font-semibold text-civic-800 border-b border-civic-100 pb-2">
                {org}
                <span className="ml-2 text-sm font-normal text-muted">
                  ({orgOfficials.length})
                </span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {orgOfficials.map((official) => (
                  <Link
                    key={official.id}
                    href={`/officials/${official.slug}`}
                    className="group rounded-xl border border-border bg-white p-4 transition-all hover:border-civic-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-civic-100 text-xs font-bold text-civic-700 transition-colors group-hover:bg-civic-200">
                        {official.first_name[0]}
                        {official.last_name[0]}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-civic-900 group-hover:text-civic-700">
                          {official.first_name} {official.last_name}
                        </h3>
                        <p className="text-sm text-muted">
                          {localized(
                            official as unknown as Record<string, unknown>,
                            "title",
                            locale
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-muted py-12">{t("noResults")}</p>
      )}
    </>
  );
}
