import React from "react";

const Hero = () => {
  const handleHover = (e) => {
    e.currentTarget.classList.add("animate-bounce");
  };

  const handleHoverEnd = (e) => {
    e.currentTarget.classList.remove("animate-bounce");
  };

  return (
    <div id="home" className="w-full h-full text-center mt-5 lg:p-20 p-5 ">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
