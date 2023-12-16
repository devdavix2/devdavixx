import React from "react";

import { FaSquareXTwitter } from "react-icons/fa6";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import devdavixImg from "../assets/img/contact.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full  p-5  mb-10 lg:px-20 flex items-center "
    >
      <div className="w-full  md:grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="uppercase text-xl mb-10 tracking-widest text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4 text-2xl md:text-3xl font-bold">
            Have any Questions ?
          </h2>
          <div className="lg:w-auto p-5 flex flex-col">
            <div>
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg">
                I'm excited to hear from you! Whether you have questions or want
                to discuss a project, feel free to reach out.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <a
                href="https://twitter.com/devdavix"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5651e5] transition-colors duration-300 flex items-center mt-4 lg:mt-0"
              >
                <FaSquareXTwitter className="text-4xl mr-2" />
                <span>@devdavix</span>
              </a>
              <a
                href="tel:+2347063583581"
                className="hover:text-[#5651e5] transition-colors duration-300 flex items-center mt-4 lg:mt-0"
              >
                <BsFillPersonLinesFill className="text-4xl mr-2" />
                <span>+2347063583581</span>
              </a>
              <a
                href="mailto:devdavixx@gmail.com"
                className="hover:text-[#5651e5] transition-colors duration-300 flex items-center mt-4 lg:mt-0"
              >
                <AiOutlineMail className="text-4xl mr-2" />
                <span>devdavixx@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-1 shadow-lg mt-10 rounded-xl flex items-center justify-center  hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src={devdavixImg} alt="Devdavix" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
