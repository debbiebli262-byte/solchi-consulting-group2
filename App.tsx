import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Electricity from "./Pages/Electricity";
import InformationSystems from "./Pages/InformationSystems";
import Contact from "./Pages/Contact";
import ThankYou from "./Pages/ThankYou";
import Accessibility from "./Pages/Accessibility";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Navbar />
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
    </HashRouter>
  );
};

export default App;
