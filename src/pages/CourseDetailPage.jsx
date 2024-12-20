import React from "react";
import { useParams, Link } from "react-router-dom";

const CourseDetailPage = () => {
  // Get course ID from the URL
  const { id } = useParams();

  // Example course data for demonstration
  const courseData = {
    1: {
      title: "Igbo Basics",
      description:
        "Learn the fundamentals of the Igbo language, including common phrases, greetings, and vocabulary.",
      lessons: [
        "Lesson 1: Greetings and Introductions",
        "Lesson 2: Common Phrases",
        "Lesson 3: Numbers and Counting",
      ],
    },
    2: {
      title: "Hausa Essentials",
      description:
        "Explore the Hausa language with practical lessons on greetings, phrases, and numbers.",
      lessons: [
        "Lesson 1: Basic Greetings",
        "Lesson 2: Asking Questions",
        "Lesson 3: Days and Time",
      ],
    },
    3: {
      title: "Yoruba Fundamentals",
      description:
        "Master Yoruba basics with lessons on common words, phrases, and cultural introductions.",
      lessons: [
        "Lesson 1: Simple Greetings",
        "Lesson 2: Family and Relationships",
        "Lesson 3: Food and Dining",
      ],
    },
  };

  // Get course details based on the ID or show a fallback
  const course = courseData[id] || {
    title: "Course Not Found",
    description: "Sorry, the course you are looking for does not exist.",
    lessons: [],
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <nav className="text-gray-500 py-4 px-6">
        <ol className="list-reset flex">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/courses" className="text-blue-500 hover:text-blue-700">
              Courses
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700">{course.title}</li>
        </ol>
      </nav>

      {/* Course Details */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
        <p className="text-gray-600 mb-8">{course.description}</p>
        {course.lessons.length > 0 ? (
          <div className="bg-blue-50 p-6 rounded">
            <h3 className="text-2xl font-bold mb-4">Course Content</h3>
            <ul className="list-disc list-inside text-gray-700">
              {course.lessons.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-red-500">No lessons available for this course.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;
