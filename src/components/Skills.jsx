import React from "react";
import HtmlImg from "../assets/skills/html.png";
import CssImg from "../assets/skills/css.png";
import JavaScriptImg from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/react.png";
import GithubImg from "../assets/skills/github1.png";
import TailwindImg from "../assets/skills/tailwind.png";
import MongoDBImg from "../assets/skills/mongo.png";
import FirebaseImg from "../assets/skills/firebase.png";

const Skills = () => {
  return (
    <div
      id="skills"
      div
      className="w-full mt-5 p-5 lg:px-20 flex items-center py-16"
    >
      <div className="w-full p-10 mx-auto flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-2xl md:text-3xl font-bold"> My Tech Stack </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={HtmlImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={CssImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={JavaScriptImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={ReactImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={GithubImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={TailwindImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={MongoDBImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>Monogo DB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-185 ease-inn duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="rounded-xl"
                  src={FirebaseImg}
                  alt="Devdavix"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-cneter justify-center">
                <h3>Firebase </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
