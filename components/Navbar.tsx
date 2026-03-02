import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n";

const STORAGE_FONT = "a11y_font_scale";
const STORAGE_CONTRAST = "a11y_contrast";

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  // Font scale in %
  const [fontScale, setFontScale] = useState<number>(() => {
    const saved = typeof window !== "undefined" ? Number(localStorage.getItem(STORAGE_FONT)) : NaN;
    return Number.isFinite(saved) ? clamp(saved, 90, 140) : 100;
  });

  const [highContrast, setHighContrast] = useState<boolean>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_CONTRAST) : null;
    return saved === "1";
  });

  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Apply font scale globally (no CSS changes needed)
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.style.fontSize = `${fontScale}%`;
    localStorage.setItem(STORAGE_FONT, String(fontScale));
  }, [fontScale]);

  // Apply contrast globally (no CSS changes needed)
  useEffect(() => {
    if (typeof document === "undefined") return;
    // Slightly stronger contrast + a bit of saturation; reversible.
    document.documentElement.style.filter = highContrast ? "contrast(1.25) saturate(1.1)" : "";
    localStorage.setItem(STORAGE_CONTRAST, highContrast ? "1" : "0");
  }, [highContrast]);

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

  // Header side: Hebrew -> logo left, nav right ; English -> logo right, nav left
  const headerDirection = lang === "he" ? "flex-row" : "flex-row-reverse";

  // Desktop ordering INSIDE nav group:
  // Hebrew: titles then language then accessibility (farthest right)
  // English: accessibility then language then titles (farthest left)
  const desktopGroupDirection = lang === "he" ? "flex-row" : "flex-row-reverse";

  // Mobile controls: Hebrew -> burger on right ; English -> burger on left
  const mobileControlsDirection = lang === "he" ? "flex-row" : "flex-row-reverse";

  const dropdownAlign = lang === "he" ? "text-right" : "text-left";

  const incFont = () => setFontScale((v) => clamp(v + 10, 90, 140));
  const decFont = () => setFontScale((v) => clamp(v - 10, 90, 140));
  const resetFont = () => setFontScale(100);

  return (
    <>
      {/* Skip link (shows only when tabbing) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-white border border-slate-200 px-4 py-2 rounded-lg z-[9999] font-bold text-slate-800"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center ${headerDirection}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoUrl} alt="Solchi Logo" className="h-10 w-auto" />
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            <div className={`flex items-center gap-6 ${desktopGroupDirection}`}>
              {/* Titles */}
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-slate-700 hover:text-blue-600 font-bold transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Language button */}
              <button
                type="button"
                onClick={toggleLang}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                aria-label="Switch language"
              >
                <GlobeIcon className="w-5 h-5" />
                <span className="tracking-wider">{lang === "he" ? "HE" : "EN"}</span>
              </button>

              {/* Accessibility controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={decFont}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Decrease text size"
                >
                  A-
                </button>

                <button
                  type="button"
                  onClick={incFont}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Increase text size"
                >
                  A+
                </button>

                <button
                  type="button"
                  onClick={() => setHighContrast((v) => !v)}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Toggle high contrast"
                  aria-pressed={highContrast}
                  title="High contrast"
                >
                  <ContrastIcon className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={resetFont}
                  className="hidden lg:inline-flex items-center px-3 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Reset text size"
                  title="Reset"
                >
                  Reset
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className={`md:hidden flex items-center gap-3 shrink-0 ${mobileControlsDirection}`}>
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

            {/* Language */}
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
              aria-label="Switch language"
            >
              <GlobeIcon className="w-5 h-5" />
              <span className="tracking-wider">{lang === "he" ? "HE" : "EN"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {open && (
        <div className="fixed top-20 inset-x-0 z-40 md:hidden">
          <div className="bg-white border-b border-slate-100 shadow-lg">
            <div className={`max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 ${dropdownAlign}`}>
              {/* Accessibility row (mobile) */}
              <div className={`flex items-center gap-2 ${lang === "he" ? "justify-end" : "justify-start"}`}>
                <button
                  type="button"
                  onClick={decFont}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Decrease text size"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={incFont}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Increase text size"
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={() => setHighContrast((v) => !v)}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Toggle high contrast"
                  aria-pressed={highContrast}
                >
                  <ContrastIcon className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={resetFont}
                  className="inline-flex items-center px-3 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all font-bold text-slate-800"
                  aria-label="Reset text size"
                >
                  Reset
                </button>
              </div>

              {/* Nav links */}
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-3 rounded-2xl font-bold text-slate-800 hover:bg-slate-50 transition-colors ${dropdownAlign}`}
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3c2.5 2.7 4 5.8 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.8-4-9s1.5-6.3 4-9z"
    />
  </svg>
);

const ContrastIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a9 9 0 100 18V3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18" />
  </svg>
);
