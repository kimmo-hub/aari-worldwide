import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="text-2xl font-bold text-civic-900 sm:text-3xl">
        {t("title")}
      </h1>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-civic-800">
            {t("mission.title")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t("mission.description")}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-civic-800">
            {t("howItWorks.title")}
          </h2>
          <div className="mt-4 space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-civic-100 text-sm font-bold text-civic-700">
                1
              </div>
              <div>
                <p className="font-medium text-civic-800">
                  {t("howItWorks.step1.title")}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {t("howItWorks.step1.description")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-civic-100 text-sm font-bold text-civic-700">
                2
              </div>
              <div>
                <p className="font-medium text-civic-800">
                  {t("howItWorks.step2.title")}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {t("howItWorks.step2.description")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-civic-100 text-sm font-bold text-civic-700">
                3
              </div>
              <div>
                <p className="font-medium text-civic-800">
                  {t("howItWorks.step3.title")}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {t("howItWorks.step3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-civic-800">
            {t("principles.title")}
          </h2>
          <ul className="mt-3 space-y-2">
            {(["transparency", "accuracy", "fairness", "privacy"] as const).map(
              (key) => (
                <li key={key} className="flex items-start gap-2 text-sm text-muted">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-civic-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong className="text-civic-800">
                      {t(`principles.${key}.title`)}
                    </strong>{" "}
                    — {t(`principles.${key}.description`)}
                  </span>
                </li>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-civic-800">
            {t("dataPolicy.title")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t("dataPolicy.description")}
          </p>
        </section>

        <section className="rounded-xl border border-civic-200 bg-civic-50 p-5">
          <h2 className="text-lg font-semibold text-civic-800">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {t("contact.description")}
          </p>
        </section>
      </div>
    </div>
  );
}
