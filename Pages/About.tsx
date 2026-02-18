import React from 'react';

const About: React.FC = () => {
  // שימוש בקובץ המקומי מתיקיית public
  const logoUrl = '/logo.png';

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div className="bg-slate-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tech-font">קצת עלינו</h1>
            <p className="text-xl text-blue-600 font-bold max-w-2xl">
              בוטיק הייעוץ Solchi מתמחה בייעוץ וליווי אסטרטגי ועוסק בשני תחומים מרכזיים המניעים את המשק המודרני.
            </p>
          </div>
          <div className="flex-shrink-0">
             {/* תיקון: שימוש במשתנה logoUrl במקום בקישור הדרייב הישן */}
             <img 
               src={logoUrl} 
               alt="Solchi Logo" 
               className="h-40 w-auto grayscale-0 brightness-100 object-contain"
             />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>
              Solchi מתמחה בייעול תהליכים ושיפור ביצועים, התייעלות תפעולית וליווי ההנהלה. אנו מספקים מענה כולל לחברות וארגונים בתחומי הקמת מתקני יצור, הולכה ואספקת חשמל פרטיים, מחשוב וטרנספורמציה דיגיטלית.
            </p>
            <p>
              היועצים ב-Solchi בעלי ניסיון רב בתעשייה בארץ, המאפשר גיבוש אסטרטגיה עסקית, ליווי מקצה לקצה בפרויקטים מורכבים המשלבים התמודדות עם אתגרים, ניהול פיננסי, הגדרה ובקרת תוכניות עבודה, ניהול עובדים וספקים ועוד.
            </p>
            <p>
              אנחנו חושבים פשוט, נותנים שירות בגובה העיניים ומחויבים לספק פתרונות ושירותים אשר יאפשרו לכם לצמוח בסביבה הטכנולוגית המשתנה במהירות.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full -mr-16 -mt-16 opacity-20"></div>
            <h3 className="text-2xl font-bold mb-8 tech-font text-blue-400">חזון ומשימה</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                <p>הובלת ארגונים לעבר מצוינות תפעולית באמצעות טכנולוגיה וחדשנות.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                <p>מתן פתרונות הנדסיים ומערכתיים המבטיחים צמיחה יציבה ובת קיימא.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                <p>להיות השותף האסטרטגי המועדף לניהול פרויקטים מורכבים ותשתיתיים.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
