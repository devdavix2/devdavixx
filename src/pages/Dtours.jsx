import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import dtourImage from "../assets/images/dtours.png";
import dtour1 from "../assets/images/dtour1.png";
import dtour2 from "../assets/images/dtour2.png";
import { FaWindowClose } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Adds smooth scrolling behavior
  });
};

const Dtours = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className="hero-section relative">
          <img
            src={dtourImage}
            alt="Project Hero"
            className="w-full object-cover h-full opacity-30 filter brightness-50"
            style={{ maxHeight: "500px" }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 ">
              Dtours - Travel Agency
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4  text-blue-700 ">
            About
          </h1>
          <p className="text-lg text-gray-300">
            Dtour, a Travel Agency Showcase, embodies my design and React
            development skills in another dimension. This personal project
            within my portfolio is a testament to my ability to craft
            captivating user interfaces and immersive experiences. With stunning
            layouts and a seamless React framework, Dtour presents an engaging
            platform for travel enthusiasts. From dynamic destination displays
            to user-friendly functionalities, this project exemplifies my
            expertise in creating visually compelling and responsive web designs
            tailored for the travel industry.
          </p>

          <div className="my-8">
            <h3 className="text-3xl font-semibold mb-5">Tech Stack</h3>
            <p>
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind</li>
            </p>
          </div>

          <h3 className="text-3xl font-semibold mb-10"> Project Images </h3>
          <div className="grid grid-cols-1 mb-4 gap-4">
            <img
              src={dtourImage}
              alt="DTour Homepage"
              className="w-full h-auto"
              onClick={() => openModal(dtourImage)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={dtour1}
              alt="dtour1"
              className="w-full h-auto"
              onClick={() => openModal(dtour1)}
            />
            <img
              src={dtour2}
              alt="dtour2"
              className="w-full h-auto"
              onClick={() => openModal(dtour2)}
            />
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Image Modal"
            className="fixed inset-0 flex items-center height-600 width-400 p-20  justify-center bg-black bg-opacity-85"
          >
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Project Image"
                className="max-w-full max-h-full"
                style={{ maxHeight: "70vh", maxWidth: "70vw" }}
              />
            )}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-10 text-white"
            >
              <FaWindowClose size={40} />
            </button>
          </Modal>

          <div className="flex flex-col mt-10 md:flex-row justify-around my-8">
            <div
              onClick={() =>
                window.open("https://github.com/devdavix2/dtour", "_blank")
              }
              className="btn-primary mb-4 md:mb-0 cursor-pointer"
            >
              <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                View Source Code
              </button>
            </div>

            <div
              onClick={() => window.open("https://dtour.vercel.app/", "_blank")}
              className="btn-primary cursor-pointer"
            >
              <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                View Project Demo
              </button>
            </div>
          </div>
        </div>

        <div className="text-center py-8" onClick={scrollToTop}>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dtours;
