import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n";

const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // סגירת תפריט כשמחליפים עמוד
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // כיוון סרגל: בעברית לוגו בימין, באנגלית לוגו בשמאל
  const headerDirClass = lang === "he" ? "flex-row-reverse" : "flex-row";

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

  const logoUrl = "/logo.png";

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between ${headerDirClass}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Solchi Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-slate-700 hover:text-blue-600 font-bold transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Language switch (globe + EN/HE) */}
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
              aria-label="Switch language"
            >
              <GlobeIcon className="w-5 h-5" />
              <span className="tracking-wider">{lang === "he" ? "HE" : "EN"}</span>
            </button>
          </nav>

          {/* Mobile: burger + language */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language switch */}
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
              aria-label="Switch language"
            >
              <GlobeIcon className="w-5 h-5" />
              <span className="tracking-wider">{lang === "he" ? "HE" : "EN"}</span>
            </button>

            {/* Burger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {open && (
        <div className="fixed top-20 inset-x-0 z-40 md:hidden">
          <div className="bg-white border-b border-slate-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-3 rounded-2xl font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* overlay */}
          <button
            type="button"
            className="fixed inset-0 top-20 bg-black/20"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;

/* ---------------- Icons ---------------- */

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3c2.5 2.7 4 5.8 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.8-4-9s1.5-6.3 4-9z"
    />
  </svg>
);
