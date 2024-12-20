import React from "react";
import {
  FaBookOpen,
  FaClock,
  FaGlobe,
  FaStar,
  FaHandsHelping,
} from "react-icons/fa"; // Import additional icons
import LanguageLearningImage from "../assets/images/aboutll.jpeg"; // Adjust the path as needed

const About = () => {
  return (
    <section id="about" className="-mb-5 py-4 pb-16 mt-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        {/* Left Column - Text */}
        <div className="md:w-1/2  md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl md:4xl font-bold text-blue-800 mb-10">
            About Lingua
          </h2>
          <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
            Welcome to{" "}
            <span className="text-blue-600 font-semibold">Lingua</span>, the
            ultimate platform for learning Nigeria’s major languages—Igbo,
            Yoruba, and Hausa. Whether you're a language enthusiast, a traveler,
            or someone looking to reconnect with your roots, Lingua offers a
            unique learning experience that blends culture and language.
          </p>
          <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
            Our platform provides a rich library of{" "}
            <span className="font-semibold text-blue-600">
              interactive courses
            </span>
            , expert-guided lessons, and cultural tips to help you become fluent
            in no time. From understanding everyday greetings to exploring
            traditional proverbs and idioms, Lingua ensures a holistic language
            learning journey.
          </p>
          <p className="text-gray-700 max-w-md leading-relaxed">
            With features like progress tracking, 24/7 access, and a supportive
            community, Lingua makes learning engaging, flexible, and fun. Join
            thousands of learners worldwide and unlock the beauty of Nigeria's
            languages today!
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0 relative">
          <img
            src={LanguageLearningImage}
            alt="Language Learning"
            className="w-full max-w-md rounded-lg "
          />

          {/* Top-Left Small Card */}
          <div className="absolute  top-16 right-4 bg-white shadow-lg rounded-lg p-3 hidden md:flex items-center space-x-2">
            <FaBookOpen className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700">15+ Courses</p>
              <p className="text-xs text-gray-500">From basics to advanced</p>
            </div>
          </div>

          {/* Bottom-Right Small Card */}
          <div className="absolute  bg-white shadow-lg rounded-lg p-2 -top-4 -right-6 w-50 md:left-4 md:w-40  items-center space-x-2">
            <FaClock className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700">24/7 Access</p>
              <p className="text-xs text-gray-500">Learn anytime, anywhere</p>
            </div>
          </div>

          {/* Bottom-Left Small Card */}
          <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-3  hidden md:flex  items-center space-x-2">
            <FaGlobe className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Global Community
              </p>
              <p className="text-xs text-gray-500">Join learners worldwide</p>
            </div>
          </div>

          {/* New Top-Right Small Card */}
          <div className="absolute  -bottom-4 -left-6 w-45 md:right-20 md:w-60 bg-white shadow-lg rounded-lg p-3 flex items-center space-x-2">
            <FaStar className="text-yellow-500 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Expert Tutors
              </p>
              <p className="text-xs text-gray-500">Learn from the best</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
