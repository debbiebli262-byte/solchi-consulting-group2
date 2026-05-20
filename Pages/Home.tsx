import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

const Home: React.FC = () => {
  const { t } = useI18n();

  const logoUrl = "/logo.png";

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1800"
            alt="Technology and electrical systems background"
            className="w-full h-full object-cover opacity-50"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-slate-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/35 to-slate-950"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
          <div className="max-w-6xl mx-auto text-center">
            <img
              src={logoUrl}
              alt="Solchi Logo"
              className="h-28 md:h-40 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(37,99,235,0.35)]"
            />

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tech-font tracking-tight leading-tight">
              {t("home.hero.titlePrefix")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {t("home.hero.titleHighlight")}
              </span>{" "}
              {t("home.hero.titleSuffix")}
            </h1>

            <div className="inline-flex items-center justify-center rounded-full border border-blue-500/70 bg-slate-950/45 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 mb-10 shadow-[0_0_25px_rgba(37,99,235,0.25)]">
              <span className="text-slate-100 text-sm md:text-lg font-semibold">
                {t("home.hero.focusLine")}
              </span>
            </div>

            <p className="text-lg md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              {t("home.hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 md:py-5 px-10 md:px-14 rounded-full text-center text-lg md:text-xl transition-all shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.65)]"
              >
                {t("home.hero.ctaPrimary")}
              </Link>

              <Link
                to="/about"
                className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 md:py-5 px-10 md:px-14 rounded-full text-center text-lg md:text-xl backdrop-blur-md border border-white/25 transition-all"
              >
                {t("home.hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <img
              src={logoUrl}
              alt="Solchi Logo"
              className="h-24 md:h-32 w-auto mx-auto mb-8 opacity-100 transition-transform duration-500 hover:scale-105"
            />

            <h2 className="text-4xl font-bold text-slate-900 mb-8 tech-font">
              {t("home.intro.title")}
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              {t("home.intro.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 tech-font border-r-4 border-blue-600 pr-4">
                {t("home.aboutBlock.title")}
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed">
                {t("home.aboutBlock.p1")}
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                {t("home.aboutBlock.p2")}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-blue-900/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-200">
              <h4 className="text-xl font-bold text-blue-600 mb-6 tech-font">
                {t("home.services.title")}
              </h4>

              <p className="text-slate-600 mb-6 font-medium">
                {t("home.services.subtitle")}
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <span className="font-bold">
                      {t("home.services.energy.title")}
                    </span>{" "}
                    - {t("home.services.energy.desc")}
                  </p>
                </li>

                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <span className="font-bold">
                      {t("home.services.is.title")}
                    </span>{" "}
                    - {t("home.services.is.desc")}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Specialties */}
          <div className="space-y-24">
            {/* Electricity */}
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,41,59,0.5)]">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-8 tech-font text-blue-400">
                    {t("home.electricity.title")}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {t("home.electricity.subtitle")}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
                    <li className="flex gap-2">
                      <span>•</span> {t("home.electricity.bullets.0")}
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> {t("home.electricity.bullets.1")}
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> {t("home.electricity.bullets.2")}
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> {t("home.electricity.bullets.3")}
                    </li>
                  </ul>

                  <div className="mt-10">
                    <Link
                      to="/electricity"
                      className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2 group/link"
                    >
                      {t("home.electricity.readMore")}{" "}
                      <span className="transition-transform group-hover/link:translate-x-[-4px]">
                        ←
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-full aspect-video bg-blue-500/10 rounded-2xl border border-blue-500/20 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                    <img
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=70&w=800"
                      alt="Electricity infrastructure"
                      className="w-full h-full object-cover grayscale opacity-50"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* IS */}
            <div className="bg-blue-50 rounded-[3rem] p-12 md:p-16 border border-blue-100 overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(191,219,254,0.3)] hover:border-blue-200">
              <div className="relative z-10 flex flex-col lg:flex-row-reverse gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-8 tech-font text-slate-900">
                    {t("home.is.title")}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {t("home.is.subtitle")}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-500">
                    <li className="flex gap-2">
                      <span>•</span> {t("home.is.bullets.0")}
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> {t("home.is.bullets.1")}
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> {t("home.is.bullets.2")}
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> {t("home.is.bullets.3")}
                    </li>
                  </ul>

                  <div className="mt-10">
                    <Link
                      to="/is"
                      className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 group/link"
                    >
                      {t("home.is.readMore")}{" "}
                      <span className="transition-transform group-hover/link:translate-x-[-4px]">
                        ←
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=70&w=800"
                      alt="Data systems"
                      className="w-full h-full object-cover opacity-40 grayscale"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-blue-500/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 tech-font">
            {t("home.philosophy.title")}
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            {t("home.philosophy.text")}
          </p>

          <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform hover:scale-105 duration-300">
            <div className="bg-slate-50 px-8 py-2 rounded-full font-bold text-slate-800 italic">
              {t("home.philosophy.quote")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
