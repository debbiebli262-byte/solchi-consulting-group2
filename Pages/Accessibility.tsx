import React from "react";
import { useI18n } from "../i18n";

const Accessibility: React.FC = () => {
  const { t, lang } = useI18n();

  return (
    <div className="min-h-screen bg-white py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-3xl font-bold mb-10 tech-font border-blue-600 ${lang === "he" ? "border-r-4 pr-4" : "border-l-4 pl-4"}`}>
          {t("accessibility.title")}
        </h1>

        <div className="prose prose-lg text-slate-700 leading-relaxed space-y-8">
          <section>
            <p className="font-bold">{t("accessibility.updatedLine")}</p>
            <p>{t("accessibility.intro")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {t("accessibility.levelTitle")}
            </h2>
            <p>{t("accessibility.levelText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {t("accessibility.adjustmentsTitle")}
            </h2>
            <ul className={`list-disc space-y-2 ${lang === "he" ? "pr-6" : "pl-6"}`}>
              <li>{t("accessibility.adjustments.0")}</li>
              <li>{t("accessibility.adjustments.1")}</li>
              <li>{t("accessibility.adjustments.2")}</li>
              <li>{t("accessibility.adjustments.3")}</li>
              <li>{t("accessibility.adjustments.4")}</li>
              <li>{t("accessibility.adjustments.5")}</li>
              <li>{t("accessibility.adjustments.6")}</li>
              <li>{t("accessibility.adjustments.7")}</li>
              <li>{t("accessibility.adjustments.8")}</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              {t("accessibility.issueTitle")}
            </h2>
            <p>{t("accessibility.issueText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {t("accessibility.businessArrangementsTitle")}
            </h2>
            <p>{t("accessibility.businessArrangements.0")}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
