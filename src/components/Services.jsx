import React from "react";
import { FiMonitor, FiCode, FiLayout, FiGlobe } from "react-icons/fi";
import { GiFastArrow } from "react-icons/gi";
import { BsUniversalAccessCircle } from "react-icons/bs";

const Services = () => {
  return (
    <div id="services" className="w-full mt-20 p-4 lg:px-20 flex  py-16">
      <div className="max-w-[1240px] m-auto">
        <div className="text-center mb-8">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:p-auto   gap-8">
          <ServiceItem
            icon={<FiMonitor size={40} className="text-blue-500 mb-2" />}
            title="Responsive Web Design"
            description="Crafting visually appealing and user-friendly websites that adapt seamlessly across various devices and screen sizes."
          />
          <ServiceItem
            icon={<GiFastArrow size={40} className="text-blue-500 mb-2" />}
            title="Performance Optimization"
            description="Enhancing website speed and performance through efficient coding practices and optimization techniques."
          />
          <ServiceItem
            icon={<FiCode size={40} className="text-blue-500 mb-2" />}
            title="Front-end Frameworks"
            description="Expertise in utilizing frameworks like React to build interactive and dynamic user interfaces, enhancing user experiences."
          />
        </div>

        <div className="grid grid-cols-1 mb-5  md:grid-cols-3 lg:p-auto  gap-8">
          <ServiceItem
            icon={<FiLayout size={40} className="text-blue-500 mb-2" />}
            title="UI/UX Design"
            description="Creating intuitive and engaging user interfaces with a focus on user experience and aesthetics."
          />

          <ServiceItem
            icon={<FiGlobe size={40} className="text-blue-500 mb-2" />}
            title="Cross-browser Compatibility"
            description="Ensuring seamless functionality and appearance of websites across different browsers and platforms."
          />

          <ServiceItem
            icon={
              <BsUniversalAccessCircle
                size={40}
                className="text-blue-500 mb-2"
              />
            }
            title="Web Accessibility"
            description="Implementing accessibility standards to make websites usable for everyone, including individuals with disabilities."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="w-auto h-auto shadow-lg shadow-gray-800 rounded-xl flex flex-col  justify-center m-4  p-4 hover:scale-105 ease-in duration-300">
      <div>{icon}</div>
      <h3 className="text-xl font-bold py-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Services;
