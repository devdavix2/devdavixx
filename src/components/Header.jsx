import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          LearnNaija
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-blue-600 transition duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-blue-600 transition duration-300"
              >
                Courses
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login / Sign Up Button */}
        <Link to="/login" className="ml-auto">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Login / Sign Up
          </button>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-blue-600 focus:outline-none  ml-4"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white shadow-md`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
