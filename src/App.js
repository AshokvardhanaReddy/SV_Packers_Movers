import "./App.css";

import Introduction from "./pages/Introduction/Introduction";
import About from "./pages/About/About";
import OurServices from "./pages/OurServices/OurServices";
import OurHistory from "./pages/OurHistory/OurHistory";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Footer from "./pages/Footer/Footer";

import Navbar from "./pages/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
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
