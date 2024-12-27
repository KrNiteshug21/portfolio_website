"use client";
import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import SkillCard from "./SkillCard";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";
const skillImages = {
  frontend: [
    { title: "HTML", src: "/img/HTML5_Badge.svg" },
    { title: "CSS", src: "/img/Official_CSS_Logo.svg" },
    { title: "JavaScript", src: "/img/javascript-1.svg" },
    { title: "React", src: "/img/React-icon.svg" },
    { title: "Next.js", src: "/img/next-js.svg" },
    { title: "Tailwind CSS", src: "/img/tailwind.svg" },
    { title: "Framer motion", src: "/img/framer-motion.svg" },
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
    <SectionWrapper id="skills">
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">
          <TextRevealAnimation text={"Skills"} />
        </h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Frontend</h3>
            <div className="flex flex-wrap items-center gap-4">
              {skillImages.frontend.map((skill, index) => (
                <SkillCard skill={skill} key={index} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Backend</h3>
            <div className="flex flex-wrap items-center gap-4">
              {skillImages.backend.map((skill, index) => (
                <SkillCard skill={skill} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
