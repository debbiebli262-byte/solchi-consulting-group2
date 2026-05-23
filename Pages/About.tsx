import React from "react";
import { useI18n } from "../i18n";

const About: React.FC = () => {
  const { t } = useI18n();

  const logoUrl = "/logo.png";
  const iconStroke = "#DCEEFF";

  const iconGlow: React.CSSProperties = {
  filter:
    "drop-shadow(0 0 2px rgba(255,255,255,1)) drop-shadow(0 0 8px rgba(59,130,246,0.95)) drop-shadow(0 0 20px rgba(29,78,216,0.9))",
};

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="bg-blue-50/70 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/40 rounded-full -mr-32 -mt-32"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tech-font">
              {t("about.hero.title")}
            </h1>

            <p className="text-xl text-blue-700 font-bold max-w-2xl">
              {t("about.hero.subtitle")}
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={logoUrl}
              alt="Solchi Logo"
              className="h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Divisions Highlight */}
      <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Electricity Card */}
          <div className="group bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.22)] hover:shadow-[0_0_60px_rgba(59,130,246,0.35)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-600/25 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tech-font">
                  {t("about.divisions.electricity.title")}
                </h2>

                <p className="text-blue-100 text-lg leading-relaxed">
                  {t("about.divisions.electricity.desc")}
                </p>
              </div>

              <div className="flex-shrink-0">
                <svg
                  className="w-32 h-32"
                  viewBox="0 0 64 64"
                  fill="none"
                  style={iconGlow}
                >
                  <path
                    d="M36 4L12 35H29L24 60L52 25H34L36 4Z"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Information Systems Card */}
          <div className="group bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.22)] hover:shadow-[0_0_60px_rgba(99,102,241,0.35)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-600/25 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tech-font">
                  {t("about.divisions.informationSystems.title")}
                </h2>

                <p className="text-indigo-100 text-lg leading-relaxed">
                  {t("about.divisions.informationSystems.desc")}
                </p>
              </div>

              <div className="flex-shrink-0">
                <svg
                  className="w-32 h-32"
                  viewBox="0 0 64 64"
                  fill="none"
                  style={iconGlow}
                
                >
                  {/* Monitor frame */}
                  <rect
                    x="8"
                    y="8"
                    width="48"
                    height="36"
                    rx="3"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Centered </> symbol */}
                  <path
                    d="M26 19L18 26L26 33"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M38 19L46 26L38 33"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M35 18L29 34"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />

                  {/* Two monitor legs */}
                  <path
                    d="M25 44L24 54"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />

                  <path
                    d="M39 44L40 54"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />

                  {/* Base */}
                  <path
                    d="M20 56H44"
                    stroke={iconStroke}
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>{t("about.content.p1")}</p>
            <p>{t("about.content.p2")}</p>
            <p>{t("about.content.p3")}</p>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/30 rounded-full -mr-16 -mt-16"></div>

            <h3 className="text-2xl font-bold mb-8 tech-font text-blue-400">
              {t("about.vision.title")}
            </h3>

            <ul className="space-y-6">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                  <p>{t(`about.vision.items.${i}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
