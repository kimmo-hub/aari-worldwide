"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";

export default function Header() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-civic-800 text-sm font-bold text-white">
                V
              </div>
              <span className="text-lg font-semibold text-civic-900">
                {t("siteName")}
              </span>
            </Link>
            <nav className="hidden items-center gap-6 sm:flex">
              <Link
                href="/"
                className="text-sm font-medium text-muted hover:text-civic-800 transition-colors"
              >
                {t("home")}
              </Link>
              <Link
                href="/officials/matti-virtanen"
                className="text-sm font-medium text-muted hover:text-civic-800 transition-colors"
              >
                {t("officials")}
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => switchLocale("fi")}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                locale === "fi"
                  ? "bg-civic-100 text-civic-800"
                  : "text-muted hover:text-civic-800"
              }`}
            >
              FI
            </button>
            <button
              onClick={() => switchLocale("en")}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                locale === "en"
                  ? "bg-civic-100 text-civic-800"
                  : "text-muted hover:text-civic-800"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
