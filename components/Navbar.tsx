import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n";

const Navbar: React.FC = () => {
  const location = useLocation();
  const { lang, toggleLang, t } = useI18n();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.electricity"), path: "/electricity" },
    { name: t("nav.is"), path: "/is" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const logoUrl = "/logo.png";

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logoUrl}
                alt="Solchi Logo"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
          </div>

          <div
            className={`hidden md:flex items-center space-x-2 ${
              lang === "he" ? "space-x-reverse" : ""
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold px-4 py-2 rounded-xl ${
                  isActive(link.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* כפתור החלפת שפה */}
            <button
              type="button"
              onClick={toggleLang}
              className="text-sm font-bold px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50"
              aria-label="Switch language"
            >
              {t("switchTo")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
