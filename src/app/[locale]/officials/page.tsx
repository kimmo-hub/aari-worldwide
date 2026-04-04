import { getTranslations } from "next-intl/server";
import { getAllOfficials } from "@/lib/data";
import OfficialsSearch from "@/components/OfficialsSearch";

export default async function OfficialsListPage() {
  const t = await getTranslations("officials");
  const officials = await getAllOfficials();

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
