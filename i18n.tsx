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
        processAutomation: {
          eyebrow: "Process Automation",
          title: "פחות עבודה ידנית, יותר תוצאות",
          subtitle:
            "מיכון תהליכים ארגוניים שמצמצם טעויות, מקצר זמני עבודה ומייצר שקיפות ניהולית.",
          cards: [
            {
              title: "מיפוי ואבחון",
              desc: "ניתוח המצב הקיים ואיתור צווארי בקבוק תפעוליים.",
            },
            {
              title: "ארכיטקטורת מידע",
              desc: "בחירת הכלים הנכונים למיכון משימות ידניות ותהליכים חוזרים.",
            },
            {
              title: "הטמעה וניהול שינוי",
              desc: "ליווי הצוותים במעבר לעבודה ממוכנת, יעילה ומדידה.",
            },
          ],
          result: {
            title: "התוצאה",
            desc:
              "פחות טעויות, יותר שליטה, ודוחות בזמן אמת על ביצועי הארגון.",
          },
        },

        fintech: {
          eyebrow: "Fintech Solutions",
          title: "הופכים מורכבות פיננסית למצוינות טכנולוגית",
          subtitle:
            "תכנון והקמת מערכות פיננסיות קריטיות שמשלבות רגולציה, תפעול וחוויית משתמש מתקדמת.",
          cards: [
            {
              title: "מחזור חיי אשראי",
              desc: "אפיון והקמת תהליכים מקצה לקצה — מבקשת הלקוח ועד לשחרור הכספים.",
            },
            {
              title: "פיקדונות וחסכונות",
              desc: "בניית לוגיקה עסקית מורכבת במערכות המידע הארגוניות.",
            },
            {
              title: "דיגיטציה בנקאית",
              desc: "התאמת מערכות Legacy לעידן הדיגיטלי והפתוח.",
            },
          ],
          result: {
            title: "הערך המוסף",
            desc:
              "חיבור מדויק בין דרישות עסקיות, חיתום, סיכונים ופיתוח טכנולוגי.",
          },
        },

        salesforce: {
          eyebrow: "Salesforce CRM",
          title: "מערכת CRM לניהול עבודות ולקוחות",
          subtitle:
            "פתרון Salesforce מותאם לחברות חשמל, שירות ותשתיות — לניהול יעיל של קריאות, צוותים, לקוחות ותהליכים תפעוליים.",
          cards: [
            {
              title: "התאמה אישית ב-Salesforce",
              desc: "Custom Objects, Workflows ודוחות לפי מבנה הארגון.",
            },
            {
              title: "אוטומציה תפעולית",
              desc: "הפחתת עבודה ידנית באמצעות תהליכים חכמים, התראות ואישורים.",
            },
            {
              title: "ניהול לקוחות וקריאות שירות",
              desc: "מעקב אחר פניות, סטטוסים, תקלות והיסטוריית טיפול.",
            },
          ],
          result: {
            title: "התוצאה",
            desc:
              "מערכת שמרכזת מידע, משפרת זמני תגובה ומאפשרת קבלת החלטות מבוססת נתונים.",
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
      updatedLine: "הצהרת נגישות אתר מעודכנת לתאריך 1.11.2023",
      intro:
        "מתן שירות לאנשים עם מוגבלויות הוא בחשיבות עליונה מבחינתנו, ואנו עושים ככל שמתאפשר לנו בעניין הנגשת האתר שלנו.",
      levelTitle: "רמת הנגישות באתר:",
      levelText:
        'עשינו כמיטב יכולתנו על מנת שהאתר יעמוד בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013 ברמת AA, ושהאתר יקיים את הוראות מסמך WCAG2.0 מאת ארגון W3C.',
      adjustmentsTitle: "התאמות הנגישות שביצענו:",
      adjustments: [
        "האתר מותאם לצפייה בדפדפנים הפופולריים גם באמצעות מחשב וגם באמצעות טלפון נייד.",
        "הניווט באתר פשוט, ידידותי וברור.",
        "תכני האתר כתובים בצורה מסודרת ובאופן ברור ומפורט.",
        "האתר מותאם למגוון גדלים של מסכים ורזולוציות.",
        "הדפים באתר בעלי מבנה פשוט וידידותי לגולשים.",
        "לתמונות באתר יש הסבר טקסטואלי חלופי (Alt Text).",
        "האתר מאפשר שינוי גודל תצוגה על ידי שימוש במקש Ctrl וגלגלת העכבר.",
        "אין באתר שימוש בטקסט מהבהב או באלמנטים לא ברורים.",
        "צבעי האתר מנוגדים בצורה מצוינת וברורה.",
      ],
      issueTitle: "נתקלתם בבעיה?",
      issueText:
        "למרות מאמצינו להנגיש את האתר, עלולים להיות פרטים שלא הונגשו בצורה מושלמת. אם נתקלתם בפרט כזה – אנא אל תהססו לפנות אלינו באמצעות כתובת הדואר האלקטרוני שנמצאת באתר.",
      businessArrangementsTitle: "הסדרי נגישות בבית העסק:",
      businessArrangements: [
        "קיימת גישה לבעלי מוגבלויות.",
        "קיימות חניות נכים בסביבה הקרובה וברחובות הסמוכים.",
        "קיימים שירותי נכים נגישים.",
        "קיימים שלטי זיהוי והכוונה.",
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
          eyebrow: "Salesforce CRM",
          title: "CRM System for Managing Work Orders and Clients",
          subtitle:
            "A tailored Salesforce solution for energy, service, and infrastructure companies — enabling efficient management of service calls, teams, clients, and operational processes.",
          cards: [
            {
              title: "Salesforce Customization",
              desc: "Custom Objects, Workflows, and reports aligned with the organization’s structure.",
            },
            {
              title: "Operational Automation",
              desc: "Reducing manual work through smart processes, alerts, and approvals.",
            },
            {
              title: "Client and Service Call Management",
              desc: "Tracking inquiries, statuses, faults, and service history.",
            },
          ],
          result: {
            title: "The Result",
            desc:
              "A centralized system that improves response times and enables data-driven decision-making.",
          },
        },

        processAutomation: {
          eyebrow: "Process Automation",
          title: "Less Manual Work, More Results",
          subtitle:
            "Automation of organizational processes that reduces errors, shortens work cycles, and creates managerial transparency.",
          cards: [
            {
              title: "Mapping and Diagnosis",
              desc: "Analyzing the current state and identifying operational bottlenecks.",
            },
            {
              title: "Information Architecture",
              desc: "Choosing the right tools to automate manual and repetitive tasks.",
            },
            {
              title: "Implementation and Change Management",
              desc: "Supporting teams in the transition to automated, efficient, and measurable work.",
            },
          ],
          result: {
            title: "The Result",
            desc:
              "Fewer errors, greater control, and real-time reporting on organizational performance.",
          },
        },

        fintech: {
          eyebrow: "Fintech Solutions",
          title: "Turning Financial Complexity into Technological Excellence",
          subtitle:
            "Planning and implementing critical financial systems that combine regulation, operations, and advanced user experience.",
          cards: [
            {
              title: "Credit Lifecycle",
              desc: "Designing and implementing end-to-end processes — from customer request to fund release.",
            },
            {
              title: "Deposits and Savings",
              desc: "Building complex business logic within organizational information systems.",
            },
            {
              title: "Banking Digitization",
              desc: "Adapting legacy systems to the modern digital and open-banking era.",
            },
          ],
          result: {
            title: "Added Value",
            desc:
              "A precise connection between business requirements, underwriting, risk, and technological development.",
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
      updatedLine: "Website accessibility statement updated on 01.11.2023",
      intro:
        "Providing accessible service for people with disabilities is a top priority for us, and we make every reasonable effort to ensure our website is accessible.",
      levelTitle: "Accessibility level:",
      levelText:
        "We have made our best efforts for the website to comply with the Equal Rights for Persons with Disabilities Regulations (Service Accessibility Adjustments), 2013, at AA level, and to follow the WCAG 2.0 guidelines published by the W3C.",
      adjustmentsTitle: "Accessibility adjustments we implemented:",
      adjustments: [
        "The website is optimized for popular browsers on both desktop and mobile devices.",
        "Site navigation is simple, clear, and user-friendly.",
        "Content is organized and written in a clear, detailed manner.",
        "The website supports a range of screen sizes and resolutions.",
        "Pages are designed with a simple and user-friendly structure.",
        "Images include alternative text (Alt Text).",
        "Users can adjust display size using Ctrl and the mouse wheel.",
        "No flashing text or unclear elements are used on the site.",
        "Color contrast is clear and highly readable.",
      ],
      issueTitle: "Found an issue?",
      issueText:
        "Despite our efforts, some parts of the website may not be perfectly accessible. If you encounter an accessibility issue, please contact us via the email address listed on the website.",
      businessArrangementsTitle:
        "Accessibility arrangements at our business:",
      businessArrangements: [
        "Accessible access is available.",
        "Accessible parking is available nearby and on adjacent streets.",
        "Accessible restroom facilities are available.",
        "Clear identification and directional signage are available.",
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
          eyebrow: "Salesforce CRM",
          title: "作業・顧客管理のためのCRMシステム",
          subtitle:
            "電力、サービス、インフラ企業向けにカスタマイズされたSalesforceソリューション。問い合わせ、チーム、顧客、業務プロセスを効率的に管理します。",
          cards: [
            {
              title: "Salesforceのカスタマイズ",
              desc: "組織構造に合わせたCustom Objects、Workflows、レポートを構築します。",
            },
            {
              title: "業務自動化",
              desc: "スマートなプロセス、通知、承認フローにより手作業を削減します。",
            },
            {
              title: "顧客・サービス対応管理",
              desc: "問い合わせ、ステータス、障害、対応履歴を一元的に追跡します。",
            },
          ],
          result: {
            title: "成果",
            desc:
              "情報を集約し、対応時間を改善し、データに基づいた意思決定を可能にするシステムです。",
          },
        },

        processAutomation: {
          eyebrow: "Process Automation",
          title: "手作業を減らし、成果を増やす",
          subtitle:
            "ミスを減らし、作業時間を短縮し、管理の透明性を高める業務プロセス自動化です。",
          cards: [
            {
              title: "業務分析と診断",
              desc: "現状を分析し、業務上のボトルネックを特定します。",
            },
            {
              title: "情報アーキテクチャ",
              desc: "手作業や反復作業を自動化するための適切なツールを選定します。",
            },
            {
              title: "導入と変更管理",
              desc: "チームが効率的で測定可能な自動化業務へ移行できるよう支援します。",
            },
          ],
          result: {
            title: "成果",
            desc:
              "ミスの削減、管理精度の向上、組織パフォーマンスのリアルタイム可視化を実現します。",
          },
        },

        fintech: {
          eyebrow: "Fintech Solutions",
          title: "金融の複雑性を技術的な強みに変える",
          subtitle:
            "規制、業務、先進的なユーザー体験を組み合わせた重要な金融システムを設計・構築します。",
          cards: [
            {
              title: "信用ライフサイクル",
              desc: "「顧客の申請から資金実行まで、一貫したプロセスを設計・実装します。」",
            },
            {
              title: "預金・貯蓄",
              desc: "組織の情報システム内に複雑なビジネスロジックを構築します。",
            },
            {
              title: "銀行業務のデジタル化",
              desc: "Legacyシステムをデジタル時代に適応させます。",
            },
          ],
          result: {
            title: "付加価値",
            desc:
              "ビジネス要件、審査、リスク、技術開発を正確につなぎます。",
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
      updatedLine: "ウェブサイトのアクセシビリティ声明 更新日：2023年11月1日",
      intro:
        "障がいのある方へのアクセシブルなサービス提供は、当社にとって非常に重要です。当社は可能な限りウェブサイトのアクセシビリティ向上に努めています。",
      levelTitle: "ウェブサイトのアクセシビリティレベル：",
      levelText:
        "当社は、ウェブサイトがイスラエルのアクセシビリティ関連規則およびW3CのWCAG 2.0ガイドラインAAレベルに可能な限り準拠するよう努めています。",
      adjustmentsTitle: "実施したアクセシビリティ対応：",
      adjustments: [
        "主要なブラウザ、PC、モバイル端末で閲覧できるよう最適化しています。",
        "サイトのナビゲーションはシンプルで分かりやすく設計されています。",
        "コンテンツは整理され、明確に記述されています。",
        "さまざまな画面サイズと解像度に対応しています。",
        "ページ構造はシンプルで利用しやすい設計です。",
        "画像には代替テキスト（Alt Text）を設定しています。",
        "Ctrlキーとマウスホイールで表示サイズを調整できます。",
        "点滅するテキストや不明瞭な要素は使用していません。",
        "色のコントラストは読みやすさを考慮しています。",
      ],
      issueTitle: "問題を見つけましたか？",
      issueText:
        "アクセシビリティ向上に努めていますが、一部が完全に対応できていない可能性があります。問題を見つけた場合は、サイトに記載されているメールアドレスまでご連絡ください。",
      businessArrangementsTitle: "事業所のアクセシビリティ対応：",
      businessArrangements: [
        "アクセシブルなアクセスが可能です。",
        "近隣および周辺道路に障がい者用駐車スペースがあります。",
        "アクセシブルなトイレ設備があります。",
        "識別および案内表示があります。",
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
