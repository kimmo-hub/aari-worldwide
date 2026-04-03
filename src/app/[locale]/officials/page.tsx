import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getAllOfficials } from "@/lib/seed-data";
import type { Locale } from "@/i18n/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function localized(obj: any, field: string, locale: Locale): string {
  return (obj[`${field}_${locale}`] as string) ?? (obj[`${field}_en`] as string) ?? "";
}

export default async function OfficialsListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations();
  const officials = getAllOfficials();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-civic-900 sm:text-3xl">
          {t("officials.title")}
        </h1>
        <p className="mt-2 text-muted">
          {t("officials.description")}
        </p>
      </div>

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
            placeholder={t("officials.searchPlaceholder")}
            className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted/60 focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100"
            disabled
          />
        </div>
        <p className="mt-2 text-xs text-muted/60">
          {t("officials.totalOfficials", { count: String(officials.length) })}
        </p>
      </div>

      {/* Officials grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {officials.map((official) => (
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
                  {localized(official, "title", loc)}
                </p>
                <p className="text-sm text-civic-500">
                  {localized(official, "organization", loc)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
