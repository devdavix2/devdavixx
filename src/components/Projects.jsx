import React from "react";
import { Link } from "react-router-dom";
import dfitsImage from "../assets/images/dfits.png";
import dtourImage from "../assets/images/dtours.png";
import havenImage from "../assets/images/haven.png";
import pawmatchImage from "../assets/images/pawmatch.png";
import dfoodsImage from "../assets/images/devdavix.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full mt-5 p-6 lg:px-20 flex items-center py-16"
    >
      <div className="max-w-[1240px] mx-auto flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-2xl md:text-3xl font-bold">
          {" "}
          Explore my project{" "}
        </h2>
        <div className="p-2 lg:p-20 lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="flex flex-col justify-center shadow-lg shadow-gray-800  items-center mb-4 p-4 rounded-md lg:col-span-1 lg:gap-4">
            <div className="mb-2 flex justify-center">
              <img src={dfitsImage} alt="Dfits" className="h-40" />
            </div>
            <div className="text-start">
              <h3>Dfits - Fitness Agency </h3>
              <Link to="/dfits" className="block mt-2" onClick={scrollToTop}>
                <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                  More Info...
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center shadow-lg shadow-gray-800  items-center mb-4 p-4 rounded-md lg:col-span-1 lg:gap-4">
            <div className="mb-2 flex justify-center">
              <img src={dtourImage} alt="Dtour" className="h-40" />
            </div>
            <div className="text-start">
              <h3>Dtour - Travel Agency </h3>

              <Link to="/dtours" className="block mt-2" onClick={scrollToTop}>
                <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                  More Info...
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center shadow-lg shadow-gray-800  items-center mb-4 p-4 rounded-md lg:col-span-1 lg:gap-4">
            <div className="mb-2 flex justify-center">
              <img src={pawmatchImage} alt="Dtour" className="h-40" />
            </div>
            <div className="text-start">
              <h3> Pawmatch - Pet Adoption Platform </h3>

              <Link to="/pawmatch" className="block mt-2" onClick={scrollToTop}>
                <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                  More Info...
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center shadow-lg shadow-gray-800  items-center mb-4 p-4 rounded-md lg:col-span-1 lg:gap-4">
            <div className="mb-2 flex justify-center">
              <img src={havenImage} alt="Dtour" className="h-40" />
            </div>
            <div className="text-start">
              <h3> Haven - Real Estate Agency </h3>

              <Link to="/haven" className="block mt-2" onClick={scrollToTop}>
                <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                  More Info...
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center shadow-lg shadow-gray-800  items-center mb-4 p-4 rounded-md lg:col-span-1 lg:gap-4">
            <div className="mb-2 flex justify-center">
              <img src={dfoodsImage} alt="Dfoods" className="h-40" />
            </div>
            <div className="text-start">
              <h3>Devdavix - Portfolio Website </h3>

              <Link to="/devdavix" className="block mt-2" onClick={scrollToTop}>
                <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                  More Info...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
