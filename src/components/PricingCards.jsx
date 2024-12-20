import React from "react";

const PricingCards = () => {
  const pricingPlans = [
    {
      name: "Free Plan",
      price: "₦0/month",
      features: [
        "Access to basic lessons",
        "Igbo, Hausa, Yoruba introductions",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-gray-500 hover:bg-gray-600",
    },
    {
      name: "Basic Plan",
      price: "₦2,000/month",
      features: [
        "Full access to basic lessons",
        "Progress tracking",
        "Downloadable PDFs",
      ],
      buttonText: "Choose Basic",
      buttonStyle: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Premium Plan",
      price: "₦5,000/month",
      features: [
        "Full access to all lessons",
        "Live sessions",
        "Certificate of completion",
      ],
      buttonText: "Choose Premium",
      buttonStyle: "bg-green-500 hover:bg-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform transform hover:scale-105">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
          <p className="text-4xl font-bold text-center mb-4">{plan.price}</p>
          <ul className="mb-6 text-gray-600">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center mb-2">
                <span className="mr-2">✅</span> {feature}
              </li>
            ))}
          </ul>
          <button
            className={`w-full text-white py-2 rounded ${plan.buttonStyle}`}
          >
            {plan.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
