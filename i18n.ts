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

    home: {
      hero: {
        titlePrefix: "אנחנו גורמים ל-",
        titleHighlight: "IT",
        titleSuffix: "לעבוד",
        subtitle:
          "אנו ב-Solchi מבינים שאין שני עסקים זהים. נלווה אותך באופן אישי ליישום אסטרטגיות טכנולוגיות בהתאמה למטרות העסקיות הייחודיות ונבנה את התוכנית המתאימה ביותר לצורך הייחודי שלך.",
        ctaPrimary: "בואו נדבר",
        ctaSecondary: "מי אנחנו?",
      },
      intro: {
        title: "אנחנו לא רק מייעצים, אנחנו פותרים.",
        subtitle:
          "הידע והמומחיות העמוקים שלנו בתעשייה מבטיחים שתקבל ייעוץ מותאם ותוצאות מוחשיות. נשמח להיות ה-Trusted Advisors שלך",
      },
      aboutBlock: {
        title: "עלינו",
        p1:
          "חברתנו מובילה שילוב ייחודי בין שני עולמות מקצועיים – הנדסת חשמל עתירת אנרגיה וניהול פרויקטי מערכות מידע מורכבים – ומספקת לארגונים פתרונות מקצה לקצה המבוססים על ניסיון רב־שנים, הבנה מערכתית עמוקה ויכולת מוכחת להוביל תהליכים מורכבים בהצלחה.",
        p2:
          "Solchi מתמחה בייעול תהליכים ושיפור ביצועים, התייעלות תפעולית וליווי ההנהלה. אנו מספקים מענה כולל לחברות וארגונים בתחומי הקמת מתקני ייצור, הולכה ואספקת חשמל פרטיים, מחשוב וטרנספורמציה דיגיטלית.",
      },
      services: {
        title: "שירותי הייעוץ שלנו",
        subtitle:
          "בוטיק הייעוץ Solchi מתמחה בייעוץ וליווי אסטרטגי ועוסק בשני תחומים מרכזיים:",
        energy: {
          title: "מערכות עתירות אנרגיה",
          desc:
            "ייעוץ, תכנון ותיאום טכני להקמת מתקני ייצור, הולכה ואספקת חשמל ליצרנים וצרכנים פרטיים.",
        },
        is: {
          title: "מערכות מידע",
          desc:
            "מתמחים במערכות מידע ובחיבור שלהם לתהליכי העבודה בארגון. אנחנו מייצרים את הפתרון הנכון ומלווים אתכם מקצה לקצה.",
        },
      },
      electricity: {
        title: "מומחיות בהנדסת חשמל ומתקנים עתירי אנרגיה",
        subtitle:
          'בראש תחום זה עומד מהנדס חשמל בכיר בעל מעל 30 שנות ניסיון בתכנון, ניהול וליווי פרויקטים מורכבים עבור יצרני חשמל, משרדי ממשלה וארגונים עסקיים.',
        bullets: [
          "תכנון תחנות השנאה ומתקני הוצאת אנרגיה",
          "התמחות במסדרים מבודדי גז (GIS)",
          "שילוב מתקנים ברשת החשמל הארצית",
          'ניסיון כ"מורשה בכיר" בחברת החשמל',
        ],
        readMore: "קראו עוד על חטיבת החשמל",
      },
      is: {
        title: "מומחיות בניהול ויישום פרויקטי מערכות מידע",
        subtitle:
          "את תחום זה מובילה הילה כהן, בעלת ניסיון רב בליווי, ניהול ויישום פרויקטי מערכות מידע מורכבים בארגונים פיננסיים. אנו משלבים הבנה עסקית עמוקה עם יכולות טכנולוגיות מתקדמות.",
        bullets: [
          "ניהול פרויקטי IS מקצה לקצה",
          "התמחות מלאה בתהליכי אשראי",
          "התמחות בפרויקטי Salesforce",
          "בניית Roadmap אסטרטגי ו-KPI",
        ],
        readMore: "קראו עוד על מערכות מידע",
      },
      philosophy: {
        title: "הפילוסופיה שלנו",
        text:
          "היועצים ב- Solchi בעלי ניסיון רב המאפשר גיבוש אסטרטגיה עסקית וליווי מקצה לקצה בפרויקטים מורכבים. אנחנו חושבים פשוט, נותנים שירות בגובה העיניים ומחויבים לספק פתרונות אשר יאפשרו לכם לצמוח בסביבה הטכנולוגית המשתנה במהירות.",
        quote: '"אנחנו לא רק מייעצים, אנחנו פותרים"',
      },
    },

    about: {
      hero: {
        title: "קצת עלינו",
        subtitle:
          "בוטיק הייעוץ Solchi מתמחה בייעוץ וליווי אסטרטגי ועוסק בשני תחומים מרכזיים המניעים את המשק המודרני.",
      },
      content: {
        p1:
          "Solchi מתמחה בייעול תהליכים ושיפור ביצועים, התייעלות תפעולית וליווי ההנהלה. אנו מספקים מענה כולל לחברות וארגונים בתחומי הקמת מתקני יצור, הולכה ואספקת חשמל פרטיים, מחשוב וטרנספורמציה דיגיטלית.",
        p2:
          "היועצים ב-Solchi בעלי ניסיון רב בתעשייה בארץ, המאפשר גיבוש אסטרטגיה עסקית, ליווי מקצה לקצה בפרויקטים מורכבים המשלבים התמודדות עם אתגרים, ניהול פיננסי, הגדרה ובקרת תוכניות עבודה, ניהול עובדים וספקים ועוד.",
        p3:
          "אנחנו חושבים פשוט, נותנים שירות בגובה העיניים ומחויבים לספק פתרונות ושירותים אשר יאפשרו לכם לצמוח בסביבה הטכנולוגית המשתנה במהירות.",
      },
      vision: {
        title: "חזון ומשימה",
        items: [
          "הובלת ארגונים לעבר מצוינות תפעולית באמצעות טכנולוגיה וחדשנות.",
          "מתן פתרונות הנדסיים ומערכתיים המבטיחים צמיחה יציבה ובת קיימא.",
          "להיות השותף האסטרטגי המועדף לניהול פרויקטים מורכבים ותשתיתיים.",
        ],
      },
    },
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

    home: {
      hero: {
        titlePrefix: "We make",
        titleHighlight: "IT",
        titleSuffix: "work",
        subtitle:
          "At Solchi, we understand that no two businesses are the same. We provide a personal, hands-on approach to implementing technology strategies aligned with your unique business goals—building the right plan for your specific needs.",
        ctaPrimary: "Let’s Talk",
        ctaSecondary: "Who We Are",
      },
      intro: {
        title: "We don’t just advise — we solve.",
        subtitle:
          "Our deep industry expertise ensures tailored guidance and measurable outcomes. We’d be happy to serve as your trusted advisors.",
      },
      aboutBlock: {
        title: "About Us",
        p1:
          "We combine two high-impact worlds—high-energy electrical engineering and complex information systems project delivery—providing organizations with end-to-end solutions built on years of experience, systems-level thinking, and proven execution of complex processes.",
        p2:
          "Solchi specializes in process optimization, performance improvement, operational efficiency, and executive support. We deliver comprehensive solutions for private power generation, transmission and supply projects, as well as IT and digital transformation initiatives.",
      },
      services: {
        title: "Our Consulting Services",
        subtitle:
          "Solchi is a boutique consultancy focused on strategic guidance across two core domains:",
        energy: {
          title: "High-Energy Systems",
          desc:
            "Consulting, planning, and technical coordination for establishing private power generation, transmission, and supply solutions for producers and private consumers.",
        },
        is: {
          title: "Information Systems",
          desc:
            "We specialize in information systems and their connection to organizational workflows—designing the right solution and supporting you end-to-end.",
        },
      },
      electricity: {
        title: "Expertise in Electrical Engineering & High-Energy Infrastructure",
        subtitle:
          "This domain is led by a senior electrical engineer with over 30 years of experience in planning, managing, and supporting complex projects for power producers, government offices, and business organizations.",
        bullets: [
          "Design of substations and power evacuation facilities",
          "Expertise in Gas-Insulated Switchgear (GIS)",
          "Grid integration of facilities into the national power network",
          "Experience as a senior authorized professional at the national electric company",
        ],
        readMore: "Read more about the Electricity Division",
      },
      is: {
        title: "Expertise in Managing & Implementing Information Systems Projects",
        subtitle:
          "This domain is led by Hila Cohen, with extensive experience managing and implementing complex IS projects in financial organizations. We combine strong business understanding with advanced technical capabilities.",
        bullets: [
          "End-to-end IS project management",
          "Deep expertise in credit processes",
          "Salesforce project specialization",
          "Strategic roadmap & KPI development",
        ],
        readMore: "Read more about Information Systems",
      },
      philosophy: {
        title: "Our Philosophy",
        text:
          "Solchi consultants bring extensive experience in shaping business strategy and delivering end-to-end support for complex projects. We keep things simple, provide clear and direct service, and are committed to solutions that help you grow in a fast-changing technological environment.",
        quote: '"We don’t just advise — we solve."',
      },
    },

    about: {
      hero: {
        title: "About Us",
        subtitle:
          "Solchi is a boutique consultancy specializing in strategic guidance and hands-on support across two core domains that drive the modern economy.",
      },
      content: {
        p1:
          "Solchi specializes in process optimization, performance improvement, operational efficiency, and executive support. We provide comprehensive solutions for organizations in private power generation, transmission and supply projects, as well as IT and digital transformation.",
        p2:
          "Our consultants bring extensive industry experience, enabling the development of business strategy and end-to-end delivery of complex projects—combining challenge management, financial oversight, work-plan definition and control, and management of teams and vendors.",
        p3:
          "We keep things simple, speak clearly and directly, and are committed to delivering solutions and services that help you grow in a rapidly changing technological environment.",
      },
      vision: {
        title: "Vision & Mission",
        items: [
          "Leading organizations toward operational excellence through technology and innovation.",
          "Delivering engineering and system solutions that enable stable, sustainable growth.",
          "Being the preferred strategic partner for managing complex and infrastructure-driven projects.",
        ],
      },
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
  const saved = (typeof window !== "undefined" &&
    localStorage.getItem(STORAGE_KEY)) as Lang | null;
  if (saved === "he" || saved === "en") return saved;

  // ברירת מחדל: עברית
  return "he";
}

function getValueByPath(obj: any, path: string): any {
  return path
    .split(".")
    .reduce((acc, part) => (acc && acc[part] != null ? acc[part] : undefined), obj);
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

  return React.createElement(I18nContext.Provider, { value }, children);
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
