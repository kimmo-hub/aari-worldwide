import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });

  return {
    title: {
      default: `${t("siteName")} — ${t("tagline")}`,
      template: `%s | ${t("siteName")}`,
    },
    description:
      locale === "fi"
        ? "Kansalaispalvelu, joka edistää julkisen vallan läpinäkyvyyttä ja vastuullisuutta Suomessa."
        : "A civic platform promoting transparency and accountability in Finnish public governance.",
    metadataBase: new URL("https://virkavastuu.fi"),
    openGraph: {
      siteName: t("siteName"),
      type: "website",
      locale: locale === "fi" ? "fi_FI" : "en_GB",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
