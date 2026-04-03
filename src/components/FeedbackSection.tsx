"use client";

import { useTranslations, useLocale } from "next-intl";
import type { FeedbackAggregation } from "@/types/database";
import type { Locale } from "@/i18n/config";

function RatingBar({
  count,
  total,
  rating,
  label,
}: {
  count: number;
  total: number;
  rating: number;
  label: string;
}) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-6 text-right text-muted">{rating}</span>
      <div className="h-2.5 flex-1 rounded-full bg-civic-100">
        <div
          className="h-full rounded-full bg-civic-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-right text-xs text-muted">{count}</span>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function FeedbackSection({
  feedback,
}: {
  feedback: FeedbackAggregation[];
}) {
  const t = useTranslations("official.feedback");
  const locale = useLocale() as Locale;

  if (feedback.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold text-civic-900 mb-6">
        {t("title")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {feedback.map((fb) => {
          const name =
            locale === "fi" ? fb.policy_area_name_fi : fb.policy_area_name_en;
          return (
            <div
              key={fb.policy_area_id}
              className="rounded-xl border border-border bg-white p-5"
            >
              <div className="mb-3 flex items-baseline justify-between">
                <h3 className="font-medium text-civic-800">{name}</h3>
                <span className="text-xs text-muted">
                  {fb.total_responses} {t("responses")}
                </span>
              </div>
              <div className="mb-3 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-civic-900">
                  {fb.average_rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted">/ 5</span>
              </div>
              <div className="space-y-1.5">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <RatingBar
                    key={rating}
                    rating={rating}
                    count={fb.distribution[rating] ?? 0}
                    total={fb.total_responses}
                    label={t(`ratingLabels.${rating}` as Parameters<typeof t>[0])}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
