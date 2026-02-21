import Home from "./Pages/Home";
import About from "./Pages/About";
import Electricity from "./Pages/Electricity";
import InformationSystems from "./Pages/InformationSystems";
import Contact from "./Pages/Contact";
import ThankYou from "./Pages/ThankYou";
import Accessibility from "./Pages/Accessibility";

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
