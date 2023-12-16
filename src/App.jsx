import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Dtours from "./pages/Dtours";
import Devdavix from "./pages/Devdavix";
import Dfits from "./pages/Dfits";
import Contact from "./components/Contact";
import Services from "./components/Services";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/dtours" element={<Dtours />} />
          <Route path="/devdavix" element={<Devdavix />} />
          <Route path="/dfits" element={<Dfits />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      {/* Other components render directly without routes */}
    </>
  );
}
