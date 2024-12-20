import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaClock, FaGlobe } from "react-icons/fa"; // Import icons
import LanguageLearningImage from "../assets/images/lln.png"; // Adjust the path as needed
import Avatar1 from "../assets/images/face1.jpeg"; // Example avatars
import Avatar2 from "../assets/images/face2.jpeg";
import Avatar3 from "../assets/images/face3.jpeg";

const Hero = () => {
  return (
    <section className="-mt-8 py-4 pb-16  ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        {/* Left Column - Text */}
        <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            Learn Igbo, Hausa, and Yoruba
          </h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Connect with Nigeria's rich cultural heritage by mastering its major
            languages. Start learning at your own pace and unlock premium
            content for advanced lessons.
          </p>
          <div className=" flex flex-col space-y-4 md:flex-row md:space-y-0  ">
            <Link to="/courses">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-transform transform hover:scale-105 mx-2">
                Start Learning for Free
              </button>
            </Link>
            <Link to="/pricing">
              <button className="bg-gray-200 text-blue-800 px-6 py-3 rounded hover:bg-gray-300 transition-transform transform hover:scale-105 mx-2">
                Explore Premium Plans
              </button>
            </Link>
          </div>

          {/* Ratings and Learner Count */}
          <div className="mt-8 flex flex-col space-y-4 md:space-y-0 items-center md:flex-row mx-12 md:mx-0 space-x-6">
            {/* Overlapping User Images */}
            <div className="flex -space-x-4">
              <img
                src={Avatar1}
                alt="User 1"
                className="w-12 h-12 rounded-full border-2 border-white hover:scale-110 transition-transform"
              />
              <img
                src={Avatar2}
                alt="User 2"
                className="w-12 h-12 rounded-full border-2 border-white hover:scale-110 transition-transform"
              />
              <img
                src={Avatar3}
                alt="User 3"
                className="w-12 h-12 rounded-full border-2 border-white hover:scale-110 transition-transform"
              />
            </div>
            {/* Ratings */}
            <div>
              <p className="text-gray-700 font-semibold">
                <span className="text-yellow-500 font-bold">4.8</span>/5.0
                Rating
              </p>
              <p className="text-sm text-gray-500">
                Trusted by 10,000+ learners
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0 relative animate-slide-in">
          <img
            src={LanguageLearningImage}
            alt="Language Learning"
            className="w-full max-w-md rounded-lg"
          />

          {/* Top-Left Small Card */}
          <div className="absolute top-4 -right-6 w-45 md:left-4 md:w-60    bg-white shadow-lg rounded-lg p-3 flex items-center space-x-2 animate-pop-in">
            <FaBookOpen className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700">10+ Courses</p>
              <p className="text-xs text-gray-500  ">Learn at your own pace</p>
            </div>
          </div>

          {/* Bottom-Right Small Card */}
          <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-3  items-center space-x-2 animate-pop-in  md:flex hidden">
            <FaClock className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700  ">
                24/7 Access
              </p>
              <p className="text-xs text-gray-500 ">Learn anytime, anywhere</p>
            </div>
          </div>

          {/* Bottom-Left Small Card */}
          <div className="absolute -bottom-8 -left-6 w-45 md:left-4 md:w-60  bg-white shadow-lg rounded-lg p-3 flex items-center space-x-2 animate-pop-in">
            <FaGlobe className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Global Community
              </p>
              <p className="text-xs text-gray-500">Join learners worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
