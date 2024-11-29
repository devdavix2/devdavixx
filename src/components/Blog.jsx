import React from "react";
import { Link } from "react-router-dom";
import devdavixImg from "../assets/img/blog.png"; // Ensure correct path

const Blog = () => {
  // Sample blog post data (replace this with your actual data)
  const blogPosts = [
    {
      title: "First Blog Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      date: "December 14, 2023",
    },
    {
      title: "Second Blog Post",
      content:
        "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      date: "December 15, 2023",
    },
    {
      title: "Third Blog Post",
      content:
        "Donec mattis, purus nec placerat bibendum, dui pede condimentum odio.",
      date: "December 16, 2023",
    },
    {
      title: "Fourth Blog Post",
      content:
        "Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.",
      date: "December 17, 2023",
    },
    {
      title: "Fifth Blog Post",
      content:
        "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.",
      date: "December 18, 2023",
    },
  ];

  const imageUrl = devdavixImg; // Using the specified image import

  return (
    <div id="blog" className="max-w-[1240px] mx-auto mt-20 p-6 lg:px-20">
      <div className="mb-12">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">Blog</p>
        <h2 className="py-4 text-2xl md:text-3xl font-bold">
          Get Latest Updates Here
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* First column - Single blog post */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <img
              src={imageUrl}
              alt={blogPosts[0].title}
              className="rounded-lg mb-4 w-full h-900"
            />
            <h2 className="text-2xl font-bold mb-2">{blogPosts[0].title}</h2>
            <p className="text-gray-500 mb-2">{blogPosts[0].date}</p>
            <p className="text-gray-700">{blogPosts[0].content}</p>
            <Link to="/dfits" className="block mt-2">
              <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More.....
              </button>
            </Link>
          </div>
        </div>

        {/* Second column - Four smaller blog posts */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogPosts.slice(1, 5).map((post, index) => (
            <div key={index} className="mb-4">
              <img
                src={imageUrl}
                alt={post.title}
                className="rounded-lg mb-2 w-full sm:h-40 object-cover"
              />
              <h2 className="text-lg font-bold mb-1">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
              <p className="text-gray-700">{blogPosts[0].content}</p>
              <Link to="/dfits" className="block mt-2">
                <button className="bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                  Read More.....
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
