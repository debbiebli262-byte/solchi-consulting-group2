import React, { useEffect, useState } from "react";
import { useI18n } from "../i18n";

const InformationSystems: React.FC = () => {
  const { lang, t } = useI18n();
  const [activePopup, setActivePopup] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePopup(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const isHebrew = lang === "he";

  const renderCardDescription = (idx: number) => {
    if (isHebrew && activePopup === "salesforce" && idx === 2) {
      return (
        <>
          מעקב אחר פניות, סטטוסים,
          <br />
          תקלות והיסטוריית טיפול.
        </>
      );
    }

    return t(`isPage.popups.${activePopup}.cards.${idx}.desc`);
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded mb-4 uppercase tracking-widest tech-font">
                {t("isPage.hero.tag")}
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tech-font leading-tight">
                {t("isPage.hero.name")}
              </h1>

              <p
                className={`text-xl text-indigo-100 leading-relaxed font-light ${
                  isHebrew
                    ? "border-r-4 border-indigo-500 pr-6"
                    : "border-l-4 border-indigo-500 pl-6"
                }`}
              >
                {t("isPage.hero.subtitle")}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  {
                    key: "salesforce",
                    label: t("isPage.hero.badges.salesforce"),
                  },
                  {
                    key: "fintech",
                    label: t("isPage.hero.badges.fintech"),
                  },
                  {
                    key: "processAutomation",
                    label: t("isPage.hero.badges.processAutomation"),
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActivePopup(item.key)}
                    className="bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 px-4 py-2 rounded-lg text-indigo-200 text-sm font-bold hover:bg-indigo-500/20 hover:border-indigo-400 hover:scale-105 transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-600/40 blur-3xl rounded-full scale-90 group-hover:scale-110 transition-transform duration-700"></div>

                <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-800 rounded-[3rem] border-2 border-indigo-400/50 overflow-hidden shadow-[0_0_60px_rgba(79,70,229,0.3)] transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/HilaCohen.png"
                    alt={t("isPage.hero.name")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-indigo-500 rounded-tr-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tech-font border-b-2 border-indigo-600 pb-2 inline-block">
              {t("isPage.expertise.title")}
            </h2>

            <div className="prose prose-lg text-slate-700 leading-relaxed mb-12 text-justify">
              <p>{t("isPage.expertise.p1")}</p>
              <p>{t("isPage.expertise.p2")}</p>
            </div>

            <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-10 text-indigo-400 tech-font flex items-center gap-4">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {t("isPage.credit.title")}
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-slate-300">
                {[
                  "isPage.credit.items.0",
                  "isPage.credit.items.1",
                  "isPage.credit.items.2",
                  "isPage.credit.items.3",
                  "isPage.credit.items.4",
                  "isPage.credit.items.5",
                ].map((key) => (
                  <li
                    key={key}
                    className={`flex items-start gap-3 italic transition-colors hover:text-white ${
                      isHebrew
                        ? "border-r border-indigo-500/30 pr-4"
                        : "border-l border-indigo-500/30 pl-4"
                    }`}
                  >
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tech-font">
              {t("isPage.more.title")}
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <h4 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                    <span className="text-indigo-400">#</span>
                    {t(`isPage.more.items.${idx}.title`)}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(`isPage.more.items.${idx}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-[5rem] mx-4 mb-24 overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-16 tech-font">
            {t("isPage.why.title")}
          </h2>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${
              isHebrew ? "text-right" : "text-left"
            }`}
          >
            {["0", "1", "2", "3"].map((i) => (
              <div
                key={i}
                className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {Number(i) + 1}
                </div>

                <p className="font-medium text-lg text-indigo-50 self-center leading-relaxed">
                  {t(`isPage.why.items.${i}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activePopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-[2px] px-4 py-5 md:px-6"
          onClick={() => setActivePopup(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            dir={isHebrew ? "rtl" : "ltr"}
            className={`relative w-full max-w-[900px] max-h-[calc(100vh-32px)] overflow-hidden bg-white rounded-[1.65rem] border border-slate-200/80 shadow-[0_28px_90px_rgba(15,23,42,0.28)] px-6 py-5 md:px-10 md:py-7 animate-fade-in ${
              isHebrew ? "text-right" : "text-left"
            }`}
          >
            <button
              type="button"
              onClick={() => setActivePopup(null)}
              aria-label="Close popup"
              className={`absolute top-5 ${
                isHebrew ? "left-5" : "right-5"
              } z-20 w-10 h-10 rounded-full border border-slate-200 bg-white/90 text-slate-900 text-2xl leading-none flex items-center justify-center hover:bg-slate-50 transition shadow-sm`}
            >
              ×
            </button>

            <div className="pointer-events-none absolute top-2 right-8 hidden md:block h-28 w-[330px] overflow-hidden opacity-55">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full border-[6px] border-blue-100"></div>
              <div className="absolute right-[198px] top-8 h-12 w-12 rounded-full bg-blue-50"></div>
              <div className="absolute right-[116px] top-4 h-14 w-[98px] rounded-lg bg-blue-50"></div>

              <svg
                className="absolute right-4 top-4 h-16 w-16 text-blue-500"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                <rect x="10" y="14" width="44" height="34" rx="5" stroke="currentColor" strokeWidth="3.5" />
                <path d="M10 24h44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M18 38h7M31 32h7M31 38h15" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="47" cy="19" r="2" fill="currentColor" />
                <circle cx="40" cy="19" r="2" fill="currentColor" />
              </svg>

              <svg
                className="absolute right-[118px] top-[18px] h-14 w-20 text-blue-400"
                viewBox="0 0 88 60"
                fill="none"
                aria-hidden="true"
              >
                <path d="M18 30h18M52 30h18M44 18v24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <rect x="4" y="20" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="3.5" />
                <rect x="36" y="8" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="3.5" />
                <rect x="36" y="36" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="3.5" />
                <rect x="68" y="20" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="3.5" />
              </svg>

              <svg
                className="absolute right-[224px] top-4 h-16 w-16 text-blue-400"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                <ellipse cx="32" cy="16" rx="18" ry="7" stroke="currentColor" strokeWidth="3.5" />
                <path d="M14 16v24c0 4 8 8 18 8s18-4 18-8V16" stroke="currentColor" strokeWidth="3.5" />
                <path d="M14 28c0 4 8 8 18 8s18-4 18-8" stroke="currentColor" strokeWidth="3.5" />
              </svg>
            </div>

            <div className="relative z-10">
              <div dir="ltr" className="flex items-center justify-center gap-4 mb-4 text-blue-700">
                <span className="hidden sm:block h-px w-10 bg-blue-500"></span>

                <span className="text-lg md:text-xl font-medium whitespace-nowrap">
                  {t(`isPage.popups.${activePopup}.eyebrow`)}
                </span>

                <span className="hidden sm:block h-px w-10 bg-blue-500"></span>
              </div>

              <h2 className="text-[1.8rem] md:text-[2.35rem] font-extrabold text-slate-900 text-center mb-3 leading-tight tech-font tracking-tight">
                {t(`isPage.popups.${activePopup}.title`)}
              </h2>

              <p className="max-w-3xl mx-auto text-center text-base md:text-[1.05rem] text-slate-600 leading-relaxed mb-6">
                {t(`isPage.popups.${activePopup}.subtitle`)}
              </p>

              <div dir="ltr" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                {[0, 1, 2].map((idx) => (
                  <div
                    key={idx}
                    dir={isHebrew ? "rtl" : "ltr"}
                    className="min-h-[188px] bg-white border border-slate-100 rounded-2xl px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,23,42,0.11)] transition-all"
                  >
                    <div className="w-[52px] h-[52px] rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                      {idx === 0 && (
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}

                      {idx === 1 && (
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M5 6.5C5 5.12 8.13 4 12 4s7 1.12 7 2.5S15.87 9 12 9 5 7.88 5 6.5Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M5 6.5v4C5 11.88 8.13 13 12 13s7-1.12 7-2.5v-4"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M5 10.5v4C5 15.88 8.13 17 12 17s7-1.12 7-2.5v-4"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M12 17v3M8 20h8"
                          />
                        </svg>
                      )}

                      {idx === 2 && (
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M4 13v-1a8 8 0 0116 0v1"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M5 13h2a2 2 0 012 2v1a2 2 0 01-2 2H5v-5zM19 13h-2a2 2 0 00-2 2v1a2 2 0 002 2h2v-5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M15 18c0 1.1-.9 2-2 2h-2"
                          />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-base md:text-lg font-extrabold text-slate-900 text-center mb-2 leading-snug">
                      {t(`isPage.popups.${activePopup}.cards.${idx}.title`)}
                    </h3>

                    <p className="text-sm md:text-[0.95rem] text-slate-600 text-center leading-relaxed">
                      {renderCardDescription(idx)}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`bg-blue-50/80 border border-blue-100 rounded-2xl px-5 py-4 mb-5 flex flex-col md:flex-row items-center gap-5 ${
                  isHebrew ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-sm shrink-0">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M4 18h16"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M6 15l4-4 3 3 5-7"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M15 7h3v3"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M7.5 6.5h3M9 5v3"
                    />
                  </svg>
                </div>

                <div className="flex-1 text-center">
                  <h3 className="text-lg md:text-xl font-extrabold text-blue-700 mb-1">
                    {t(`isPage.popups.${activePopup}.result.title`)}
                  </h3>

                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    {t(`isPage.popups.${activePopup}.result.desc`)}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="#/contact?division=informationSystems"
                  className="min-w-[220px] h-11 rounded-lg bg-blue-700 text-white font-extrabold hover:bg-blue-800 transition flex items-center justify-center"
                >
                  {isHebrew ? "דברו איתי" : "Contact me"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformationSystems;
