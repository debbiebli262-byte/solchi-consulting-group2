import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'דף הבית', path: '/' },
    { name: 'אודות', path: '/about' },
    { name: 'חטיבת חשמל', path: '/electricity' },
    { name: 'מערכות מידע', path: '/is' }, // הקישור שמוביל לדף InformationSystems
    { name: 'צור קשר', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const logoUrl = '/logo.png'; // אם העלית ל-public, או השתמשי בקישור הדרייב התקין

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logoUrl} alt="Solchi Logo" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-reverse space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold px-4 py-2 rounded-xl ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
