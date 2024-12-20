import React, { useEffect, useRef, useState } from "react";
import { FaBookOpen, FaClock, FaGlobe, FaTasks } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";

const Features = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="-mt-2 md:flex hidden space-x-4 mx-24 py-4 pb-16"
    >
      <div
        className={`container md:space-x-24 mx-auto px-4 flex flex-row md:flex-row items-center relative transition-opacity duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="p-3 flex items-center space-x-2 animate-fade-in">
          <FaGlobe className="text-blue-400 text-2xl" />
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Global Community
            </p>
          </div>
        </div>

        <div className="p-3 flex items-center space-x-2 animate-slide-in">
          <FaClock className="text-green-400 text-2xl" />
          <div>
            <p className="text-sm font-semibold text-gray-700">24/7 Access</p>
          </div>
        </div>

        <div className="p-3 flex items-center space-x-2 animate-pop-in">
          <FaUserCheck className="text-teal-400 text-2xl" />
          <div>
            <p className="text-sm font-semibold text-gray-700">Expert Tutors</p>
          </div>
        </div>

        <div className="p-3 flex items-center space-x-2 animate-fade-in">
          <FaTasks className="text-orange-400 text-2xl" />
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Smart Progress Tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
