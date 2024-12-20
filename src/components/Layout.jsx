import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const navigate = (id) => {
  console.log(`Navigate to: ${id}`);
  setIsOpen(false);
  scroll.scrollTo(id, {
    smooth: true,
    offset: -70,
    duration: 500,
  });
};

const scrollToTop = () => {
  scroll.scrollToTop({
    smooth: true,
    duration: 500,
  });
};

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="text-black p-4 mb-4 mx-2 md:mx-12 sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <Link to="/">Lingua</Link>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#about")}>About</button>
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#courses")}>Courses</button>
                </Link>
              </li>

              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#testimonials")}>
                    Testimonials
                  </button>
                </Link>
              </li>

              <li>
                <Link
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#pricing")}>Pricing</button>
                </Link>
              </li>
              <li>
                <Link
                  to="Faqs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#Faqs")}>FAQs</button>
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#contact")}>Contact</button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login Button */}
          <div className="hidden space-x-4 md:block">
            <Link to="/login">
              <button className="bg-blue-600  text-white px-4 py-1 rounded hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </Link>

            <Link to="/login">
              <button className="bg-gray-200 text-blue-800  px-4 py-1 rounded transition duration-300">
                Signup
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
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
      </header>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="fixed top-16 left-0 w-full bg-blue-100 bg-opacity-70 backdrop-blur-md shadow-md z-40">
          <div className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#about")}>About</button>
                </Link>
              </li>

              <li>
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#courses")}>Courses</button>
                </Link>
              </li>

              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#testimonials")}>
                    Testimonials
                  </button>
                </Link>
              </li>

              <li>
                <Link
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#pricing")}>Pricing</button>
                </Link>
              </li>
              <li>
                <Link
                  to="Faqs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#Faqs")}>FAQs</button>
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:underline"
                >
                  <button onClick={() => navigate("#contact")}>Contact</button>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <button className="bg-blue-600  text-white px-4 py-1 rounded hover:bg-blue-700 transition duration-300">
                    Login
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <button className="bg-gray-200 text-blue-800  px-4 py-1 rounded transition duration-300">
                    Signup
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>
          &copy; 2024 Lingua. All rights reserved. | Developed by{" "}
          <a
            href="https://github.com/devdavix"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            devdavix
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
