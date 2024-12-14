"use client";
import Image from "next/image";
import React from "react";
const skillImages = {
  frontend: [
    { title: "HTML", src: "/img/HTML5_Badge.svg" },
    { title: "CSS", src: "/img/Official_CSS_Logo.svg" },
    { title: "JavaScript", src: "/img/javascript-1.svg" },
    { title: "React", src: "/img/React-icon.svg" },
    { title: "Next.js", src: "/img/next-js.svg" },
    { title: "Tailwind CSS", src: "/img/tailwind.svg" },
    { title: "Frame motion", src: "/img/framer-motion.svg" },
  ],
  backend: [
    { title: "Node.js", src: "/img/nodejs.svg" },
    { title: "Express.js", src: "/img/express.svg" },
    { title: "MongoDB", src: "/img/mongodb.svg" },
    { title: "MySQL", src: "/img/mysql.svg" },
    { title: "REST API", src: "/img/api.svg" },
  ],
};

const Skills = () => {
  return (
    <section className="mx-auto px-4 max-w-screen-lg text-primary dark:text-white">
      <div>
        <h2 className="mb-8 font-bold text-4xl text-center underline">
          Skills
        </h2>
        <div className="place-content-center space-y-8 grid">
          <div>
            <h3 className="font-bold text-2xl">Frontend</h3>
            <div className="flex items-center gap-4">
              {skillImages.frontend.map((skill, index) => (
                <div
                  className="space-y-4 bg-primary/80 dark:bg-white shadow-xl p-4 rounded-md w-36 h-40 text-center text-white dark:text-black"
                  key={index}
                >
                  <Image
                    src={skill.src}
                    alt={skill.title}
                    width={64}
                    height={64}
                    className="mx-auto w-16 h-16"
                  />
                  <p className="font-semibold text-lg">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Backend</h3>
            <div className="flex items-center gap-4">
              {skillImages.backend.map((skill, index) => (
                <div
                  className="space-y-4 bg-primary/80 dark:bg-white shadow-xl p-4 rounded-md w-36 h-40 text-center text-white dark:text-black"
                  key={index}
                >
                  <Image
                    src={skill.src}
                    alt={skill.title}
                    width={64}
                    height={64}
                    className="mx-auto w-16 h-16"
                  />
                  <p className="font-semibold text-lg">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
