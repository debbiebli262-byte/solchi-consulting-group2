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

    /* ---------------- HOME ---------------- */
    home: {
      hero: {
        titlePrefix: "We Make",
        titleHighlight: "IT",
        titleSuffix: "Work",
        subtitle:
          "אנו ב-Solchi מבינים שאין שני עסקים זהים. נלווה אותך באופן אישי ליישום אסטרטגיות טכנולוגיות בהתאמה למטרות העסקיות הייחודיות ונבנה את התוכנית המתאימה ביותר לצורך הייחודי שלך.",
        ctaPrimary: "בואו נדבר",
        ctaSecondary: "מי אנחנו?",
      },
      intro: {
        title: "אנחנו לא רק מייעצים, אנחנו פותרים.",
        subtitle:
          "הידע והמומחיות העמוקים שלנו בתעשייה מבטיחים שתקבל ייעוץ מותאם ותוצאות מוחשיות.",
      },
    },

    /* ---------------- ELECTRICITY PAGE ---------------- */
    electricity: {
      pageTag: "חטיבת החשמל",
      name: "יחיאל אמיר כהן",
      role:
        "מהנדס חשמל בכיר, יועץ ומנהל פרויקטים בתחום מערכות עתירות אנרגיה בכלל ותחנות השנאה/הוצאת אנרגיה בפרט.",
      lead: "מוביל הפעילות בחטיבת החשמל והאנרגיה",
      experienceTitle: "ניסיון ומומחיות",
      experienceP1:
        "בעל מעל 30 שנות ניסיון בניהול פרויקטים עתירי אנרגיה לפיתוח מערכות מורכבות מול יצרני חשמל, משרדי ממשלה וארגונים עסקיים.",
      experienceP2:
        'התמחות במסדרים מבודדי גז (GIS) והיכרות מעמיקה עם מערכת החשמל בישראל, כולל ניסיון כ"מורשה בכיר".',
      expertiseTitle: "תחומי התמחות מרכזיים:",
      expertise: [
        "התנעה והובלת פרויקטים אינטגרטיביים",
        "שילוב מערכות עתירות אנרגיה ברשת החשמל",
        "תכנון פרטני של מתקנים חשמליים",
        "פיתוח מתודולוגיות תפעול ותחזוקה",
        "שמירה על בטיחות והגנה על מתקנים",
        "מענה לתקלות קריטיות בזמן אמת",
      ],
      servicesTitle: "שירותי הייעוץ שלנו",
      services: [
        "ליווי מקצה לקצה – משלב הייזום ועד ליישום מלא.",
        "אופטימיזציה ובחינת כדאיות פיננסית.",
        "ליווי רגולטורי מול חברת החשמל וגורמי משק.",
        "ליווי בטיחותי ותפעולי שוטף.",
      ],
      clientsTitle: "הלקוחות שלנו בתחום האנרגיה",
      clients: [
        "יצרני חשמל פרטיים",
        "משרדי ממשלה",
        "חברות תשתיות",
        "ארגונים תעשייתיים",
      ],
    },

    /* ---------------- INFORMATION SYSTEMS PAGE ---------------- */
    isPage: {
      hero: {
        tag: "חטיבת מערכות מידע",
        name: "הילה כהן",
        subtitle:
          "מובילת פעילות מערכות המידע. מומחית בניהול ויישום פרויקטי מערכות מידע מורכבים בארגונים פיננסיים.",
        badges: {
          salesforce: "Salesforce Specialist",
          fintech: "Fintech Expert",
        },
      },
      expertise: {
        title: "מומחיות וערך מוסף",
        p1:
          "אנו מביאים ערך מוסף משמעותי לארגונים פיננסיים בזכות ניסיון עמוק במערכות אשראי ותהליכים פיננסיים מקצה לקצה.",
        p2:
          "מחויבים לפשט מורכבות ולהוביל תהליכים משלב הייזום ועד ליישום מלא.",
      },
      credit: {
        title: "מערכות אשראי ופיננסים",
        items: [
          "הגשת בקשה וחיתום",
          "תפעול הלוואות",
          "ניהול בקרות ודוחות",
          "ציות ורגולציה",
          "אפיון תהליכים עסקיים",
          "אינטגרציה (ERP, CRM)",
        ],
      },
      more: {
        title: "תחומי התמחות נוספים",
        items: [
          {
            title: "Roadmap אסטרטגי",
            desc: "בניית תוכנית מחשוב וקביעת KPI.",
          },
          {
            title: "Salesforce",
            desc: "פיתוח וניהול פרויקטי Salesforce מורכבים.",
          },
          {
            title: "ניהול Delivery",
            desc: "הובלת פרויקטים מקצה לקצה.",
          },
          {
            title: "כתיבת מכרזים",
            desc: "איתור ובחירת פתרונות מקצועיים.",
          },
          {
            title: "ניתוח כדאיות",
            desc: "בחינת חלופות עלות-תועלת.",
          },
        ],
      },
      why: {
        title: "למה Solchi למערכות מידע?",
        items: [
          "שילוב הבנה פיננסית ומומחיות טכנולוגית",
          "ניסיון מוכח במערכות אשראי ובנקאות",
          "הובלה חוצת-ארגון",
          "ראייה מערכתית ארוכת טווח",
        ],
      },
    },

    /* ---------------- CONTACT ---------------- */
    contact: {
      pageTitle: "צור קשר",
      pageSubtitle: "אנחנו כאן כדי לענות על כל שאלה.",
      submit: "שלח פניה",
      sending: "שולח פניה...",
    },

    /* ---------------- THANK YOU ---------------- */
    thankYou: {
      title: "הודעתכם התקבלה!",
      subtitle: "נחזור אליכם בהקדם.",
      backHome: "חזרה לדף הבית",
    },

    /* ---------------- FOOTER ---------------- */
    footer: {
      rights: "כל הזכויות שמורות.",
      accessibility: "הצהרת נגישות",
    },
  },

  /* ================= ENGLISH ================= */

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

    home: {
      hero: {
        titlePrefix: "We make",
        titleHighlight: "IT",
        titleSuffix: "work",
        subtitle:
          "At Solchi, we align technology strategies with your unique business goals.",
        ctaPrimary: "Let’s Talk",
        ctaSecondary: "Who We Are",
      },
      intro: {
        title: "We don’t just advise — we solve.",
        subtitle: "Deep expertise. Measurable results.",
      },
    },

    electricity: {
      pageTag: "Electricity Division",
      name: "Yehiel Amir Cohen",
      role:
        "Senior electrical engineer and consultant specializing in high-energy systems and substations.",
      lead: "Head of Electricity & Energy Division",
      experienceTitle: "Experience & Expertise",
      experienceP1:
        "Over 30 years managing complex high-energy infrastructure projects.",
      experienceP2:
        "Expert in GIS systems with deep familiarity with Israel’s power grid.",
      expertiseTitle: "Core Expertise:",
      expertise: [
        "Integrative project leadership",
        "Grid integration",
        "Electrical facility design",
        "Operations methodology",
        "Safety & protection",
        "Critical fault response",
      ],
      servicesTitle: "Our Consulting Services",
      services: [
        "End-to-end guidance",
        "Optimization & feasibility",
        "Regulatory support",
        "Safety & maintenance",
      ],
      clientsTitle: "Our Energy Clients",
      clients: [
        "Private producers",
        "Government offices",
        "Infrastructure companies",
        "Industrial organizations",
      ],
    },

    isPage: {
      hero: {
        tag: "Information Systems Division",
        name: "Hila Cohen",
        subtitle:
          "Expert in managing complex information systems projects in financial organizations.",
        badges: {
          salesforce: "Salesforce Specialist",
          fintech: "Fintech Expert",
        },
      },
      expertise: {
        title: "Expertise & Value",
        p1:
          "Extensive experience in credit systems and end-to-end financial processes.",
        p2: "Simplifying complexity from initiation to full implementation.",
      },
      credit: {
        title: "Credit & Finance Systems",
        items: [
          "Underwriting",
          "Loan operations",
          "Reporting & controls",
          "Compliance",
          "Business analysis",
          "ERP/CRM integrations",
        ],
      },
      more: {
        title: "Additional Expertise",
        items: [
          { title: "Strategic Roadmap", desc: "IT planning & KPI tracking." },
          { title: "Salesforce", desc: "Core platform development." },
          { title: "Delivery", desc: "End-to-end project leadership." },
          { title: "RFPs", desc: "Professional tender management." },
          { title: "Feasibility", desc: "Cost-benefit analysis." },
        ],
      },
      why: {
        title: "Why Solchi?",
        items: [
          "Financial & tech expertise",
          "Proven banking systems experience",
          "Cross-organizational leadership",
          "Long-term systems vision",
        ],
      },
    },

    contact: {
      pageTitle: "Contact",
      pageSubtitle: "We’re here to answer any question.",
      submit: "Send Message",
      sending: "Sending...",
    },

    thankYou: {
      title: "Message Received!",
      subtitle: "We will contact you shortly.",
      backHome: "Back to Home",
    },

    footer: {
      rights: "All rights reserved.",
      accessibility: "Accessibility Statement",
    },
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
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "he" || saved === "en") return saved;
  }
  return "he";
}

function getValueByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
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
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    }
  }, [lang]);

  const t = (key: string) => {
    const current = copy[lang] as unknown as Copy;
    const value = getValueByPath(current, key);
    return typeof value === "string" ? value : key;
  };

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
