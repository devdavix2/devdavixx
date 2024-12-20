import React from "react";
import CourseCard from "../components/Coursecard";
const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      name: "Igbo Basics",
      description:
        "Learn the fundamentals of the Igbo language, including greetings and phrases.",
    },
    {
      id: 2,
      name: "Hausa Fundamentals",
      description:
        "Master essential Hausa vocabulary and expressions for everyday conversations.",
    },
    {
      id: 3,
      name: "Yoruba Essentials",
      description:
        "Understand Yoruba basics, including common phrases and cultural expressions.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">
          Explore Our Courses
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Choose a course and start learning Nigeria's major languages today!
        </p>
        {/* Flexbox layout to prevent duplication */}
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
