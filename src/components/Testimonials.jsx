import React from "react";
import Avatar1 from "../assets/images/face1.jpeg"; // Example avatars
import Avatar2 from "../assets/images/face2.jpeg";
import Avatar3 from "../assets/images/face3.jpeg";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      avatar: Avatar1,
      name: "Chukwuemeka Okafor",
      title: "Language Enthusiast",
      quote:
        "Lingua has been a game-changer for me. I never thought learning Igbo could be this fun and interactive. The cultural insights are amazing!",
      rating: 5,
    },
    {
      id: 2,
      avatar: Avatar2,
      name: "Aisha Bello",
      title: "Traveler",
      quote:
        "As someone who travels across Nigeria, Lingua helped me connect with locals on a deeper level. The Yoruba lessons are top-notch!",
      rating: 4,
    },
    {
      id: 3,
      avatar: Avatar3,
      name: "Tunde Olawale",
      title: "Student",
      quote:
        "I struggled with learning Hausa until I discovered Lingua. The progress tracking and expert tutors made all the difference.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:4xl font-bold text-blue-800 text-center mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto md:mx-0 transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <div className="relative text-gray-600 text-sm leading-relaxed">
                <FaQuoteLeft className="absolute -top-3 -left-3 text-blue-400 text-lg" />
                <p className="px-4">{testimonial.quote}</p>
                <FaQuoteRight className="absolute -bottom-3 -right-3 text-blue-400 text-lg" />
              </div>
              <div className="flex items-center justify-start mt-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-500 text-sm mr-1"
                  />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-gray-300 text-sm mr-1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
