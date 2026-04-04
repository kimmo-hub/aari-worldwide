import { getTranslations } from "next-intl/server";
import { getStateOfficials } from "@/lib/data";
import OfficialsSearch from "@/components/OfficialsSearch";

export default async function StateOfficialsPage() {
  const t = await getTranslations("stateOfficials");
  const officials = await getStateOfficials();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-civic-900 sm:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-muted">{t("description")}</p>
      </div>
      <OfficialsSearch officials={officials} />
    </div>
  );
}
