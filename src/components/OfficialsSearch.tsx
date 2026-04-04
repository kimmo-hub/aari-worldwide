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

  const filtered = query
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

  return (
    <>
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
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
        <p className="mt-2 text-xs text-muted/60">
          {query
            ? `${filtered.length} / ${officials.length}`
            : t("totalOfficials", { count: String(officials.length) })}
        </p>
      </div>

      {/* Officials grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((official) => (
            <Link
              key={official.id}
              href={`/officials/${official.slug}`}
              className="group rounded-xl border border-border bg-white p-5 transition-all hover:border-civic-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-civic-100 text-sm font-bold text-civic-700 transition-colors group-hover:bg-civic-200">
                  {official.first_name[0]}
                  {official.last_name[0]}
                </div>
                <div className="min-w-0">
                  <h2 className="font-semibold text-civic-900 group-hover:text-civic-700">
                    {official.first_name} {official.last_name}
                  </h2>
                  <p className="text-sm text-muted">
                    {localized(official as unknown as Record<string, unknown>, "title", locale)}
                  </p>
                  <p className="text-sm text-civic-500">
                    {localized(official as unknown as Record<string, unknown>, "organization", locale)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-muted py-12">{t("noResults")}</p>
      )}
    </>
  );
}
