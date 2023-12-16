import React from "react";
import devdavixImg from "../assets/img/devdavix.jpg"; 
const About = () => {
  return (
    <div
      id="about"
      className="w-full mt-20 p-6 lg:px-20 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-2xl md:text-3xl font-bold">Greetings!</h2>
          <p className="py-2 text-gray-500">
            I'm Obi Chinonso alias Devdavix, a passionate Front End Developer
            and an architect of digital experiences! HTML, CSS, Javascript and
            React are my tools in crafting immersive web wonders, where
            creativity meets functionality.
          </p>
          <p className="py-2 text-gray-500">
            My canvas isn't just lines of code; it's a boundless realm where
            pixels come alive. I engineer captivating digital spaces, redefining
            how users interact with the web.
          </p>
          <p className="py-2 text-gray-500">
            Venture with me into this realm of endless possibilities, where each
            code snippet narrates a unique story and every design element
            orchestrates its symphony!
          </p>
        </div>
        <div className="w-full h-auto shadow-lg shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src={devdavixImg}
            alt="Devdavix"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
