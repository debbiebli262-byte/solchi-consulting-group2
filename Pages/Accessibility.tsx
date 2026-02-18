
import React from 'react';

const Accessibility: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-10 tech-font border-r-4 border-blue-600 pr-4">הצהרת נגישות</h1>
        
        <div className="prose prose-lg text-slate-700 leading-relaxed space-y-8">
          <section>
            <p className="font-bold">הצהרת נגישות אתר מעודכנת לתאריך 1.11.2023</p>
            <p>
              מתן שירות לאנשים עם מוגבלויות הוא בחשיבות עליונה מבחינתנו, ואנו עושים ככל שמתאפשר לנו בעניין הנגשת האתר שלנו.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">רמת הנגישות באתר:</h2>
            <p>
              עשינו כמיטב יכולתנו על מנת שהאתר יעמוד בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013 ברמת AA, ושהאתר יקיים את הוראות מסמך WCAG2.0 מאת ארגון W3C.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">התאמות הנגישות שביצענו:</h2>
            <ul className="list-disc pr-6 space-y-2">
              <li>האתר מותאם לצפייה בדפדפנים הפופולריים גם באמצעות מחשב וגם באמצעות טלפון נייד.</li>
              <li>הניווט באתר פשוט, ידידותי וברור.</li>
              <li>תכני האתר כתובים בצורה מסודרת ובאופן ברור ומפורט.</li>
              <li>האתר מותאם למגוון גדלים של מסכים ורזולוציות.</li>
              <li>הדפים באתר בעלי מבנה פשוט וידידותי לגולשים.</li>
              <li>לתמונות באתר יש הסבר טקסטואלי חלופי (Alt Text).</li>
              <li>האתר מאפשר שינוי גודל תצוגה על ידי שימוש במקש Ctrl וגלגלת העכבר.</li>
              <li>אין באתר שימוש בטקסט מהבהב או באלמנטים לא ברורים.</li>
              <li>צבעי האתר מנוגדים בצורה מצוינת וברורה.</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-4">נתקלתם בבעיה?</h2>
            <p>
              למרות מאמצינו להנגיש את האתר, עלולים להיות פרטים שלא הונגשו בצורה מושלמת. אם נתקלתם בפרט כזה – אנא אל תהססו לפנות אלינו באמצעות כתובת הדואר האלקטרוני שנמצאת באתר.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">הסדרי נגישות בבית העסק:</h2>
            <ul className="list-disc pr-6 space-y-2">
              <li>קיימת גישה לבעלי מוגבלויות.</li>
              <li>קיימות חניות נכים בסביבה הקרובה וברחובות הסמוכים.</li>
              <li>קיימים שירותי נכים נגישים.</li>
              <li>קיימים שלטי זיהוי והכוונה.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
