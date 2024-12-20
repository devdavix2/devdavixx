import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "Free",
      features: [
        "Access to beginner lessons",
        "Limited cultural tips",
        "Basic progress tracking",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "$19.99/month",
      features: [
        "Access to all lessons",
        "In-depth cultural insights",
        "Advanced progress tracking",
        "Community support",
      ],
      buttonText: "Choose Pro",
      popular: true,
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$49.99/month",
      features: [
        "Everything in Pro Plan",
        "1-on-1 tutor sessions",
        "Offline downloads",
        "Exclusive content",
      ],
      buttonText: "Go Premium",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4  ">
        <h2 className="text-3xl md:4xl font-bold text-blue-800 text-center mb-12 ">
          Choose Your Plan
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 transition-transform transform hover:scale-105">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${
                plan.popular
                  ? "border-4 border-blue-600 bg-white shadow-xl"
                  : "bg-white shadow-lg"
              } rounded-lg p-6 max-w-sm mx-auto md:mx-0 relative`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs uppercase font-bold px-3 py-1 rounded-bl-lg transition-transform transform hover:scale-105 ">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-blue-600 text-center mb-6">
                {plan.price}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-sm flex items-center mb-2"
                  >
                    <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center transition-transform transform hover:scale-105">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
