import { getTranslations } from "next-intl/server";
import { getMunicipalOfficials } from "@/lib/data";
import { MUNICIPALITIES } from "@/lib/municipality-data";
import MunicipalView from "@/components/MunicipalView";

export default async function MunicipalOfficialsPage() {
  const t = await getTranslations("municipalOfficials");
  const officials = await getMunicipalOfficials();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-civic-900 sm:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-muted">{t("description")}</p>
      </div>
      <MunicipalView officials={officials} regions={MUNICIPALITIES} />
    </div>
  );
}
