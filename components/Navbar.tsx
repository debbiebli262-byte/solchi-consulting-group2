import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Lang, useI18n } from "../i18n";

const languages: { code: Lang; label: string; flagSrc: string }[] = [
  { code: "he", label: "עברית", flagSrc: "https://flagcdn.com/il.svg" },
  { code: "en", label: "English", flagSrc: "https://flagcdn.com/us.svg" },
  { code: "ja", label: "日本語", flagSrc: "https://flagcdn.com/jp.svg" },
];

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setLanguageOpen(false);
  }, [location.pathname]);

  const navItems = useMemo(
    () => [
      { to: "/", label: t("nav.home") },
      { to: "/about", label: t("nav.about") },
      { to: "/electricity", label: t("nav.electricity") },
      { to: "/is", label: t("nav.is") },
      { to: "/contact", label: t("nav.contact") },
    ],
    [t]
  );

  const handleNavClick = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const main = document.getElementById("main");
      main?.focus();
    }
  };

  const currentLanguage =
    languages.find((item) => item.code === lang) ?? languages[0];

  const logoUrl = "/logo.png";
  const dropdownAlign = lang === "he" ? "text-right" : "text-left";

  const labels =
    lang === "he"
      ? {
          skip: "דלגי לתוכן הראשי",
          nav: "ניווט ראשי",
          switchLanguage: "בחירת שפה",
          openMenu: "פתחי תפריט",
          closeMenu: "סגרי תפריט",
          logoAlt: "לוגו Solchi",
          overlay: "סגירת שכבת התפריט",
        }
      : lang === "ja"
      ? {
          skip: "メインコンテンツへスキップ",
          nav: "メインナビゲーション",
          switchLanguage: "言語を選択",
          openMenu: "メニューを開く",
          closeMenu: "メニューを閉じる",
          logoAlt: "Solchi ロゴ",
          overlay: "メニューを閉じる",
        }
      : {
          skip: "Skip to main content",
          nav: "Main navigation",
          switchLanguage: "Select language",
          openMenu: "Open menu",
          closeMenu: "Close menu",
          logoAlt: "Solchi logo",
          overlay: "Close menu overlay",
        };

  const LanguageDropdown = () => (
    <div className="relative">
      <button
        type="button"
        onClick={() => setLanguageOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800 shrink-0 min-h-[44px]"
        aria-label={labels.switchLanguage}
        aria-expanded={languageOpen}
        dir="ltr"
      >
        <GlobeIcon className="w-5 h-5" />

        <img
          src={currentLanguage.flagSrc}
          alt=""
          className="w-5 h-4 object-cover rounded-sm"
        />

        <span dir="auto">{currentLanguage.label}</span>

        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${
            languageOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {languageOpen && (
        <div
          className={`absolute top-full mt-2 min-w-36 rounded-2xl bg-white border border-slate-100 shadow-xl overflow-hidden z-[80] ${
            lang === "he" ? "left-0" : "right-0"
          }`}
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLang(item.code);
                setLanguageOpen(false);
              }}
              className={`w-full px-4 py-3 text-sm font-bold text-left transition-colors ${
                lang === item.code
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
              dir="ltr"
            >
              <span className="flex items-center justify-start gap-3">
                <img
                  src={item.flagSrc}
                  alt=""
                  className="w-5 h-4 object-cover rounded-sm"
                />

                <span dir="auto">{item.label}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-white border border-slate-200 px-4 py-2 rounded-lg z-[9999] font-bold text-slate-800"
      >
        {labels.skip}
      </a>

      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        {/* Desktop */}
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 hidden md:flex items-center gap-8"
        >
          <Link
            to="/"
            className="flex items-center shrink-0"
            onClick={() => handleNavClick("/")}
            aria-label={labels.logoAlt}
          >
            <img src={logoUrl} alt={labels.logoAlt} className="h-10 w-auto" />
          </Link>

          <nav
            className="flex items-center gap-8 flex-1"
            aria-label={labels.nav}
          >
            {navItems.map((item) => {
              const isCurrent = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => handleNavClick(item.to)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`font-bold transition-colors whitespace-nowrap ${
                    isCurrent
                      ? "text-blue-700"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageDropdown />
        </div>

        {/* Mobile */}
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:hidden flex items-center justify-between"
        >
          <Link
            to="/"
            className="flex items-center shrink-0"
            onClick={() => handleNavClick("/")}
            aria-label={labels.logoAlt}
          >
            <img src={logoUrl} alt={labels.logoAlt} className="h-10 w-auto" />
          </Link>

          <div className="flex items-center gap-3 shrink-0">
            <LanguageDropdown />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer touch-manipulation"
              aria-label={open ? labels.closeMenu : labels.openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed top-20 inset-x-0 z-[60] md:hidden">
          <button
            type="button"
            className="fixed inset-0 top-20 bg-black/20 z-[60]"
            onClick={() => setOpen(false)}
            aria-label={labels.overlay}
          />

          <div className="relative z-[61] bg-white border-b border-slate-100 shadow-lg">
            <nav
              id="mobile-navigation"
              dir={lang === "he" ? "rtl" : "ltr"}
              aria-label={labels.nav}
              className={`max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 ${dropdownAlign}`}
            >
              {navItems.map((item) => {
                const isCurrent = location.pathname === item.to;

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => handleNavClick(item.to)}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`px-4 py-3 rounded-2xl font-bold transition-colors ${dropdownAlign} cursor-pointer ${
                      isCurrent
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

/* Icons */

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12h18"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3c2.5 2.7 4 5.8 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.8-4-9s1.5-6.3 4-9z"
    />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
