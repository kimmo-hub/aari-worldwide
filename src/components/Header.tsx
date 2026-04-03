"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";

export default function Header() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/officials" as const, label: t("officials") },
    { href: "/about" as const, label: t("about") },
  ];

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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-civic-800"
                      : "text-muted hover:text-civic-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
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
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden rounded p-1.5 text-muted hover:text-civic-800 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-white px-4 py-3 sm:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-civic-50 text-civic-800"
                    : "text-muted hover:bg-civic-50 hover:text-civic-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
