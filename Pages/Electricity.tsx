import React, { useCallback, useState } from "react";
import { ElectricityTopicModal } from "../components/ElectricityTopicModal";
import { useI18n } from "../i18n";

const Electricity: React.FC = () => {
  const { t, lang } = useI18n();
  const [activeTopic, setActiveTopic] = useState<number | null>(null);
  const closeTopic = useCallback(() => setActiveTopic(null), []);

  const clients = [
    {
      src: "/logos/dalia.png",
      alt: "דליה Power Plants",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/noga.png",
      alt: "נגה ניהול מערכת החשמל",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/EDF_Energy_logo.svg.png",
      alt: "EDF Energy",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/MeshekEnergy.png",
      alt: "משק אנרגיה",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/InterPlus.png",
      alt: "InterPlus",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/EshkolAvshal.png",
      alt: "אשכול אבשלום",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/Weizmann_new_logo_2023.png",
      alt: "מכון ויצמן למדע",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/logo-חד-אסף.png",
      alt: 'חד-אסף',
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
    {
      src: "/logos/הסמליל_של_נמל_אשדוד.svg.png",
      alt: "נמל אשדוד",
      className: "max-h-16 w-auto object-contain hover:scale-105 transition duration-300",
    },
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-4 uppercase tracking-widest tech-font">
                {t("electricity.pageTag")}
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tech-font leading-tight">
                {t("electricity.name")}
              </h1>

              <p
                className={`text-xl text-blue-100 leading-relaxed font-light ${
                  lang === "he"
                    ? "pr-6 border-r-4 border-blue-500"
                    : "pl-6 border-l-4 border-blue-500"
                }`}
              >
                {t("electricity.role")}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => setActiveTopic(i)}
                    className="relative rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-500/25 hover:text-white hover:shadow-[0_0_16px_rgba(59,130,246,0.7),0_0_36px_rgba(37,99,235,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                  >
                    {t(i === 0 ? "electricity.badges.energy" : i === 1 ? "electricity.badges.substations" : "electricity.badges.gis")}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/40 blur-3xl rounded-full scale-90 group-hover:scale-110 transition-transform duration-700"></div>

                <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-800 rounded-[3rem] border-2 border-blue-400/50 overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.3)] transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/yehielcohen.png"
                    alt={t("electricity.name")}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-blue-500 rounded-tr-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT STICKY COLUMN */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 space-y-16">
              {/* שירותי הייעוץ */}
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20">
                <h3 className="text-xl font-bold mb-8 tech-font">
                  {t("electricity.servicesTitle")}
                </h3>

                <ul className="space-y-6 text-sm">
                  {[0, 1, 2, 3].map((i) => (
                    <li
                      key={i}
                      className="border-b border-blue-400 pb-4 leading-relaxed flex gap-3"
                    >
                      <span className="font-bold text-blue-200">0{i + 1}</span>
                      <p>{t(`electricity.services.${i}`)}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* שירותי התכנון */}
              <div
                onClick={() => {
                  const section = document.getElementById("planning-services");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20 cursor-pointer hover:bg-blue-700 transition-colors"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    const section = document.getElementById("planning-services");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <h3 className="text-xl font-bold mb-8 tech-font">
                  {t("electricity.planningTitle")}
                </h3>

                <ul className="space-y-6 text-sm">
                  {[0, 1, 2, 3].map((i) => (
                    <li
                      key={i}
                      className="border-b border-blue-400 pb-4 flex gap-3 leading-relaxed"
                    >
                      <span className="font-bold text-blue-200">0{i + 1}</span>
                      <p>{t(`electricity.planningSummary.${i}`)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tech-font border-b-2 border-blue-600 pb-2 inline-block">
              {t("electricity.experienceTitle")}
            </h2>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-justify">
              <p>{t("electricity.experienceP1")}</p>
              <p>{t("electricity.experienceP2")}</p>
              <p>{t("electricity.experienceP3")}</p>
              <p>{t("electricity.experienceP4")}</p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8 tech-font">
              {t("electricity.expertiseTitle")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group"
                >
                  <div className="w-3 h-3 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></div>
                  <span className="font-bold text-slate-800">
                    {t(`electricity.expertise.${i}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* Planning Section Anchor */}
            <section id="planning-services" className="mt-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tech-font">
                {t("electricity.planningTitle")}
              </h3>

              <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 md:p-10">
                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  {t("electricity.planningIntro")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group"
                    >
                      <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></div>
                      <p className="text-slate-700 leading-relaxed">
                        {t(`electricity.planningItems.${i}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 tech-font">
            {t("electricity.clientsTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <div
                key={client.src}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center min-h-[180px]"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={client.className}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ElectricityTopicModal topic={activeTopic} close={closeTopic} />
    </div>
  );
};

export default Electricity;
