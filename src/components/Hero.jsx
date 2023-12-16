import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const handleHover = (e) => {
    e.currentTarget.classList.add("animate-bounce");
  };

  const handleHoverEnd = (e) => {
    e.currentTarget.classList.remove("animate-bounce");
  };

  return (
    <div id="home" className="w-full h-auto text-center mt-10 ">
      <div className=" w-full h-full mx-auto  flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-200">
            Have questions for <span className="text-[#5651e5]">Devdavix</span>?
          </h1>
          <h1 className="py-2 text-gray-200">Let's Explore Together!</h1>
          <p className="py-4 text-gray-300 max-w-[70%] m-auto">
            Curious about Front-End Development or need assistance with your
            project? I'm here to help you decode complexities and transform
            ideas into captivating digital solutions.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer transform hover:scale-110 ease-in duration-300"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <a
                href="https://github.com/devdavix2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer transform hover:scale-110 ease-in duration-300"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <a href="tel:+2347063583581">
                <BsFillPersonLinesFill />
              </a>
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer transform hover:scale-110 ease-in duration-300"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <a href="mailto:obichinoso2@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
