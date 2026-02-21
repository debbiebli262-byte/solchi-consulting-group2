import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "he" | "en";

const STORAGE_KEY = "site_lang";

export const copy = {
  he: {
    nav: {
      home: "דף הבית",
      about: "אודות",
      electricity: "חטיבת חשמל",
      is: "מערכות מידע",
      contact: "צור קשר",
      language: "שפה",
    },
    switchTo: "English",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      electricity: "Electricity Division",
      is: "Information Systems",
      contact: "Contact",
      language: "Language",
    },
    switchTo: "עברית",
  },
} as const;

type Copy = typeof copy.he;

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getDefaultLang(): Lang {
  // 1) אם שמור בדפדפן
  const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Lang | null;
  if (saved === "he" || saved === "en") return saved;

  // 2) אחרת לפי שפת דפדפן (אם en -> אנגלית, אחרת עברית)
  if (typeof navigator !== "undefined") {
    const n = navigator.language?.toLowerCase() || "";
    if (n.startsWith("en")) return "en";
  }
  return "he";
}

function getValueByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => (acc && acc[part] != null ? acc[part] : undefined), obj);
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => getDefaultLang());

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
      document.documentElement.dir = l === "he" ? "rtl" : "ltr";
    }
  };

  const toggleLang = () => setLang(lang === "he" ? "en" : "he");

  useEffect(() => {
    // לוודא ש-dir נכון גם ברענון
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    }
  }, [lang]);

  const t = (key: string) => {
    const current = copy[lang] as unknown as Copy;
    const value = getValueByPath(current, key);
    return typeof value === "string" ? value : key; // אם אין תרגום, מחזיר את ה-key
  };

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang]);

  return React.createElement(I18nContext.Provider, { value }, children);
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
