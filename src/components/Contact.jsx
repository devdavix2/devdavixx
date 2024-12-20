import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className=" py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl  md:4xl font-bold text-blue-800 text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:3xl font-bold text-blue-800 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Have questions, feedback, or need assistance? We’re here to
                help! Reach out to us through any of the methods below.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                  <p className="text-gray-700 text-sm">
                    Email:{" "}
                    <a
                      href="mailto:support@lingua.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@lingua.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-blue-600 text-2xl" />
                  <p className="text-gray-700 text-sm">
                    Phone: +234 800 123 4567
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                  <p className="text-gray-700 text-sm">
                    Address: 123 Language Lane, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Follow Us:
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition text-2xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:3xl font-bold text-blue-800 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
