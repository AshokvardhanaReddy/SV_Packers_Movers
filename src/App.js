import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect, lazy, Suspense } from "react";

import { Loading } from "./components/Loading/Loading";

import Navbar from "./pages/Navbar/Navbar";

const LazyIntroduction = lazy(() =>
  import("./pages/Introduction/Introduction")
);
const LazyAbout = lazy(() => import("./pages/About/About"));
const LazyOurServices = lazy(() => import("./pages/OurServices/OurServices"));
const LazyOurHistory = lazy(() => import("./pages/OurHistory/OurHistory"));
const LazyHowItWorks = lazy(() => import("./pages/HowItWorks/HowItWorks"));
const LazyFooter = lazy(() => import("./pages/Footer/Footer"));

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
      <Suspense fallback={<Loading />}>
        <LazyIntroduction />
        <LazyAbout />
        <LazyOurServices />
        <LazyOurHistory />
        <LazyHowItWorks />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default App;
