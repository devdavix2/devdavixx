import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import FaqSection from "../components/FaqSection";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <PricingPlans />
      <FaqSection />
      <Contact />
    </div>
  );
};

export default HomePage;
