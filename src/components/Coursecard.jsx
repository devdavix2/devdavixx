import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ id, name, description, img }) => {
  return (
    <div className="w-full sm:w-64 border rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 bg-white">
      {/* Display the image */}
      <img
        src={img}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold mb-4 text-blue-800">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/course-detail/${id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          View Course
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
