// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";
import { BsMouse } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <nav className="p-4 px-10 lg:mx-4 lg:mt-4 lg:rounded-md relative">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-2xl uppercase cursor-pointer">
            <Link to="/">Devdavix</Link>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="hover:text-blue-600  transition-all cursor-pointer text-white py-2 px-4"
                onClick={() => navigate("#home")}
              >
                Home
              </button>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="hover:text-blue-600  transition-all cursor-pointer text-white py-2 px-4"
                onClick={() => navigate("#about")}
              >
                About
              </button>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="hover:text-blue-600  transition-all cursor-pointer text-white py-2 px-4"
                onClick={() => navigate("#skills")}
              >
                Skills
              </button>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="hover:text-blue-600  transition-all cursor-pointer text-white py-2 px-4"
                onClick={() => navigate("#projects")}
              >
                Projects
              </button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="hover:text-blue-600  transition-all cursor-pointer text-white py-2 px-4"
                onClick={() => navigate("#contact")}
              >
                Contact
              </button>
            </Link>
          </div>

          <div
            className={`md:hidden fixed top-0 right-0 h-full bg-gray-900 p-4 ${
              isOpen ? "w-1/2" : "w-3/4"
            } rounded-tl-lg rounded-bl-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform z-50`}
          >
            <div className="flex flex-col space-y-4">
              <button
                className="text-white absolute top-4 right-4 focus:outline-none"
                onClick={toggleMenu}
              >
                <FiX />
              </button>
              <div className="text-white font-bold text-xl uppercase p-4 pt-10">
                <h1>Devdavix</h1>
              </div>
              <Link to="home" spy={true} smooth={true} duration={500}>
                <button
                  className="hover:text-'text-[#5651e5]' transition-all cursor-pointer text-white py-2 px-4"
                  onClick={() => navigate("#home")}
                >
                  Home
                </button>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className="hover:text-'text-[#5651e5]' transition-all cursor-pointer text-white py-2 px-4"
                  onClick={() => navigate("#about")}
                >
                  About
                </button>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className="hover:text-'text-[#5651e5]' transition-all cursor-pointer text-white py-2 px-4"
                  onClick={() => navigate("#skills")}
                >
                  Skills
                </button>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className="hover:text-'text-[#5651e5]' transition-all cursor-pointer text-white py-2 px-4"
                  onClick={() => navigate("#projects")}
                >
                  Projects
                </button>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className="hover:text-'text-[#5651e5]'transition-all cursor-pointer text-white py-2 px-4"
                  onClick={() => navigate("#contact")}
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>

          <button
            className="fixed bottom-6 right-28  text-white p-2 py-3 px-4 rounded-full"
            onClick={scrollToTop}
            style={{ zIndex: "9999" }}
          >
            <BsMouse size={24} />
          </button>

          {isOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black opacity-50"
              onClick={toggleMenu}
              style={{ zIndex: 40 }}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
