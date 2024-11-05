import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';


import Introduction from "./pages/Introduction/Introduction";
import About from "./pages/About/About";
import OurServices from "./pages/OurServices/OurServices";
import OurHistory from "./pages/OurHistory/OurHistory";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Footer from "./pages/Footer/Footer";

import Navbar from "./pages/Navbar/Navbar";



function App() {

  const location = useLocation();

  useEffect(() => {
    // Send page view with the current URL
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<></>} />
        <Route path="/services" element={<></>} />
        <Route path="/history" element={<></>} />
        <Route path="/services" element={<></>} />
        <Route path="/how-it-works" element={<></>} />
        <Route path="/contact" element={<></>} />
      </Routes>

      <Introduction />
      <About />
      <OurServices />
      <OurHistory />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
