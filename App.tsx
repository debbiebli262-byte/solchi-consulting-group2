import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Electricity from "./pages/Electricity";
import InformationSystems from "./pages/InformationSystems";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Accessibility from "./pages/Accessibility";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { copy, type Lang } from "./i18n";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>("he");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <Router>
      <ScrollToTop />

      {/* כפתור החלפת שפה */}
      <button
        onClick={() => setLang(lang === "he" ? "en" : "he")}
        className="fixed top-4 left-4 z-[9999] px-3 py-2 rounded-xl bg-black text-white shadow"
      >
        {copy[lang].switchTo}
      </button>

      <div className="flex flex-col min-h-screen">
        <Navbar lang={lang} />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/electricity" element={<Electricity />} />
            <Route path="/is" element={<InformationSystems />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
