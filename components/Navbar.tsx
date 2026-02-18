import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'דף הבית', path: '/' },
    { name: 'אודות', path: '/about' },
    { name: 'חטיבת חשמל', path: '/electricity' },
    { name: 'מערכות מידע', path: '/is' }, 
    { name: 'צור קשר', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const logoUrl = '/logo.png'; 

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-blue-100/50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* לוגו */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logoUrl} alt="Solchi Logo" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>

          {/* תפריט למחשב - נשאר בדיוק אותו דבר */}
          <div className="hidden md:flex items-center space-x-reverse space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* כפתור 3 פסים לטלפון - הוספתי כאן */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* התפריט שנפתח בטלפון */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2 text-right">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-xl text-base font-bold ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
