import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common.footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <p className="text-sm text-muted">{t("description")}</p>
            <p className="mt-1 text-xs text-muted/70">{t("openData")}</p>
          </div>
          <p className="text-xs text-muted/70">
            {t("copyright", { year: String(year) })}
          </p>
        </div>
      </div>
    </footer>
  );
}
