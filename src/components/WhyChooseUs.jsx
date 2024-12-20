import React from "react";
import {
  FaChalkboardTeacher,
  FaUserFriends,
  FaLanguage,
  FaCertificate,
  FaLaptopCode,
  FaBookOpen,
  FaClock,
} from "react-icons/fa"; // Import icons
import LanguageLearningImage from "../assets/images/girllln.png"; // Adjust the path as needed

const WhyChooseUs = () => {
  return (
    <section className="mb-10 py-4 pb-16 mt-16 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        {/* Left Column - Image */}
        <div className="md:w-1/2 flex justify-center relative animate-slide-in">
          <img
            src={LanguageLearningImage}
            alt="Why Choose Us"
            className="w-full max-w-md rounded-lg"
          />

          {/* Top Card */}
          <div className="absolute -top-8 -right-4 bg-white shadow-lg rounded-lg p-3 flex items-center space-x-2  animate-pop-in">
            <FaBookOpen className="text-blue-600 text-2xl " />
            <div>
              <p className="text-sm font-semibold text-gray-700">15+ Courses</p>
              <p className="text-xs text-gray-500">From basics to advanced</p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-3 flex items-center space-x-2  animate-pop-in">
            <FaClock className="text-blue-600 text-2x " />
            <div>
              <p className="text-sm font-semibold text-gray-700">24/7 Access</p>
              <p className="text-xs text-gray-500">Learn anytime, anywhere</p>
            </div>
          </div>
        </div>

        {/* Right Column - Features */}
        <div className="md:w-1/2 mt-12 md:mt-0 md:pl-10">
          <h2 className="text-3xl md:4xl font-bold text-blue-800 mb-6">
            Why Choose Us
          </h2>
          <ul className="space-y-4">
            {/* Feature 1 */}
            <li className="flex items-center space-x-4">
              <FaChalkboardTeacher className="text-blue-600 text-8xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Expert Tutors
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn from experienced language professionals who guide you
                  every step of the way.
                </p>
              </div>
            </li>

            {/* Feature 2 */}
            <li className="flex items-center space-x-4">
              <FaUserFriends className="text-blue-600 text-8xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Community Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Join a vibrant community of learners and share experiences,
                  challenges, and progress.
                </p>
              </div>
            </li>

            {/* Feature 3 */}
            <li className="flex items-center space-x-4">
              <FaLanguage className="text-blue-600 text-8xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Cultural Insights
                </h3>
                <p className="text-gray-600 text-sm">
                  Immerse yourself in the culture with lessons that go beyond
                  just words and phrases.
                </p>
              </div>
            </li>

            {/* Feature 4 */}
            <li className="flex items-center space-x-4">
              <FaCertificate className="text-blue-600 text-8xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Certified Courses
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive a certificate upon course completion to showcase your
                  language proficiency.
                </p>
              </div>
            </li>

            {/* Feature 5 */}
            <li className="flex items-center space-x-4">
              <FaLaptopCode className="text-blue-600 text-8xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Flexible Learning
                </h3>
                <p className="text-gray-600 text-sm">
                  Access courses on any device, anytime, at your own pace.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
