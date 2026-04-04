import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getOfficialBySlug } from "@/lib/data";
import { Link } from "@/i18n/navigation";
import FeedbackSection from "@/components/FeedbackSection";
import FeedbackForm from "@/components/FeedbackForm";
import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function localized(obj: any, field: string, locale: Locale): string {
  const key = `${field}_${locale}`;
  return (obj[key] as string) ?? (obj[`${field}_en`] as string) ?? "";
}

function formatDate(dateStr: string, locale: Locale): string {
  return new Date(dateStr).toLocaleDateString(
    locale === "fi" ? "fi-FI" : "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const profile = await getOfficialBySlug(id);
  if (!profile) return { title: "Not Found" };

  const loc = locale as Locale;
  const name = `${profile.official.first_name} ${profile.official.last_name}`;
  const title = localized(profile.official, "title", loc);
  const org = localized(profile.official, "organization", loc);

  return {
    title: `${name} — ${title}, ${org} | Virkavastuu.fi`,
    description: localized(profile.official, "bio", loc).slice(0, 160),
  };
}

export default async function OfficialProfilePage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const profile = await getOfficialBySlug(id);

  if (!profile) {
    notFound();
  }

  const t = await getTranslations("official");
  const loc = locale as Locale;
  const {
    official,
    previous_roles,
    affiliations,
    public_statements,
    feedback,
  } = profile;

  const fullName = `${official.first_name} ${official.last_name}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Back link */}
      <Link
        href={official.category === "municipal" ? "/municipal-officials" : "/state-officials"}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-civic-800 transition-colors"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {t("backToList")}
      </Link>

      {/* Profile header */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-civic-200 text-2xl font-bold text-civic-800">
          {official.first_name[0]}
          {official.last_name[0]}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-civic-900 sm:text-3xl">
            {fullName}
          </h1>
          <p className="mt-1 text-lg text-civic-600">
            {localized(official, "title", loc)},{" "}
            {localized(official, "organization", loc)}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>
              <span className="font-medium text-civic-800">
                {t("appointmentDate")}:
              </span>{" "}
              {formatDate(official.appointment_date, loc)}
            </span>
            <span>
              <span className="font-medium text-civic-800">
                {t("appointedBy")}:
              </span>{" "}
              {localized(official, "appointed_by", loc)}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {localized(official, "bio", loc)}
          </p>
          {(official.email || official.phone) && (
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {official.email && (
                <a href={`mailto:${official.email}`} className="inline-flex items-center gap-1.5 text-accent-600 hover:underline">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {official.email}
                </a>
              )}
              {official.phone && (
                <a href={`tel:${official.phone}`} className="inline-flex items-center gap-1.5 text-accent-600 hover:underline">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t("phone")}: {official.phone}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-10">
        {/* Previous roles */}
        {previous_roles.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-civic-900 mb-4">
              {t("previousRoles")}
            </h2>
            <div className="space-y-3">
              {previous_roles.map((role) => (
                <div
                  key={role.id}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-civic-800">
                      {localized(role, "role", loc)}
                    </p>
                    <p className="text-sm text-muted">
                      {localized(role, "organization", loc)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span>
                      {formatDate(role.start_date, loc)} —{" "}
                      {role.end_date ? formatDate(role.end_date, loc) : ""}
                    </span>
                    {role.source_url && (
                      <a
                        href={role.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:underline"
                      >
                        {t("viewSource")}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Affiliations */}
        {affiliations.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-civic-900 mb-4">
              {t("affiliations")}
            </h2>
            <div className="space-y-3">
              {affiliations.map((aff) => (
                <div
                  key={aff.id}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-civic-800">
                      {localized(aff, "role", loc)}
                    </p>
                    <p className="text-sm text-muted">
                      {localized(aff, "organization", loc)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span>
                      {aff.start_date ? formatDate(aff.start_date, loc) : ""} —
                    </span>
                    {aff.source_url && (
                      <a
                        href={aff.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:underline"
                      >
                        {t("viewSource")}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Public statements */}
        {public_statements.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-civic-900 mb-4">
              {t("publicStatements")}
            </h2>
            <div className="space-y-3">
              {public_statements.map((stmt) => (
                <div
                  key={stmt.id}
                  className="rounded-xl border border-border bg-white p-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-civic-800">
                        {localized(stmt, "title", loc)}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {localized(stmt, "summary", loc)}
                      </p>
                    </div>
                    <div className="shrink-0 text-sm text-muted sm:text-right">
                      <p>{formatDate(stmt.date, loc)}</p>
                      <a
                        href={stmt.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:underline"
                      >
                        {stmt.source_name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Feedback display + submission form */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FeedbackSection feedback={feedback} />
          </div>
          <div>
            <FeedbackForm officialId={official.id} policyAreas={feedback} />
          </div>
        </div>
      </div>
    </div>
  );
}
