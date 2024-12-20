import React, { useEffect } from "react";
import CourseCard from "./Coursecard";
import { Link } from "react-router-dom";

// Import images if they are located in the src folder
import herrorImage from "../assets/images/herror.jpeg";
import defaultImage from "../assets/images/herror.jpeg";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      name: "Igbo Basics",
      description:
        "Learn the fundamentals of the Igbo language, including greetings and phrases.",
      src: herrorImage,
    },
    {
      id: 2,
      name: "Hausa Basics",
      description:
        "Master essential Hausa vocabulary and expressions for everyday conversations.",
      src: defaultImage, // Fallback image
    },
    {
      id: 3,
      name: "Yoruba Basics",
      description:
        "Understand Yoruba basics, including common phrases and cultural expressions.",
      src: defaultImage, // Fallback image
    },
    {
      id: 4,
      name: "Igbo Essentials",
      description:
        "Master essential Hausa vocabulary and expressions for everyday conversations.",
      src: defaultImage, // Fallback image
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".course-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="courses">
      <div className="container mx-auto py-10">
        <h2 className="text-3xl md:4xl font-bold mb-8 text-blue-800">
          Most Popular Courses
        </h2>
        <p className="text-gray-600 mb-12">
          Choose a course and start learning Nigeria's major languages today!
        </p>
        {/* Flexbox layout to prevent duplication */}
        <div className="flex flex-wrap gap-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card opacity-0" // Initial state hidden
            >
              <CourseCard
                id={course.id}
                name={course.name}
                description={course.description}
                img={course.src}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Centered Button */}
      <div className="flex justify-center items-center mt-8">
        <Link to="/courses">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoursesPage;
