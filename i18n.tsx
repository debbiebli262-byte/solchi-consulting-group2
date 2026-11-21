import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/* =========================================================
   הגדרות בסיס
========================================================= */

export type Lang = "he" | "en" | "ja";

const STORAGE_KEY = "site_lang";

/* =========================================================
   מאגר הטקסטים של האתר
   - עברית
   - אנגלית
========================================================= */

export const copy = {
  he: {
    /* ===================== ניווט עליון ===================== */
    nav: {
      home: "דף הבית",
      about: "אודות",
      electricity: "חטיבת חשמל",
      is: "מערכות מידע",
      contact: "צור קשר",
      language: "שפה",
    },

    /* ===================== כפתור החלפת שפה ===================== */
    switchTo: "English",

    /* ===================== דף הבית ===================== */
    home: {
      /* ---------- הירו / פתיחה ---------- */
      hero: {
        titlePrefix: "Electrical",
        titleHighlight: "& IT",
        titleSuffix: "Solutions",
        focusLine: "הנדסת חשמל | תשתיות אנרגיה | מערכות מידע",
        subtitle:
         "ב-Solchi אנו משלבים מומחיות הנדסית עם חשיבה טכנולוגית מתקדמת, כדי לספק פתרונות חכמים, בטוחים ויעילים — משלב התכנון ועד ליישום מלא. המטרה שלנו: ליצור ערך אמיתי לעסק שלך, היום ובעתיד.",
        ctaPrimary: "בואו נדבר",
        ctaSecondary: "מי אנחנו?",
      },

      /* ---------- בלוק פתיחה ---------- */
      intro: {
        title: "אנחנו לא רק מייעצים, אנחנו פותרים.",
        subtitle:
          "הידע והמומחיות העמוקים שלנו בתעשייה מבטיחים שתקבל ייעוץ מותאם ותוצאות מוחשיות. נשמח להיות ה-Trusted Advisors שלך",
      },

      /* ---------- בלוק עלינו ---------- */
      aboutBlock: {
        title: "עלינו",
        p1:
          "חברתנו מובילה שילוב ייחודי בין שני עולמות מקצועיים – הנדסת חשמל עתירת אנרגיה וניהול פרויקטי מערכות מידע מורכבים – ומספקת לארגונים פתרונות מקצה לקצה המבוססים על ניסיון רב־שנים, הבנה מערכתית עמוקה ויכולת מוכחת להוביל תהליכים מורכבים בהצלחה.",
        p2:
          "Solchi מתמחה בייעול תהליכים ושיפור ביצועים, התייעלות תפעולית וליווי ההנהלה. אנו מספקים מענה כולל לחברות וארגונים בתחומי הקמת מתקני ייצור, הולכה ואספקת חשמל פרטיים, מחשוב וטרנספורמציה דיגיטלית.",
      },

      /* ---------- שירותים ---------- */
      services: {
        title: "שירותי הייעוץ שלנו",
        subtitle:
          "בוטיק הייעוץ Solchi מתמחה בייעוץ וליווי אסטרטגי ועוסק בשני תחומים מרכזיים:",
        energy: {
          title: "מערכות עתירות אנרגיה",
          desc:
            "ייעוץ, תכנון ותיאום טכני להקמת מתקני ייצור, הולכה ואספקת חשמל ליצרנים וצרכנים פרטיים",
        },
        is: {
          title: "מערכות מידע",
          desc:
            "מתמחים במערכות מידע ובחיבור שלהם לתהליכי העבודה בארגון. אנחנו מייצרים את הפתרון הנכון ומלווים אתכם מקצה לקצה",
        },
      },

      /* ---------- תקציר חטיבת חשמל ---------- */
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

      /* ---------- תקציר מערכות מידע ---------- */
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

      /* ---------- פילוסופיה ---------- */
      philosophy: {
        title: "הפילוסופיה שלנו",
        text:
          "היועצים והמתכננים ב-Solchi בעלי ניסיון רב המאפשר גיבוש אסטרטגיה עסקית וליווי מקצה לקצה בפרויקטים מורכבים. אנחנו חושבים פשוט, נותנים שירות בגובה העיניים ומחויבים לספק פתרונות אשר יאפשרו לכם לצמוח בסביבה הטכנולוגית המשתנה במהירות.",
        quote: '"אנחנו לא רק מייעצים, אנחנו פותרים"',
      },
    },

    /* ===================== עמוד אודות ===================== */
    about: {
      /* ---------- הירו ---------- */
      hero: {
        title: "קצת עלינו",
        subtitle:
          "בוטיק הייעוץ והתכנון Solchi מתמחה בייעוץ וליווי אסטרטגי ועוסק בשני תחומים מרכזיים המניעים את המשק המודרני",
      },

      /* ---------- תוכן ---------- */
      content: {
        p1:
          "Solchi מתמחה בייעול תהליכים ושיפור ביצועים, התייעלות תפעולית וליווי ההנהלה. אנו מספקים מענה כולל לחברות וארגונים בתחומי הקמת מתקני יצור, הולכה ואספקת חשמל פרטיים, מחשוב וטרנספורמציה דיגיטלית.",
        p2:
          "היועצים ב-Solchi בעלי ניסיון רב בתעשייה בארץ, המאפשר גיבוש אסטרטגיה עסקית, ליווי מקצה לקצה בפרויקטים מורכבים המשלבים התמודדות עם אתגרים, ניהול פיננסי, הגדרה ובקרת תוכניות עבודה, ניהול עובדים וספקים ועוד.",
        p3:
          "אנחנו חושבים פשוט, נותנים שירות בגובה העיניים ומחויבים לספק פתרונות ושירותים אשר יאפשרו לכם לצמוח בסביבה הטכנולוגית המשתנה במהירות.",
      },

      /* ---------- חטיבות---------- */
      divisions: {
        electricity: {
          title: "חטיבת החשמל והאנרגיה",
          desc: "תכנון מערכות חשמל, תשתיות אנרגיה, ליווי פרויקטים הנדסיים וניהול מערכות עתירות אנרגיה.",
        },
        informationSystems: {
          title: "חטיבת מערכות המידע",
          desc: "Salesforce, אוטומציה תפעולית, פתרונות Fintech ותכנון מערכות מידע לארגונים.",
        },
      },

      /* ---------- חזון ומשימה ---------- */
      vision: {
        title: "חזון ומשימה",
        items: [
          "הובלת ארגונים לעבר מצוינות תפעולית באמצעות טכנולוגיה וחדשנות",
          "מתן פתרונות הנדסיים ומערכתיים המבטיחים צמיחה יציבה ובת קיימא",
          "להיות השותף האסטרטגי המועדף לניהול פרויקטים מורכבים ותשתיתיים",
        ],
      },
    },

    /* ===================== עמוד חטיבת חשמל ===================== */
    electricity: {
      /* ---------- כותרת עליונה ---------- */
      pageTag: "חטיבת החשמל",
      name: "יחיאל אמיר כהן",
      role:
  "מהנדס חשמל בכיר, יועץ ומנהל פרויקטים בתחום מערכות עתירות אנרגיה בכלל ותחנות השנאה/הוצאת אנרגיה בפרט. מוביל הפעילות בחטיבת החשמל והאנרגיה.",
      badges: {
        energy: "מערכות עתירות אנרגיה",
        substations: "תחנות השנאה",
        gis: "GIS",
      },

      /* ---------- ניסיון ומומחיות ---------- */
      experienceTitle: "ניסיון ומומחיות",
      experienceP1:
        "בעל מעל 30 שנות ניסיון בכל הקשור לניהול פרויקטים עתירי אנרגיה לפיתוח מערכות מורכבות במתודולוגיות שונות וטכנולוגיות מגוונות מול יצרני חשמל, משרדי ממשלה וארגונים עסקיים.",
      experienceP2:
        "ניסיון רב בתכנון מערכי בדיקה ותהליכי הכנסה לניצול של פרויקטים עתירי אנרגיה.",
      experienceP3:
        'התמחות במסדרים מבודדי גז (GIS) מיצרנים שונים, ובעל היכרות מעמיקה של מערכת החשמל בישראל. בעל ניסיון של "מורשה בכיר" בחברת החשמל, כולל ליווי בתקלות ושחרור מתקנים ממתח.',
      experienceP4:
        "התמחות בתכנון מפורט לתחנות השנאה ותחנות כח.",

      /* ---------- תחומי התמחות ---------- */
      expertiseTitle: "תחומי התמחות מרכזיים:",
      expertise: [
        "התנעה והובלת פרויקטים אינטגרטיביים",
        "שילוב מערכות עתירות אנרגיה ברשת החשמל",
        "ביצוע תכנון מפורט של המתקן החשמלי, משלב היזום עד חיבור הגיד האחרון",
        "פיתוח ויישום מתודולוגיות תפעול ותחזוקה",
        "שמירה בלתי פוסקת על בטיחות והגנה על מתקנים",
        "מתן מענה לתקלות קריטיות בזמן אמת",
      ],

      /* ---------- שירותי ייעוץ ---------- */
      servicesTitle: "שירותי הייעוץ שלנו",
      services: [
        "ליווי מקצה לקצה: משלב הייזום והתכנון ועד ליישום מלא בראיה תפעולית ותחזוקתית",
        "אופטימיזציה: איתור פתרונות, בחינת חלופות וכדאיות פיננסית אל מול השקעה",
        'רגולציה: ליווי מול חברת החשמל ו-"נגה" באפיון המערכת ושילובה במשק',
        "בטיחות ותחזוקה: ליווי שוטף בהיבטי בטיחות לשחרור מתקן ממתח",
      ],

      /* ---------- שירותי תכנון ---------- */
      planningTitle: "שירותי התכנון שלנו",
      planningIntro:
        "ב-SOLCHI אנחנו לא רק מתכננים — אנחנו יוצרים פתרונות הנדסיים חכמים שמניעים פרויקטים קדימה. כל תהליך תכנון מבוסס על חשיבה מערכתית, חדשנות מקצועית וניסיון עשיר בליווי פרויקטים עתירי אנרגיה מהשלב הראשון ועד למסירה.",
      planningSummary: [
        "תכנון הנדסי חכם משלב הקונספט ועד לתכנון מפורט ומוכן לביצוע",
        "יצירת בסיס מקצועי למכרזים, החלטות ותיאום בין כל תחומי הפרויקט",
        "התאמת פתרונות חשמל ובקרה לפרויקטים מורכבים, עתירי אנרגיה ותשתית",
        "ליווי, בקרה ואופטימיזציה להבטחת איכות, בטיחות, עמידה בתקנים ויעילות ביצוע",
      ],
      planningItems: [
        "תכנון עקרוני (Concept Design) המייצר תשתית מדויקת לפרויקט, כולל בחינת חלופות טכנו־כלכליות המובילות לקבלת החלטות מושכלת",
        "תכנון מפורט (Detail Design) לכל מערכות החשמל והעזר — חישובים, שרטוטים, מפרטים ותוצרים הנדסיים ברמת ביצוע",
        "הכנת מסמכי מכרז מלאים, המייצרים בהירות הנדסית ומבטיחים קבלת הצעות איכותיות ומדויקות מקבלנים",
        "ליווי הנדסי מלא משלב הייזום ועד המסירה, כולל תמיכה מקצועית בבדיקות FAT/SAT ו-Commissioning בשטח",
        "תיאום תכנון רב־תחומי, המבטיח אינטגרציה מלאה בין חשמל, מבנה, מכונות, בקרה, בטיחות וסביבה",
        "ביצוע חישובים הנדסיים מתקדמים, לרבות זרמים, קצר, הארקה, עומסים, סלקטיביות ואמינות — לשקט נפשי ולתכנון בטוח",
        "תכנון מערכות מתח על/עליון/גבוה/בינוני/נמוך, כולל לוחות, כבלים, ציוד הגנה ופתרונות בקרה מותאמים",
        "בקרת תכנון ותאימות לתקנים בינלאומיים ומקומיים (IEC, IEEE), המבטיחה עמידה מלאה בכל דרישות הפרויקט",
        "פתרונות מותאמים לפרויקטים מורכבים, בעלי מגבלות תשתית, צפיפות או דרישות אנרגיה גבוהות במיוחד",
        "אופטימיזציה של תכנון, לשיפור ביצועים, קיצור לוחות זמנים וצמצום עלויות — בלי להתפשר על איכות",
      ],

      /* ---------- לקוחות ---------- */
      clientsTitle: "הלקוחות שלנו בתחום האנרגיה",
      clients: [
        "יצרני חשמל פרטיים",
        "משרדי ממשלה",
        "חברות תשתיות",
        "ארגונים תעשייתיים",
      ],
    },

    /* ===================== עמוד מערכות מידע ===================== */
    isPage: {
      /* ---------- הירו ---------- */
      hero: {
        tag: "חטיבת מערכות מידע",
        name: "הילה כהן",
        subtitle:
          "מנכלית החברה ומובילת פעילות מערכות המידע. מומחית בליווי, ניהול ויישום פרויקטי מערכות מידע מורכבים עבור ארגונים.",
        badges: {
          salesforce: "Salesforce",
          fintech: "פינטק",
          processAutomation: "מיכון תהליכים",
        },
      },
      popups: {
        salesforce: {
          eyebrow: "Salesforce",
          title: "Salesforce כפלטפורמה לניהול וצמיחה",
          subtitle: "Salesforce היא הרבה מעבר למערכת CRM. אני מתמחה בתכנון ובהקמה של פתרונות מותאמים אישית על גבי הפלטפורמה, במטרה לייעל תהליכים עסקיים, לשפר בקרה ולתמוך בצמיחה ארגונית.",
          cards: [
            { title: "אוטומציה של תהליכי עבודה וזרימות נתונים.", desc: "" },
            { title: "הקמת פורטלים ותהליכי הרשמה.", desc: "" },
            { title: "ניהול הקצאות ומעקב בזמן אמת.", desc: "" },
            { title: "התאמה של מבני מידע, אובייקטים ותהליכים לצרכים הייחודיים של כל ארגון.", desc: "" },
          ],
          result: {
            title: "הערך לארגון",
            desc: "מערכת מדויקת, יציבה וגמישה יותר, שמפחיתה עבודה ידנית, חוסכת זמן ומספקת תמונת מצב רחבה ואחידה של הפעילות העסקית.",
          },
        },
        fintech: {
          eyebrow: "FINTECH",
          title: "פתרונות טכנולוגיים לעולמות פיננסיים מורכבים",
          subtitle: "עם ניסיון בעבודה מול מערכות פיננסיות ובנקאיות, אני מלווה ארגונים בתכנון ובהקמה של תשתיות ותהליכים המשלבים בין דרישות רגולטוריות, לוגיקה עסקית מורכבת וחוויית משתמש מתקדמת.",
          cards: [
            { title: "אפיון והקמה של מערכות לניהול אשראי והלוואות מקצה לקצה.", desc: "" },
            { title: "בניית פתרונות לניהול פיקדונות וחסכונות.", desc: "" },
            { title: "דיגיטציה של תהליכים פיננסיים.", desc: "" },
            { title: "התאמה למערכות קיימות ולסביבה טכנולוגית מתקדמת.", desc: "" },
          ],
          result: {
            title: "הערך לארגון",
            desc: "שילוב בין הבנה עסקית-פיננסית עמוקה לבין יישום טכנולוגי מדויק, תוך גישור אפקטיבי בין צורכי הרגולציה, הסיכונים והפיתוח.",
          },
        },
        processAutomation: {
          eyebrow: "PROCESS AUTOMATION",
          title: "מיכון תהליכים והתייעלות תפעולית",
          subtitle: "אני מתמחה בזיהוי צווארי בקבוק תפעוליים ובהפיכת תהליכים ידניים, מורכבים או לא עקביים לתהליכים מסודרים, אוטומטיים ומדידים.",
          cards: [
            { title: "מיפוי ואבחון של תהליכי עבודה קיימים.", desc: "" },
            { title: "זיהוי נקודות חולשה וחוסר יעילות.", desc: "" },
            { title: "תכנון ארכיטקטורת מידע מתאימה.", desc: "" },
            { title: "הטמעת פתרונות שמאפשרים עבודה רציפה, מדויקת ושקופה יותר.", desc: "" },
          ],
          result: {
            title: "הערך לארגון",
            desc: "צמצום טעויות אנוש, שיפור היעילות התפעולית, הגדלת יכולת הסקייל וקבלת תמונת מצב עדכנית באמצעות דוחות ודשבורדים בזמן אמת.",
          },
        },
      },

      /* ---------- מומחיות וערך ---------- */
      expertise: {
        title: "מומחיות וערך מוסף",
        p1:
          "אנו מביאים ערך מוסף משמעותי לארגונים ממגוון תחומים, בזכות ניסיון מעשי בניהול והטמעה של מערכות מורכבות ובתהליכים ארגוניים מקצה לקצה. היכולת שלנו לחבר בין צרכים עסקיים מורכבים לפתרונות טכנולוגיים יציבים, מדויקים וישימים – היא הליבה של הפעילות שלנו.",
        p2:
          "ב-Solchi אנו מחויבים לצמצם מורכבות, לפשט תהליכים ולשפר את החוויה הארגונית והעסקית מקצה לקצה – משלב האפיון והייזום, דרך תכנון ויישום מלא של מערכות, ועד לניהול ספקים ובקרת ביצועים. אנו מתמקדים ביצירת תהליכים יעילים יותר, חיסכון במשאבים, שיפור מתמיד והתייעלות ארגונית שמייצרת ערך מדיד לאורך זמן.",
      },

      /* ---------- מערכות אשראי ופיננסים ---------- */
      credit: {
        title: "מערכות אשראי ופיננסים",
        items: [
          "הגשת בקשה וחיתום",
          "בחינת בקשה ותפעול הלוואה",
          "ניהול בקרות ודוחות",
          "תמיכה בציות ורגולציה",
          "אפיון תהליכים עסקיים",
          "אינטגרציה (ERP, CRM)",
        ],
      },

      /* ---------- תחומי התמחות נוספים ---------- */
      more: {
        title: "תחומי התמחות נוספים",
        items: [
          {
            title: "Roadmap אסטרטגי",
            desc:
              "בניית תוכנית עבודה למחשוב הארגון, קביעת KPI ובחינתם לאורך חיי הפרויקט",
          },
          {
            title: "מומחיות Salesforce",
            desc:
              "פיתוח מערכות ליבה על גבי הפלטפורמה וניהול פרויקטי Salesforce מורכבים",
          },
          {
            title: "ניהול Delivery",
            desc:
              "הובלת פרויקטי פיתוח פנימיים או במיקור חוץ משלב הייזום עד ליישום מלא",
          },
          {
            title: "ניתוח כדאיות",
            desc:
              "בחינת חלופות ליישום - עלות, אפקטיביות וכדאיות פיננסית ותפעולית",
          },
          {
            title: "כתיבת מכרזים",
            desc:
              "איתור ובחירת פתרונות ותשתיות, כולל כתיבת מכרזים וניהולם המקצועי",
          },
        ],
      },

      /* ---------- למה לבחור ב-Solchi ---------- */
      why: {
        title: "למה Solchi למערכות מידע?",
        items: [
          "הבנה פיננסית עמוקה לצד מומחיות טכנולוגית ללא פשרות",
          "ניסיון מוכח במערכות אשראי ובנקאות מהמובילות בישראל",
          "יכולת הובלה חוצת-ארגון מול מנהלים, ספקים ולקוחות קצה",
          "ראייה מערכתית וארוכת טווח המותאמת לצרכי הרגולציה",
        ],
      },
    },

    /* ===================== עמוד צור קשר ===================== */
    contact: {
      /* ---------- כותרות כלליות ---------- */
      pageTitle: "צור קשר",
      pageSubtitle:
        "אנחנו כאן כדי לענות על כל שאלה ולתאם פגישת היכרות מקצועית.",
      detailsTitle: "פרטי התקשרות",
      addressTitle: "כתובתנו",
      addressText: "הורד 544, מושב קידרון, ישראל",
      addressHint: "לחצו לניווט במפות",
      availabilityTitle: "זמינות שירות",
      availabilityHours: "ימי א' - ה' | בין השעות 08:30 - 18:00",
      formTitle: "שלחו לנו הודעה",
      submit: "שלח פניה",
      sending: "שולח...",

      /* ---------- אנשי קשר ---------- */
      peopleTitle: "אנשי קשר",
      people: {
        hila: {
          name: "הילה כהן",
          role: "מנהלת מערכות מידע",
          email: "hila@solchi.co.il",
        },
        yehiel: {
          name: "יחיאל אמיר כהן",
          role: "מנהל חטיבת החשמל",
          email: "yehiel@solchi.co.il",
        },
      },

      /* ---------- שדות טופס ---------- */
      fields: {
        fullName: "שם מלא",
        division: "חטיבה רלוונטית",
        subject: "נושא הפנייה",
        email: 'דוא"ל',
        phone: "טלפון",
        message: "הודעה",
      },

      /* ---------- placeholders ---------- */
      placeholders: {
        fullName: "ישראל ישראלי",
        division: "בחרו חטיבה",
        subject: "בחרו נושא",
        email: "name@company.com",
        phone: "05X-XXXXXXX",
        message: "תארו בקצרה את הצורך שלכם...",
      },

      /* ---------- אפשרויות נושא ---------- */
      subjectOptions: {
        electricalDivision: "חטיבת החשמל",
        informationSystems: "מערכות מידע",
      },

      /* ---------- הודעות ולידציה ---------- */
      validation: {
        nameRequired: "יש להזין שם מלא",
        nameLettersOnly: "השם יכול להכיל אותיות בלבד",
        emailRequired: 'יש להזין כתובת דוא"ל',
        emailInvalid: "יש להזין כתובת דוא״ל תקינה",
        emailNoSpaces: "כתובת דוא״ל לא יכולה להכיל רווחים",
        phoneRequired: "יש להזין מספר טלפון",
        phoneInvalid: "יש להזין מספר טלפון תקין",
        phoneInvalidIsrael: "בישראל מספר טלפון חייב להכיל 10 ספרות ולהתחיל ב-0",
      },

      /* ---------- הודעה במקרה שהטופס לא זמין ---------- */
      formUnavailable: "לא ניתן כרגע לשלוח פניות",
    },

    /* ===================== עמוד תודה ===================== */
    thankYou: {
      title: "הודעתכם התקבלה!",
      subtitle: "תודה שפניתם ל-Solchi. נציג מטעמנו יחזור אליכם בהקדם.",
      backHome: "חזרה לדף הבית",
    },

    /* ===================== פוטר ===================== */
    footer: {
      description:
        "בוטיק הייעוץ Solchi מתמחה בייעוץ וליווי אסטרטגי, שילוב מערכות עתירות אנרגיה וטרנספורמציה דיגיטלית במגזר הפיננסי והתשתיתי.",
      quickNav: "ניווט מהיר",
      nav: {
        home: "דף הבית",
        about: "אודות הקבוצה",
        electricity: "חטיבת חשמל",
        is: "מערכות מידע",
        contact: "צור קשר",
      },
      contactTitle: "צרו קשר",
      address: "הורד 544, מושב קידרון, ישראל",
      rights: "כל הזכויות שמורות.",
      accessibility: "הצהרת נגישות",
    },

    /* ===================== הצהרת נגישות ===================== */
    accessibility: {
      title: "הצהרת נגישות",
      updatedLine: "עדכון נגישות בעותק הניסיון: 20.11.2026",
      intro: "חשוב לנו לאפשר שימוש באתר לאנשים עם מוגבלויות. אנו משפרים את הנגישות ומזמינים דיווח על קשיים.",
      levelTitle: "סטטוס בדיקות הנגישות",
      levelText: "בוצעו שיפורים טכניים המכוונים לדרישות תקן ישראלי 5568 ורמת AA. טרם הושלמו בדיקות נגישות מלאות, ולכן אין לראות בהצהרה זו אישור שהאתר עומד בכל דרישות התקן.",
      adjustmentsTitle: "התאמות שנוספו לאתר הניסיון",
      adjustments: [
        "קישור דילוג לתוכן הראשי באמצעות מקלדת.",
        "תמיכה במעבר בין שדות וכפתורים באמצעות מקלדת.",
        "חלונות מידע עם ניהול מיקוד, סגירה במקש Escape והחזרת מיקוד.",
        "תוויות לשדות טופס יצירת הקשר והכרזה על הודעות שגיאה.",
        "תיאורי טקסט לתמונות תוכן.",
        "אפשרות לשינוי גודל טקסט ולהפעלת ניגודיות גבוהה.",
        "התאמה לכיוון כתיבה בעברית, באנגלית וביפנית.",
        "התחשבות בהעדפת המשתמש להפחתת תנועה ואנימציות.",
        "התאמות לצפייה במחשבים ובטלפונים.",
      ],
      issueTitle: "דיווח על בעיית נגישות",
      issueText: "אם נתקלתם בקושי בגלישה או זקוקים לתוכן בפורמט נגיש, כתבו ל־hila@solchi.co.il או ל־yehiel@solchi.co.il ותארו את העמוד והבעיה.",
      businessArrangementsTitle: "הסדרי נגישות במקום העסק",
      businessArrangements: [
        "כדי לברר את הסדרי הנגישות הפיזית לפני הגעה למשרד, פנו אלינו בדוא״ל: hila@solchi.co.il. הפרטים על ההסדרים במקום מחייבים אימות מול הנהלת החברה.",
      ],
    },
  },

  en: {
    /* ===================== ניווט עליון ===================== */
    nav: {
      home: "Home",
      about: "About",
      electricity: "Electricity Division",
      is: "Information Systems",
      contact: "Contact",
      language: "Language",
    },

    /* ===================== כפתור החלפת שפה ===================== */
    switchTo: "עברית",

    /* ===================== דף הבית ===================== */
    home: {
      /* ---------- הירו / פתיחה ---------- */
      hero: {
        titlePrefix: "Electrical",
        titleHighlight: "& IT",
        titleSuffix: "Solutions",

        focusLine:
          "Electrical Engineering | Energy Infrastructure | Information Systems",

        subtitle:
          "Solchi provides strategic consulting, planning and project delivery services in electrical engineering, energy infrastructure and information systems for organizations with complex operational and technological needs.",

        ctaPrimary: "Let’s Talk",
        ctaSecondary: "Who We Are",
      },

      /* ---------- בלוק פתיחה ---------- */
      intro: {
        title: "We don’t just advise — we solve.",
        subtitle:
          "Our deep industry expertise ensures tailored guidance and measurable outcomes. We’d be happy to serve as your trusted advisors.",
      },

      /* ---------- בלוק עלינו ---------- */
      aboutBlock: {
        title: "About Us",
        p1:
          "We combine two high-impact worlds—high-energy electrical engineering and complex information systems project delivery—providing organizations with end-to-end solutions built on years of experience, systems-level thinking, and proven execution of complex processes.",
        p2:
          "Solchi specializes in process optimization, performance improvement, operational efficiency, and executive support. We deliver comprehensive solutions for private power generation, transmission and supply projects, as well as IT and digital transformation initiatives.",
      },

      /* ---------- שירותים ---------- */
      services: {
        title: "Our Consulting Services",
        subtitle:
          "Solchi is a boutique consultancy focused on strategic guidance across two core domains:",
        energy: {
          title: "High-Energy Systems",
          desc:
            "Consulting, planning, and technical coordination for establishing private power generation, transmission, and supply solutions for producers and private consumers",
        },
        is: {
          title: "Information Systems",
          desc:
            "We specialize in information systems and their connection to organizational workflows—designing the right solution and supporting you end-to-end",
        },
      },

      /* ---------- תקציר חטיבת חשמל ---------- */
      electricity: {
        title: "Expertise in Electrical Engineering & High-Energy Infrastructure",
        subtitle:
          "Head of the Electricity & Energy Division. This domain is led by a senior electrical engineer with over 30 years of experience in planning, managing, and supporting complex projects for power producers, government offices, and business organizations.",
        bullets: [
          "Design of substations and power evacuation facilities",
          "Expertise in Gas-Insulated Switchgear (GIS)",
          "Grid integration of facilities into the national power network",
          "Experience as a senior authorized professional at the national electric company",
        ],
        readMore: "Read more about the Electricity Division",
      },

      /* ---------- תקציר מערכות מידע ---------- */
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

      /* ---------- פילוסופיה ---------- */
      philosophy: {
        title: "Our Philosophy",
        text:
          "Solchi consultants bring extensive experience in shaping business strategy and delivering end-to-end support for complex projects. We keep things simple, provide clear and direct service, and are committed to solutions that help you grow in a fast-changing technological environment.",
        quote: '"We don’t just advise — we solve."',
      },
    },

    /* ===================== עמוד אודות ===================== */
    about: {
      /* ---------- הירו ---------- */
      hero: {
        title: "About Us",
        subtitle:
          "Solchi is a boutique consultancy specializing in strategic guidance and hands-on support across two core domains that drive the modern economy",
      },

      /* ---------- תוכן ---------- */
      content: {
        p1:
          "Solchi specializes in process optimization, performance improvement, operational efficiency, and executive support. We provide comprehensive solutions for organizations in private power generation, transmission and supply projects, as well as IT and digital transformation.",
        p2:
          "Our consultants bring extensive industry experience, enabling the development of business strategy and end-to-end delivery of complex projects—combining challenge management, financial oversight, work-plan definition and control, and management of teams and vendors.",
        p3:
          "We keep things simple, speak clearly and directly, and are committed to delivering solutions and services that help you grow in a rapidly changing technological environment.",
      },

      /* ---------- חטיבות ---------- */
      divisions: {
        electricity: {
          title: "Electricity & Energy Division",
          desc: "Electrical systems design, energy infrastructure, engineering project support and management of high-energy systems.",
        },
        informationSystems: {
          title: "Information Systems Division",
          desc: "Salesforce, operational automation, Fintech solutions and information systems planning for organizations.",
        },
      },

      /* ---------- חזון ומשימה ---------- */
      vision: {
        title: "Vision & Mission",
        items: [
          "Leading organizations toward operational excellence through technology and innovation.",
          "Delivering engineering and system solutions that enable stable, sustainable growth.",
          "Being the preferred strategic partner for managing complex and infrastructure-driven projects.",
        ],
      },
    },

    /* ===================== עמוד חטיבת חשמל ===================== */
    electricity: {
      /* ---------- כותרת עליונה ---------- */
      pageTag: "Electricity Division",
      name: "Yehiel Amir Cohen",
      role:
        "Senior electrical engineer, consultant and project manager specializing in high-energy systems, with a focus on substations and power evacuation facilities.",
      badges: {
        energy: "High-Energy Systems",
        substations: "Substations",
        gis: "GIS",
      },

      /* ---------- ניסיון ומומחיות ---------- */
      experienceTitle: "Experience & Expertise",
      experienceP1:
        "Over 30 years of experience managing high-energy projects and developing complex systems across diverse methodologies and technologies, working with power producers, government offices, and business organizations.",
      experienceP2:
        "Extensive experience in designing testing frameworks and commissioning-to-operation processes for high-energy projects.",
      experienceP3:
        "Expertise in Gas-Insulated Switchgear (GIS) from multiple manufacturers, with deep familiarity with Israel’s power system. Former senior authorized professional at the national electric company, including fault support and energization and de-energization procedures.",
      experienceP4:
        "Specialization in detailed engineering design for substations and power stations.",

      /* ---------- תחומי התמחות ---------- */
      expertiseTitle: "Core Areas of Expertise:",
      expertise: [
        "Initiating and leading integrative projects",
        "Integrating high-energy systems into the power grid",
        "Detailed engineering design of electrical facilities, from project initiation through final conductor connection",
        "Developing and implementing operations & maintenance methodologies",
        "Continuous focus on safety and facility protection",
        "Real-time response to critical faults",
      ],

      /* ---------- שירותי ייעוץ ---------- */
      servicesTitle: "Our Consulting Services",
      services: [
        "End-to-end guidance: from initiation and planning through full implementation, with operational and maintenance perspective",
        "Optimization: identifying solutions, evaluating alternatives, and assessing financial feasibility versus investment",
        "Regulatory support: guidance with the national electric company and Noga in system definition and market integration",
        "Safety & maintenance: ongoing safety support, including procedures for de-energizing facilities",
      ],

      /* ---------- שירותי תכנון ---------- */
      planningTitle: "Our Engineering Design Services",
      planningIntro:
        "At SOLCHI, we don’t just design — we create intelligent engineering solutions that drive projects forward. Every planning process is built on systems thinking, professional innovation, and extensive experience supporting high-energy projects from initial concept through final delivery.",

      planningSummary: [
        "Smart engineering design from concept through execution-ready detailed planning",
        "A professional foundation for tenders, decisions, and multidisciplinary coordination",
        "Tailored electrical and control solutions for complex, high-energy infrastructure projects",
        "Engineering support, review, and optimization to ensure quality, safety, compliance, and efficiency",
      ],
      planningItems: [
        "Concept Design that establishes a precise project foundation, including techno-economic alternative analysis to enable informed decision-making",
        "Detailed Design for all electrical and auxiliary systems — calculations, drawings, specifications, and execution-level engineering deliverables",
        "Preparation of full tender documentation to ensure engineering clarity and high-quality, accurate contractor proposals",
        "Comprehensive engineering support from project initiation through delivery, including professional support during FAT, SAT, and on-site commissioning",
        "Multidisciplinary design coordination ensuring full integration between electrical, structural, mechanical, control, safety, and environmental systems",
        "Advanced engineering calculations including load flow, short-circuit, grounding, load analysis, selectivity, and reliability — ensuring safe and robust design",
        "Design of extra-high, high, medium, and low voltage systems, including panels, cables, protection equipment, and customized control solutions",
        "Design review and compliance with international and local standards (IEC, IEEE), ensuring full adherence to project requirements",
        "Tailored solutions for complex projects with infrastructure constraints, density limitations, or exceptionally high energy demands",
        "Design optimization to improve performance, shorten timelines, and reduce costs — without compromising quality",
      ],

      /* ---------- לקוחות ---------- */
      clientsTitle: "Our Energy Clients",
      clients: [
        "Private power producers",
        "Government offices",
        "Infrastructure companies",
        "Industrial organizations",
      ],
    },

    /* ===================== עמוד מערכות מידע ===================== */
    isPage: {
      /* ---------- הירו ---------- */
      hero: {
        tag: "Information Systems Division",
        name: "Hila Cohen",
        subtitle:
          "CEO and head of the Information Systems division. Expert in leading, managing, and delivering complex information systems projects for organizations.",
        badges: {
          salesforce: "Salesforce",
          fintech: "Fintech",
          processAutomation: "Process Automation",
        },
      },

      popups: {
        salesforce: {
          eyebrow: "SALESFORCE",
          title: "Salesforce as a Platform for Management and Growth",
          subtitle: "Salesforce is much more than a CRM system. I specialize in designing and implementing customized solutions on the platform to streamline business processes, improve oversight and support organizational growth.",
          cards: [
            { title: "Automation of workflows and data flows.", desc: "" },
            { title: "Building portals and registration processes.", desc: "" },
            { title: "Managing allocations and real-time tracking.", desc: "" },
            { title: "Adapting data structures, objects and processes to each organization's unique needs.", desc: "" },
          ],
          result: {
            title: "Value to the Organization",
            desc: "A more precise, stable and flexible system that reduces manual work, saves time and provides a comprehensive, unified view of business operations.",
          },
        },
        fintech: {
          eyebrow: "FINTECH",
          title: "Technology Solutions for Complex Financial Environments",
          subtitle: "With experience working with financial and banking systems, I support organizations in designing and implementing infrastructures and processes that combine regulatory requirements, complex business logic and advanced user experience.",
          cards: [
            { title: "Designing and implementing end-to-end credit and loan management systems.", desc: "" },
            { title: "Developing solutions for deposit and savings management.", desc: "" },
            { title: "Digitizing financial processes.", desc: "" },
            { title: "Integration with existing systems and advanced technology environments.", desc: "" },
          ],
          result: {
            title: "Value to the Organization",
            desc: "Combining deep business and financial understanding with precise technical implementation, effectively bridging regulatory, risk and development needs.",
          },
        },
        processAutomation: {
          eyebrow: "PROCESS AUTOMATION",
          title: "Process Automation and Operational Efficiency",
          subtitle: "I specialize in identifying operational bottlenecks and transforming manual, complex or inconsistent processes into structured, automated and measurable workflows.",
          cards: [
            { title: "Mapping and analyzing existing workflows.", desc: "" },
            { title: "Identifying weaknesses and inefficiencies.", desc: "" },
            { title: "Designing suitable information architecture.", desc: "" },
            { title: "Implementing solutions for more consistent, accurate and transparent operations.", desc: "" },
          ],
          result: {
            title: "Value to the Organization",
            desc: "Reducing human error, improving operational efficiency, increasing scalability, and gaining up-to-date insights through real-time reports and dashboards.",
          },
        },
      },

      /* ---------- מומחיות וערך ---------- */
      expertise: {
        title: "Expertise & Value",
        p1:
          "We deliver significant added value to organizations across diverse industries, driven by hands-on experience in managing and implementing complex systems and end-to-end organizational processes. Our ability to translate complex business needs into stable, precise, and practical technological solutions lies at the core of our work.",
        p2:
          "At Solchi, we are committed to reducing complexity, streamlining processes, and enhancing the organizational and business experience from end to end — from initial analysis and initiation, through full system design and implementation, to vendor management and performance control. We focus on creating more efficient processes, optimizing resources, driving continuous improvement, and delivering measurable long-term value.",
      },

      /* ---------- מערכות אשראי ופיננסים ---------- */
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

      /* ---------- תחומי התמחות נוספים ---------- */
      more: {
        title: "Additional Expertise",
        items: [
          {
            title: "Strategic Roadmap",
            desc:
              "Building a comprehensive IT roadmap for the organization, defining KPIs, and monitoring them throughout the lifecycle of the project.",
          },
          {
            title: "Salesforce",
            desc:
              "Designing and developing core systems on the Salesforce platform and leading complex Salesforce implementation projects.",
          },
          {
            title: "Delivery",
            desc:
              "Leading internal and outsourced development projects from initial concept and planning through full implementation.",
          },
          {
            title: "Feasibility",
            desc:
              "Evaluating implementation alternatives, including cost, effectiveness, and financial and operational feasibility.",
          },
          {
            title: "RFPs",
            desc:
              "Identifying and selecting suitable solutions and infrastructures, including the preparation and professional management of tenders.",
          },
        ],
      },

      /* ---------- למה לבחור ב-Solchi ---------- */
      why: {
        title: "Why Solchi?",
        items: [
          "Deep Financial Understanding Combined with Strong Technological Expertise",
          "Proven Experience in Credit and Banking Systems",
          "Cross-organizational leadership",
          "Long-Term Systems Thinking Aligned with Regulatory Requirements",
        ],
      },
    },

    /* ===================== עמוד צור קשר ===================== */
    contact: {
      /* ---------- כותרות כלליות ---------- */
      pageTitle: "Contact",
      pageSubtitle:
        "We’re here to answer any question and schedule a professional introductory meeting.",
      detailsTitle: "Contact Details",
      addressTitle: "Our Address",
      addressText: "Ha-Vered 544, Kidron, Israel",
      addressHint: "Click to open in Maps",
      availabilityTitle: "Service Availability",
      availabilityHours: "Sunday–Thursday | 08:30–18:00",
      formTitle: "Send Us a Message",
      submit: "Send Inquiry",
      sending: "Sending...",

      /* ---------- אנשי קשר ---------- */
      peopleTitle: "Contact People",
      people: {
        hila: {
          name: "Hila Cohen",
          role: "Information Systems Manager",
          email: "hila@solchi.co.il",
        },
        yehiel: {
          name: "Yehiel Amir Cohen",
          role: "Electricity Division Manager",
          email: "yehiel@solchi.co.il",
        },
      },

      /* ---------- שדות טופס ---------- */
      fields: {
        fullName: "Full Name",
        division: "Relevant Division",
        subject: "Inquiry Subject",
        email: "Email",
        phone: "Phone",
        message: "Message",
      },

      /* ---------- placeholders ---------- */
      placeholders: {
        fullName: "John Doe",
        division: "Select a division",
        subject: "Select a subject",
        email: "name@company.com",
        phone: "+972 5X XXX XXXX",
        message: "Briefly describe what you need...",
      },

      /* ---------- אפשרויות נושא ---------- */
      subjectOptions: {
        electricalDivision: "Electrical Division",
        informationSystems: "Information Systems",
      },

      /* ---------- הודעות ולידציה ---------- */
      validation: {
        nameRequired: "Full name is required",
        nameLettersOnly: "Name can contain letters only",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        emailNoSpaces: "Email cannot contain spaces",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Please enter a valid phone number",
        phoneInvalidIsrael:
          "Israeli phone numbers must contain exactly 10 digits and start with 0",
      },

      /* ---------- הודעה במקרה שהטופס לא זמין ---------- */
      formUnavailable: "It is currently not possible to send inquiries",
    },

    /* ===================== עמוד תודה ===================== */
    thankYou: {
      title: "Message Received!",
      subtitle:
        "Thank you for contacting Solchi. Our team will get back to you shortly.",
      backHome: "Back to Home",
    },

    /* ===================== פוטר ===================== */
    footer: {
      description:
        "Solchi is a boutique consulting firm specializing in strategic advisory, high-energy systems integration, and digital transformation within financial and infrastructure sectors.",
      quickNav: "Quick Navigation",
      nav: {
        home: "Home",
        about: "About",
        electricity: "Electricity Division",
        is: "Information Systems",
        contact: "Contact",
      },
      contactTitle: "Contact",
      address: "Ha-Vered 544, Kidron, Israel",
      rights: "All rights reserved.",
      accessibility: "Accessibility Statement",
    },

    /* ===================== הצהרת נגישות ===================== */
    accessibility: {
      title: "Accessibility Statement",
      updatedLine: "Accessibility work in the test site updated: November 20, 2026",
      intro: "We aim to make our services accessible to people with disabilities and welcome feedback on barriers encountered while using the website.",
      levelTitle: "Accessibility testing status",
      levelText: "Technical improvements have been made with Israeli Standard 5568 and AA-level accessibility in mind. A complete accessibility audit has not yet been completed, so this statement does not certify full compliance.",
      adjustmentsTitle: "Improvements made to the test website",
      adjustments: [
        "Keyboard-accessible skip link to the main content.",
        "Keyboard navigation for controls and form fields.",
        "Dialogs with managed focus, Escape to close, and focus restoration.",
        "Associated labels for contact form fields and announced errors.",
        "Text alternatives for content images.",
        "Options to adjust text size and enable higher contrast.",
        "Support for Hebrew, English and Japanese reading directions.",
        "Support for reduced-motion preferences.",
        "Responsive layout for desktop and mobile browsers.",
      ],
      issueTitle: "Report an accessibility issue",
      issueText: "If you encounter an accessibility barrier or need content in an accessible format, email hila@solchi.co.il or yehiel@solchi.co.il and include the page and problem.",
      businessArrangementsTitle: "Accessibility at our premises",
      businessArrangements: [
        "For information about physical accessibility arrangements before visiting, contact hila@solchi.co.il. Details of on-site accessibility arrangements must be confirmed with company management.",
      ],
    },
  },

 ja: {
    /* ===================== ナビゲーション ===================== */
    nav: {
      home: "ホーム",
      about: "会社概要",
      electricity: "電力部門",
      is: "情報システム",
      contact: "お問い合わせ",
      language: "言語",
    },

    /* ===================== 言語切替 ===================== */
    switchTo: "עברית",

    /* ===================== ホームページ ===================== */
    home: {
      hero: {
        titlePrefix: "Electrical",
        titleHighlight: "& IT",
        titleSuffix: "Solutions",
        focusLine: "電気工学 | エネルギーインフラ | 情報システム",
        subtitle:
          "Solchiは、エンジニアリングの専門性と先進的なテクノロジー思考を組み合わせ、企画・設計から実装まで、安全で効率的なソリューションを提供します。",
        ctaPrimary: "お問い合わせ",
        ctaSecondary: "会社概要",
      },

      intro: {
        title: "私たちは助言するだけでなく、解決します。",
        subtitle:
          "豊富な業界知識と専門性により、お客様に最適なアドバイスと実用的な成果を提供します。信頼できるアドバイザーとして伴走します。",
      },

      aboutBlock: {
        title: "Solchiについて",
        p1:
          "当社は、高エネルギー電気工学と複雑な情報システムプロジェクト管理という二つの専門領域を統合し、長年の経験、システム思考、実行力に基づく包括的なソリューションを提供します。",
        p2:
          "Solchiは、プロセス改善、業務効率化、経営支援、電力設備、IT、DX（デジタルトランスフォーメーション）分野における包括的な支援を専門としています。",
      },

      services: {
        title: "コンサルティングサービス",
        subtitle:
          "Solchiは、主に二つの専門領域で戦略的なコンサルティングと実行支援を提供する専門特化型コンサルティング会社です。",
        energy: {
          title: "高エネルギーシステム",
          desc:
            "発電・送電・電力供給設備に関するコンサルティング、設計、技術調整を提供します",
        },
        is: {
          title: "情報システム",
          desc:
            "業務プロセスに適した情報システムの設計・導入・運用支援を一貫して提供します",
        },
      },

      electricity: {
        title: "電気工学と高エネルギー設備における専門性",
        subtitle:
          "この分野は、発電事業者、政府機関、企業向けの複雑なプロジェクトで30年以上の経験を持つ上級電気技術者が担当しています。",
        bullets: [
          "変電所および電力送出設備の設計",
          "ガス絶縁開閉装置（GIS）の専門知識",
          "設備の電力系統への統合",
          "電力会社での上級認定経験",
        ],
        readMore: "電力部門について詳しく見る",
      },

      is: {
        title: "情報システムプロジェクトの管理・導入における専門性",
        subtitle:
          "この分野は、金融機関における複雑な情報システムプロジェクトの管理・導入経験を持つHila Cohenが担当しています。",
        bullets: [
          "情報システムプロジェクトの包括的な管理",
          "信用プロセスに関する深い専門性",
          "Salesforceプロジェクトの専門知識",
          "戦略的ロードマップとKPIの構築",
        ],
        readMore: "情報システムについて詳しく見る",
      },

      philosophy: {
        title: "私たちの理念",
        text:
          "Solchiのコンサルタントは、複雑なプロジェクトにおける事業戦略の策定と実行支援に豊富な経験を持っています。私たちはシンプルに考え、明確に伝え、変化の速い技術環境の中でお客様の成長を支援します。",
        quote: "「私たちは助言するだけでなく、解決します」",
      },
    },

    /* ===================== 会社概要ページ ===================== */
    about: {
      hero: {
        title: "会社概要",
        subtitle:
          "Solchiは、現代経済を支える二つの主要領域で戦略的コンサルティングと実行支援を提供する専門特化型コンサルティング会社です",
      },

      content: {
        p1:
          "Solchiは、プロセス改善、業務効率化、経営支援を専門とし、民間発電、送電・電力供給、IT、DX（デジタルトランスフォーメーション）に関する包括的なソリューションを提供します。",
        p2:
          "当社のコンサルタントは豊富な業界経験を有し、複雑なプロジェクトにおける事業戦略の策定、課題管理、財務管理、作業計画の定義・管理、チームおよびベンダー管理まで包括的に支援します。",
        p3:
          "私たちはシンプルに考え、分かりやすく伝え、急速に変化する技術環境の中でお客様の成長を支えるソリューションとサービスを提供します。",
      },

      divisions: {
        electricity: {
          title: "電力・エネルギー部門",
          desc: "電気システム設計、エネルギーインフラ、エンジニアリングプロジェクト支援、高エネルギーシステム管理を提供します。",
        },
        informationSystems: {
          title: "情報システム部門",
          desc: "Salesforce、業務自動化、Fintechソリューション、組織向け情報システム設計を支援します。",
        },
      },

      vision: {
        title: "ビジョンとミッション",
        items: [
          "テクノロジーと革新を通じて、組織を業務卓越性へ導くこと",
          "安定的で持続可能な成長を実現するエンジニアリングおよびシステムソリューションを提供すること",
          "複雑なインフラ系プロジェクトの戦略的パートナーとして選ばれること",
        ],
      },
    },

   /* ===================== 電力部門ページ ===================== */
  electricity: {
    pageTag: "電力部門",
    name: "Yehiel Amir Cohen",
    role:
      "電力・エネルギー部門の責任者。発電事業者、政府機関、企業向けの複雑なプロジェクトにおいて、30年以上の計画・管理・プロジェクト支援経験を持つ上級電気技術者がこの分野を率いています。",

    badges: {
      energy: "高エネルギー設備",
      substations: "変電設備",
      gis: "GIS",
    },

    experienceTitle: "経験と専門性",
    experienceP1:
      "発電事業者、政府機関、企業を対象に、多様な手法と技術を用いた高エネルギープロジェクトおよび複雑システム開発を30年以上にわたり管理してきた経験があります。",
    experienceP2:
      "高エネルギープロジェクトにおける試験計画および運用開始プロセスの設計に豊富な経験を有しています。",
    experienceP3:
      "複数メーカーのガス絶縁開閉装置（GIS）に精通し、イスラエルの電力システムについて深い知見を有しています。電力会社における上級認定者として、障害対応や設備の通電・停電手順にも携わってきました。",
    experienceP4:
      "変電所および発電所における詳細設計を専門としています。",

    expertiseTitle: "主な専門領域",
    expertise: [
      "統合型プロジェクトの立ち上げと推進",
      "高エネルギーシステムの電力系統への統合",
      "プロジェクト初期段階から最終接続までの電気設備詳細設計",
      "運用・保守メソドロジーの開発と実装",
      "安全性と設備保護への継続的な取り組み",
      "重大障害へのリアルタイム対応",
    ],

    servicesTitle: "コンサルティングサービス",
    services: [
      "総合支援：企画・計画から実装まで、運用・保守の視点を含めて伴走します",
      "最適化：解決策の特定、代替案の評価、投資に対する財務的妥当性の検討を行います",
      "規制対応：電力会社およびNogaとの調整、システム定義、市場統合を支援します",
      "安全・保守：設備の停電手順を含む安全面での継続的支援を行います",
    ],

    planningTitle: "設計サービス",
    planningIntro:
      "SOLCHIでは、単に設計するだけでなく、プロジェクトを前進させるインテリジェントなエンジニアリングソリューションを創出します。すべての設計プロセスは、システム思考、専門的な革新、そして高エネルギープロジェクトの初期構想から納入までの豊富な経験に基づいています。",
    planningSummary: [
      "コンセプト段階から実行可能な詳細設計まで、一貫したスマートなエンジニアリング設計",
      "入札、意思決定、多分野調整のための専門的な基盤づくり",
      "複雑で高エネルギーなインフラプロジェクトに適した電気・制御ソリューション",
      "品質、安全性、規格適合、効率を確保する技術支援、レビュー、最適化",
    ],
    planningItems: [
      "プロジェクトの基盤を明確にする概念設計（Concept Design）、技術・経済面での代替案分析を含む意思決定支援",
      "すべての電気・補助システムに対する詳細設計（Detail Design）— 計算、図面、仕様書、実施設計成果物",
      "明確な技術要件に基づく完全な入札資料の作成",
      "企画段階から納入までの包括的な技術支援、FAT/SATおよび現地コミッショニング対応を含む",
      "電気、建築、機械、制御、安全、環境の各分野を統合する多分野設計調整",
      "潮流、短絡、接地、負荷、選択協調、信頼性などの高度な工学計算",
      "特別高圧、高圧、中圧、低圧システムの設計、盤、ケーブル、保護機器、制御ソリューションを含む",
      "IEC、IEEEなど国際・国内規格への適合確認と設計レビュー",
      "インフラ制約、密集条件、高いエネルギー要求を持つ複雑プロジェクト向けのカスタムソリューション",
      "性能向上、工程短縮、コスト削減を実現する設計最適化。ただし品質は妥協しません",
    ],

    clientsTitle: "エネルギー分野のお客様",
    clients: [
      "民間発電事業者",
      "政府機関",
      "インフラ企業",
      "産業組織",
    ],
  },

    /* ===================== 情報システムページ ===================== */
    isPage: {
      hero: {
        tag: "情報システム部門",
        name: "Hila Cohen",
        subtitle:
          "CEO兼情報システム部門責任者。組織向けの複雑な情報システムプロジェクトの推進、管理、導入を専門としています。",
        badges: {
          salesforce: "Salesforce",
          fintech: "フィンテック",
          processAutomation: "プロセス自動化",
        },
      },

      popups: {
        salesforce: {
          eyebrow: "SALESFORCE",
          title: "管理と成長を支えるSalesforceプラットフォーム",
          subtitle: "Salesforceは単なるCRMシステムではありません。ビジネスプロセスの効率化、管理の向上、組織の成長を目的に、プラットフォーム上で各組織に合わせたソリューションを設計・構築します。",
          cards: [
            { title: "業務フローとデータフローの自動化。", desc: "" },
            { title: "ポータルと登録プロセスの構築。", desc: "" },
            { title: "割り当て管理とリアルタイム追跡。", desc: "" },
            { title: "組織固有のニーズに合わせたデータ構造、オブジェクト、プロセスの最適化。", desc: "" },
          ],
          result: {
            title: "組織にもたらす価値",
            desc: "手作業を減らして時間を節約し、事業活動の全体像を統一的に把握できる、正確で安定性と柔軟性に優れたシステムを実現します。",
          },
        },
        fintech: {
          eyebrow: "FINTECH",
          title: "複雑な金融分野に対応するテクノロジーソリューション",
          subtitle: "金融・銀行システムでの経験を活かし、規制要件、複雑なビジネスロジック、先進的なユーザー体験を融合した基盤とプロセスの設計・構築を支援します。",
          cards: [
            { title: "与信・融資管理システムのエンドツーエンド設計・構築。", desc: "" },
            { title: "預金・貯蓄管理ソリューションの構築。", desc: "" },
            { title: "金融プロセスのデジタル化。", desc: "" },
            { title: "既存システムおよび先進的な技術環境への適合。", desc: "" },
          ],
          result: {
            title: "組織にもたらす価値",
            desc: "金融ビジネスへの深い理解と正確な技術実装を組み合わせ、規制・リスク・開発の要件を効果的につなぎます。",
          },
        },
        processAutomation: {
          eyebrow: "PROCESS AUTOMATION",
          title: "プロセス自動化と業務効率化",
          subtitle: "業務上のボトルネックを見極め、手作業で複雑、あるいは一貫性のないプロセスを、整理された自動化可能で測定可能なプロセスへ変革します。",
          cards: [
            { title: "既存業務プロセスの可視化と診断。", desc: "" },
            { title: "弱点と非効率の特定。", desc: "" },
            { title: "適切な情報アーキテクチャの設計。", desc: "" },
            { title: "継続的で正確かつ透明性の高い業務を可能にするソリューションの導入。", desc: "" },
          ],
          result: {
            title: "組織にもたらす価値",
            desc: "人的ミスの削減、業務効率と拡張性の向上、リアルタイムのレポートとダッシュボードによる最新状況の把握を実現します。",
          },
        },
      },

      expertise: {
        title: "専門性と付加価値",
        p1:
          "当社は、複雑なシステム導入と組織プロセス全体の管理における実務経験を活かし、幅広い業界の組織に大きな付加価値を提供します。複雑なビジネスニーズを安定的で正確かつ実行可能な技術ソリューションへ変換する力が、当社の活動の中核です。",
        p2:
          "Solchiは、複雑性の低減、プロセスの簡素化、組織およびビジネス体験の改善に取り組んでいます。初期分析・企画からシステム設計・実装、ベンダー管理、パフォーマンス管理まで一貫して支援します。",
      },

      credit: {
        title: "信用・金融システム",
        items: [
          "審査申請と引受",
          "申請審査とローン運用",
          "管理・レポート",
          "コンプライアンス対応",
          "業務分析",
          "ERP/CRM連携",
        ],
      },

      more: {
        title: "その他の専門領域",
        items: [
          {
            title: "戦略ロードマップ",
            desc:
              "組織のITロードマップ構築、KPI定義、プロジェクトライフサイクル全体でのモニタリング",
          },
          {
            title: "Salesforce",
            desc:
              "Salesforceプラットフォーム上での基幹システム設計・開発および複雑な導入プロジェクト管理",
          },
          {
            title: "デリバリー管理",
            desc:
              "社内開発または外部委託プロジェクトを企画段階から完全実装まで推進",
          },
          {
            title: "実現可能性分析",
            desc:
              "コスト、効果、財務・運用面での妥当性を含む導入代替案の評価",
          },
          {
            title: "RFP・入札支援",
            desc:
              "適切なソリューションとインフラの選定、入札書類作成および専門的な入札管理",
          },
        ],
      },

      why: {
        title: "情報システム領域でSolchiが選ばれる理由",
        items: [
          "金融領域への深い理解と高い技術専門性の両立",
          "主要な信用・銀行システムでの実績",
          "部門横断的なリーダーシップ",
          "規制要件に対応した長期的なシステム思考",
        ],
      },
    },

    /* ===================== お問い合わせページ ===================== */
    contact: {
      pageTitle: "お問い合わせ",
      pageSubtitle:
        "ご質問への回答や初回相談の調整を承ります。",
      detailsTitle: "連絡先情報",
      addressTitle: "所在地",
      addressText: "Ha-Vered 544, Kidron, Israel",
      addressHint: "地図で開く",
      availabilityTitle: "対応時間",
      availabilityHours: "日曜〜木曜 | 08:30〜18:00",
      formTitle: "お問い合わせフォーム",
      submit: "送信",
      sending: "送信中...",

      peopleTitle: "担当者",
      people: {
        hila: {
          name: "Hila Cohen",
          role: "情報システム責任者",
          email: "hila@solchi.co.il",
        },
        yehiel: {
          name: "Yehiel Amir Cohen",
          role: "電力部門責任者",
          email: "yehiel@solchi.co.il",
        },
      },

      fields: {
        fullName: "氏名",
        division: "関連部門",
        subject: "お問い合わせ内容",
        email: "メールアドレス",
        phone: "電話番号",
        message: "メッセージ",
      },

      placeholders: {
        fullName: "山田 太郎",
        division: "部門を選択",
        subject: "件名を選択",
        email: "name@company.com",
        phone: "+972 5X XXX XXXX",
        message: "ご相談内容を簡単にご記入ください...",
      },

      subjectOptions: {
        electricalDivision: "電力部門",
        informationSystems: "情報システム",
      },

      validation: {
        nameRequired: "氏名を入力してください",
        nameLettersOnly: "氏名には文字のみを入力してください",
        emailRequired: "メールアドレスを入力してください",
        emailInvalid: "有効なメールアドレスを入力してください",
        emailNoSpaces: "メールアドレスにスペースは使用できません",
        phoneRequired: "電話番号を入力してください",
        phoneInvalid: "有効な電話番号を入力してください",
        phoneInvalidIsrael:
          "イスラエルの電話番号は10桁で、0から始まる必要があります",
      },

      formUnavailable: "現在、お問い合わせを送信できません",
    },

    /* ===================== サンクスページ ===================== */
    thankYou: {
      title: "メッセージを受け付けました！",
      subtitle:
        "Solchiへお問い合わせいただきありがとうございます。担当者より折り返しご連絡いたします。",
      backHome: "ホームへ戻る",
    },

    /* ===================== フッター ===================== */
    footer: {
      description:
        "Solchiは、戦略的コンサルティング、高エネルギーシステム統合、金融・インフラ分野におけるDX（デジタルトランスフォーメーション）を専門とする専門特化型コンサルティング会社です。",
      quickNav: "クイックナビゲーション",
      nav: {
        home: "ホーム",
        about: "会社概要",
        electricity: "電力部門",
        is: "情報システム",
        contact: "お問い合わせ",
      },
      contactTitle: "お問い合わせ",
      address: "Ha-Vered 544, Kidron, Israel",
      rights: "All rights reserved.",
      accessibility: "アクセシビリティ声明",
    },

    /* ===================== アクセシビリティ ===================== */
    accessibility: {
      title: "アクセシビリティ声明",
      updatedLine: "テストサイトのアクセシビリティ対応更新日：2026年11月20日",
      intro: "障がいのある方にもサービスをご利用いただけるよう、ウェブサイトのアクセシビリティ改善に取り組んでいます。問題があればご連絡ください。",
      levelTitle: "アクセシビリティ検証の状況",
      levelText: "イスラエル規格5568およびAAレベルを考慮した技術的な改善を行いました。ただし、包括的なアクセシビリティ監査はまだ完了しておらず、すべての要件への適合を保証するものではありません。",
      adjustmentsTitle: "テストサイトで実施した改善",
      adjustments: [
        "キーボードで利用できるメインコンテンツへのスキップリンク。",
        "ボタンや入力欄のキーボード操作。",
        "フォーカス管理、Escapeによる閉鎖、元の位置への復帰に対応したダイアログ。",
        "お問い合わせフォームのラベルとエラー通知。",
        "コンテンツ画像の代替テキスト。",
        "文字サイズ変更と高コントラストの切り替え。",
        "ヘブライ語・英語・日本語の文字方向への対応。",
        "動きを減らす設定への対応。",
        "PCとモバイルに対応したレイアウト。",
      ],
      issueTitle: "アクセシビリティの問題を報告",
      issueText: "操作上の問題やアクセシブルな形式での情報が必要な場合は、該当ページと問題の内容を添えて hila@solchi.co.il または yehiel@solchi.co.il へご連絡ください。",
      businessArrangementsTitle: "事業所のアクセシビリティ",
      businessArrangements: [
        "訪問前の施設のアクセシビリティについては hila@solchi.co.il へお問い合わせください。施設の具体的な設備については会社側の確認が必要です。",
      ],
    },
  },
} as const;

/* =========================================================
   טיפוסים
========================================================= */

type Copy = typeof copy.he;

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

/* =========================================================
   יצירת Context
========================================================= */

const I18nContext = createContext<I18nContextValue | null>(null);

/* =========================================================
   פונקציות עזר
========================================================= */

/* ---------- שפת ברירת מחדל ---------- */
function getDefaultLang(): Lang {
  const saved = (typeof window !== "undefined" &&
    localStorage.getItem(STORAGE_KEY)) as Lang | null;
  if (saved === "he" || saved === "en" || saved === "ja") return saved;

  return "he";
}

/* ---------- שליפת ערך מתוך אובייקט לפי path ---------- */
function getValueByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => {
    if (acc == null) return undefined;
    return acc[part];
  }, obj);
}

/* =========================================================
   Provider של השפה
========================================================= */

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
      localStorage.setItem(STORAGE_KEY, lang);
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

/* =========================================================
   Hook לשימוש בתרגומים
========================================================= */

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
