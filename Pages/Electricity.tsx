import React from 'react';

const Electricity: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero with Yehiel Portrait */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-4 uppercase tracking-widest tech-font">
                חטיבת החשמל
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tech-font leading-tight">
                יחיאל אמיר כהן
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-light border-r-4 border-blue-600 pr-6">
                מהנדס חשמל בכיר, יועץ ומנהל פרויקטים בתחום מערכות עתירות אנרגיה בכלל ותחנות השנאה/הוצאת אנרגיה בפרט.
              </p>
              <p className="mt-6 text-slate-400">
                מוביל הפעילות בחטיבת החשמל והאנרגיה
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/30 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>

                <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-800 rounded-[2rem] border-2 border-blue-500/50 overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                  <img
                    src="/yehielcohen.png"
                    alt="יחיאל אמיר כהן"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-blue-500 rounded-bl-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tech-font border-b-2 border-blue-600 pb-2 inline-block">
              ניסיון ומומחיות
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-justify">
              <p>
                בעל מעל 30 שנות ניסיון בכל הקשור לניהול פרויקטים עתירי אנרגיה לפיתוח מערכות מורכבות במתודולוגיות שונות וטכנולוגיות מגוונות מול יצרני חשמל, משרדי ממשלה וארגונים עסקיים.
              </p>
              <p>
                התמחות במסדרים מבודדי גז (GIS) מיצרנים שונים, ובעל היכרות מעמיקה של מערכת החשמל בישראל. בעל ניסיון של "מורשה בכיר" בחברת החשמל, כולל ליווי בתקלות ושחרור מתקנים ממתח.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8 tech-font">
              תחומי התמחות מרכזיים:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "התנעה והובלת פרויקטים אינטגרטיביים",
                "שילוב מערכות עתירות אנרגיה ברשת החשמל",
                "ביצוע תכנון פרטני של המתקן החשמלי",
                "פיתוח ויישום מתודולוגיות תפעול ותחזוקה",
                "שמירה בלתי פוסקת על בטיחות והגנה על מתקנים",
                "מתן מענה לתקלות קריטיות בזמן אמת"
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group"
                >
                  <div className="w-3 h-3 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></div>
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20">
                <h3 className="text-xl font-bold mb-8 tech-font">
                  שירותי הייעוץ שלנו
                </h3>
                <ul className="space-y-6 text-sm">
                  <li className="border-b border-blue-400 pb-4 leading-relaxed flex gap-3">
                    <span className="font-bold text-blue-200">01</span>
                    <p>
                      <strong>ליווי מקצה לקצה:</strong> משלב הייזום והתכנון ועד ליישום מלא בראיה תפעולית ותחזוקתית.
                    </p>
                  </li>
                  <li className="border-b border-blue-400 pb-4 leading-relaxed flex gap-3">
                    <span className="font-bold text-blue-200">02</span>
                    <p>
                      <strong>אופטימיזציה:</strong> איתור פתרונות, בחינת חלופות וכדאיות פיננסית אל מול השקעה.
                    </p>
                  </li>
                  <li className="border-b border-blue-400 pb-4 leading-relaxed flex gap-3">
                    <span className="font-bold text-blue-200">03</span>
                    <p>
                      <strong>רגולציה:</strong> ליווי מול חברת החשמל ו-"נגה" באפיון המערכת ושילובה במשק.
                    </p>
                  </li>
                  <li className="leading-relaxed flex gap-3">
                    <span className="font-bold text-blue-200">04</span>
                    <p>
                      <strong>בטיחות ותחזוקה:</strong> ליווי שוטף בהיבטי בטיחות לשחרור מתקן ממתח.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients list */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 tech-font">
            הלקוחות שלנו בתחום האנרגיה
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-center min-h-[120px]">
              יצרני חשמל פרטיים
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-center min-h-[120px]">
              משרדי ממשלה
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-center min-h-[120px]">
              חברות תשתיות
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-center min-h-[120px]">
              ארגונים תעשייתיים
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electricity;
