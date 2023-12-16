import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import devdavix from "../assets/images/devdavix.png";
import devdavix1 from "../assets/images/devdavix1.png";
import devdavix2 from "../assets/images/devdavix2.png";
import { FaWindowClose } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Adds smooth scrolling behavior
  });
};

const Devdavix = () => {
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
            src={devdavix}
            alt="Project Hero"
            className="w-full object-cover h-full opacity-30 filter brightness-50"
            style={{ maxHeight: "500px" }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 ">
              Devdavix - Portfolio Website
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4  text-blue-700 ">
            About
          </h1>
          <p className="text-lg text-gray-300">
            Devdavix - Personal Portfolio: This project is the heart of my
            professional identity, a carefully crafted showcase that
            encapsulates my skills, experiences, and accomplishments. Built with
            precision using React, this portfolio is more than a collection of
            projects; it's a testament to my expertise in web development and
            design. Through intuitive navigation and captivating visuals, it
            offers a glimpse into my capabilities and passions. It's not just a
            portfolio; it's a reflection of my dedication and commitment to
            excellence in my field.
          </p>

          <div className="my-8">
            <h3 className="text-3xl font-semibold mb-5">Tech Stack</h3>
            <p>
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind Css</li>
            </p>
          </div>

          <h3 className="text-3xl font-semibold mb-10"> Project Images </h3>
          <div className="grid grid-cols-1 mb-4 gap-4">
            <img
              src={devdavix}
              alt="DTour Homepage"
              className="w-full h-auto"
              onClick={() => openModal(devdavix)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={devdavix1}
              alt="DTour Homepage"
              className="w-full h-auto"
              onClick={() => openModal(devdavix1)}
            />
            <img
              src={devdavix2}
              alt="DTour Services"
              className="w-full h-auto"
              onClick={() => openModal(devdavix2)}
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
            <Link
              to={{ pathname: "https://github.com/yourusername/dtour" }}
              className="btn-primary mb-4 md:mb-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                View Source Code
              </button>
            </Link>
            <Link
              to={{ pathname: "https://dtour-demo.com" }}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                View Project Demo
              </button>
            </Link>
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

export default Devdavix;
