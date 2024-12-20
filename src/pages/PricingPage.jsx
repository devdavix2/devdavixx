import React from "react";
import Header from "../components/Header";
import PricingCards from "../components/PricingCards";

const PricingPage = () => {
  return (
    <div>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Your Plan
        </h2>
        <PricingCards />
      </div>
    </div>
  );
};

export default PricingPage;
