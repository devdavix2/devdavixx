import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Lingua?",
      answer:
        "Lingua is an online platform designed to help you learn Nigeria’s major languages—Igbo, Yoruba, and Hausa. It offers interactive lessons, cultural insights, and progress tracking.",
    },
    {
      question: "Is Lingua free to use?",
      answer:
        "Lingua offers a Basic Plan that is completely free, but for advanced features like 1-on-1 tutoring and offline downloads, you can subscribe to our Pro or Premium plans.",
    },
    {
      question: "Can I access Lingua on mobile?",
      answer:
        "Yes, Lingua is mobile-friendly and can be accessed on any device with an internet connection. You can also download content with our Premium Plan.",
    },
    {
      question: "How do I track my learning progress?",
      answer:
        "Lingua provides built-in progress tracking tools that monitor your completed lessons, quizzes, and overall fluency levels.",
    },
    {
      question: "Are there live tutoring sessions available?",
      answer:
        "Yes, live tutoring sessions are available with our Premium Plan. You can schedule sessions with expert tutors for personalized learning.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="Faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:4xl font-bold text-blue-800 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center bg-white px-6 py-4 text-left text-gray-800 font-semibold focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="bg-gray-100 px-6 py-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
