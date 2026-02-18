import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Electricity from './pages/Electricity';
import InformationSystems from './pages/InformationSystems'; // הוספתי את הייבוא הזה
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Accessibility from './pages/Accessibility';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/electricity" element={<Electricity />} />
            {/* חיבור הדף החסר למסלול של התפריט */}
            <Route path="/is" element={<InformationSystems />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/accessibility" element={<Accessibility />} />
            {/* כל נתיב לא מוכר יחזיר לדף הבית */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
