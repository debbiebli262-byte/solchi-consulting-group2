import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  // שימוש בלוגו מתיקיית public כפי שעשינו ב-Navbar
  const logoUrl = '/logo.png'; 
  const googleMapsUrl = 'https://maps.google.com/?q=הורד+544+מושב+קידרון';

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden">
      {/* תבנית רקע דקורטיבית */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* עמודה 1: לוגו ותיאור */}
          <div className="md:col-span-5">
            <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-white/10 inline-block mb-8 transition-transform hover:scale-105 duration-300">
              <img 
                src={logoUrl} 
                alt="Solchi Logo" 
                className="h-20 w-auto brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              בוטיק הייעוץ Solchi מתמחה בייעוץ וליווי אסטרטגי, שילוב מערכות עתירות אנרגיה וטרנספורמציה דיגיטלית במגזר הפיננסי והתשתיתי.
            </p>
          </div>
          
          {/* עמודה 2: ניווט מהיר - כולל את כל החטיבות */}
          <div className="md:col-span-3">
            <h4 className="text-xl font-bold mb-8 tech-font text-blue-400">ניווט מהיר</h4>
           <ul className="space-y-4 text-slate-400">
  <li><Link to="/" className="hover:text-white hover:translate-x-[-4px] inline-block transition-all">דף הבית</Link></li>
  <li><Link to="/about" className="hover:text-white hover:translate-x-[-4px] inline-block transition-all">אודות הקבוצה</Link></li>
  {/* השורה המתוקנת כאן למטה - הסרתי את ה-text-blue-300 */}
  <li><Link to="/electricity" className="hover:text-white hover:translate-x-[-4px] inline-block transition-all">חטיבת חשמל</Link></li>
  <li><Link to="/is" className="hover:text-white hover:translate-x-[-4px] inline-block transition-all">מערכות מידע</Link></li>
  <li><Link to="/contact" className="hover:text-white hover:translate-x-[-4px] inline-block transition-all">צור קשר</Link></li>
</ul>
          </div>
          
          {/* עמודה 3: פרטי התקשרות */}
          <div className="md:col-span-4">
            <h4 className="text-xl font-bold mb-8 tech-font text-blue-400">צרו קשר</h4>
            <address className="not-italic text-slate-400 space-y-4">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-4 group hover:text-white transition-colors"
              >
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="underline underline-offset-4 decoration-blue-500/30">הורד 544, מושב קידרון, ישראל</p>
              </a>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hila@solchi.co.il" className="hover:text-white transition-colors">
                  hila@solchi.co.il
                </a>
              </div>
            </address>
          </div>
        </div>
        
        {/* שורת זכויות יוצרים תחתונה */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-6">
          <p>© {new Date().getFullYear()} Solchi Consulting Group. כל הזכויות שמורות.</p>
          <div className="flex gap-8">
            <Link to="/accessibility" className="hover:text-blue-400 transition-colors underline underline-offset-4">הצהרת נגישות</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
