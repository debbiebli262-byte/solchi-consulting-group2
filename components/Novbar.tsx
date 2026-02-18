import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'דף ראשי', path: '/' },
    { name: 'אודות', path: '/about' },
    { name: 'חטיבת החשמל', path: '/electricity' },
    { name: 'מערכות מידע', path: '/it' },
    { name: 'צור קשר', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* לוגו / שם האתר */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl tracking-wider">
              SOLCHI <span className="text-blue-500">GROUP</span>
            </Link>
          </div>

          {/* תפריט למחשב (מוסתר בטלפון) */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-8 space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* כפתור המבורגר (3 פסים) - מופיע רק בטלפון */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">פתח תפריט</span>
              {/* סמל ה-X או ההמבורגר משתנה לפי המצב */}
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* תפריט נפתח לנייד (מוצג רק כשהכפתור נלחץ) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-900 border-t border-slate-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)} // סוגר את התפריט אחרי לחיצה
              className="text-slate-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium border-b border-slate-800 last:border-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
