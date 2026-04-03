"use client";

import { useTranslations } from "next-intl";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors.error");

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-civic-200">!</p>
      <h1 className="mt-4 text-xl font-semibold text-civic-900">
        {t("title")}
      </h1>
      <p className="mt-2 text-sm text-muted">{t("description")}</p>
      <button
        onClick={reset}
        className="mt-6 inline-flex items-center rounded-lg bg-civic-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-civic-700"
      >
        {t("retry")}
      </button>
    </div>
  );
}
