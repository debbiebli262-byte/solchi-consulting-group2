import React from 'react';

const InformationSystems: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        {/* Dynamic elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded mb-4 uppercase tracking-widest tech-font">חטיבת מערכות מידע</span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tech-font leading-tight">הילה כהן</h1>
              <p className="text-xl text-indigo-100 leading-relaxed font-light border-r-4 border-indigo-500 pr-6">
                מובילת פעילות מערכות המידע. מומחית בליווי, ניהול ויישום פרויקטי מערכות מידע מורכבים עבור ארגונים פיננסיים.
              </p>
              <div className="mt-10 flex gap-4">
                 <div className="bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 px-4 py-2 rounded-lg text-indigo-200 text-sm font-bold transition-all hover:bg-indigo-500/20">Salesforce Specialist</div>
                 <div className="bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 px-4 py-2 rounded-lg text-indigo-200 text-sm font-bold transition-all hover:bg-indigo-500/20">Fintech Expert</div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <div className="relative group">
                  <div className="absolute inset-0 bg-indigo-600/40 blur-3xl rounded-full scale-90 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-800 rounded-[3rem] border-2 border-indigo-400/50 overflow-hidden shadow-[0_0_60px_rgba(79,70,229,0.3)] transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    {/* תוקן: הוספת התמונה של הילה כהן */}
                    <img 
                      src="/HilaCohen.png" 
                      alt="הילה כהן" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  {/* Decorative circuit lines effect */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-indigo-500 rounded-tr-2xl opacity-50"></div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tech-font border-b-2 border-indigo-600 pb-2 inline-block">מומחיות וערך מוסף</h2>
            <div className="prose prose-lg text-slate-700 leading-relaxed mb-12 text-justify">
              <p>
                אנו מביאים ערך מוסף משמעותי לארגונים פיננסיים בזכות ניסיון רב במערכות אשראי ובתהליכים פיננסיים מקצה לקצה. היכולת שלנו לחבר בין צרכים עסקיים מורכבים לפתרונות טכנולוגיים יציבים היא הליבה של הפעילות שלנו.
              </p>
              <p>
                ב-Solchi, אנו מחויבים לצמצם את המורכבות ולפשט את החוויה מקצה לקצה, משלב הייזום ועד ליישום מלא של המערכת, ניהול כ"א וספקים.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-indigo-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-10 text-indigo-400 tech-font flex items-center gap-4">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                מערכות אשראי ופיננסים
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-slate-300">
                <li className="flex items-start gap-3 border-r border-indigo-500/30 pr-4 italic transition-colors hover:text-white">הגשת בקשה וחיתום</li>
                <li className="flex items-start gap-3 border-r border-indigo-500/30 pr-4 italic transition-colors hover:text-white">בחינת בקשה ותפעול הלוואה</li>
                <li className="flex items-start gap-3 border-r border-indigo-500/30 pr-4 italic transition-colors hover:text-white">ניהול בקרות ודוחות</li>
                <li className="flex items-start gap-3 border-r border-indigo-500/30 pr-4 italic transition-colors hover:text-white">תמיכה בציות ורגולציה</li>
                <li className="flex items-start gap-3 border-r border-indigo-500/30 pr-4 italic transition-colors hover:text-white">אפיון תהליכים עסקיים</li>
                <li className="flex items-start gap-3 border-r border-indigo-500/30 pr-4 italic transition-colors hover:text-white">אינטגרציה (ERP, CRM)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tech-font">תחומי התמחות נוספים</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Roadmap אסטרטגי", desc: "בניית תוכנית עבודה למחשוב הארגון, קביעת KPI ובחינתם לאורך חיי הפרויקט." },
                { title: "מומחיות Salesforce", desc: "פיתוח מערכות ליבה על גבי הפלטפורמה וניהול פרויקטי Salesforce מורכבים." },
                { title: "ניהול Delivery", desc: "הובלת פרויקטי פיתוח פנימיים או במיקור חוץ משלב הייזום עד ליישום מלא." },
                { title: "כתיבת מכרזים", desc: "איתור ובחירת פתרונות ותשתיות, כולל כתיבת מכרזים וניהולם המקצועי." },
                { title: "ניתוח כדאיות", desc: "בחינת חלופות ליישום - עלות, אפקטיביות וכדאיות פיננסית ותפעולית." }
              ].map((service, idx) => (
                <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <h4 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                    <span className="text-indigo-400">#</span>
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Why Us section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-[5rem] mx-4 mb-24 overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-16 tech-font">למה Solchi למערכות מידע?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-right">
            {[
              "הבנה פיננסית עמוקה לצד מומחיות טכנולוגית ללא פשרות",
              "ניסיון מוכח במערכות אשראי ובנקאות מהמובילות בישראל",
              "יכולת הובלה חוצת־ארגון מול מנהלים, ספקים ולקוחות קצה",
              "ראייה מערכתית וארוכת טווח המותאמת לצרכי הרגולציה"
            ].map((text, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <p className="font-medium text-lg text-indigo-50 self-center leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformationSystems;
