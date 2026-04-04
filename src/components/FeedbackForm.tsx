"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import type { FeedbackAggregation } from "@/types/database";
import type { Locale } from "@/i18n/config";

export default function FeedbackForm({
  officialId,
  policyAreas,
}: {
  officialId: string;
  policyAreas: FeedbackAggregation[];
}) {
  const t = useTranslations("official.feedback");
  const locale = useLocale() as Locale;
  const [selectedArea, setSelectedArea] = useState(
    policyAreas[0]?.policy_area_id ?? ""
  );
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || !email || !selectedArea) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          officialId,
          policyAreaId: selectedArea,
          rating,
          email,
          comment,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit feedback");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-civic-200 bg-civic-50 p-6 text-center">
        <svg
          className="mx-auto h-10 w-10 text-civic-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="mt-3 font-semibold text-civic-800">{t("thankYou")}</p>
        <p className="mt-1 text-sm text-muted">{t("verificationSent")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-white p-5 space-y-5"
    >
      <h3 className="font-semibold text-civic-800">{t("submitRating")}</h3>

      {/* Policy area selector */}
      <div>
        <label className="block text-sm font-medium text-civic-800 mb-1.5">
          {t("policyArea")}
        </label>
        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100"
        >
          {policyAreas.map((pa) => (
            <option key={pa.policy_area_id} value={pa.policy_area_id}>
              {locale === "fi" ? pa.policy_area_name_fi : pa.policy_area_name_en}
            </option>
          ))}
        </select>
      </div>

      {/* Star rating */}
      <div>
        <label className="block text-sm font-medium text-civic-800 mb-1.5">
          {t("ratings")}
        </label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-0.5 transition-transform hover:scale-110"
              aria-label={t(`ratingLabels.${star}` as Parameters<typeof t>[0])}
            >
              <svg
                className={`h-7 w-7 ${
                  star <= (hoveredRating || rating)
                    ? "fill-civic-500 text-civic-500"
                    : "fill-none text-civic-300"
                } transition-colors`}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
          ))}
          {rating > 0 && (
            <span className="ml-2 text-sm text-muted">
              {t(`ratingLabels.${rating}` as Parameters<typeof t>[0])}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="feedback-email"
          className="block text-sm font-medium text-civic-800 mb-1.5"
        >
          {t("email")}
        </label>
        <input
          id="feedback-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted/60 focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100"
        />
      </div>

      {/* Comment */}
      <div>
        <label
          htmlFor="feedback-comment"
          className="block text-sm font-medium text-civic-800 mb-1.5"
        >
          {t("comment")}
        </label>
        <textarea
          id="feedback-comment"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted/60 focus:border-civic-400 focus:outline-none focus:ring-2 focus:ring-civic-100 resize-none"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!rating || !email || submitting}
        className="w-full rounded-lg bg-civic-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-civic-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ...
          </span>
        ) : (
          t("submit")
        )}
      </button>
    </form>
  );
}
