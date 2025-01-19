"use client";
import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import SkillCard from "./SkillCard";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";
import SkillData from "../../data/SkillData";
import { Particles } from "./ui/Particles";

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <Particles
        className="absolute inset-0 w-full"
        quantity={100}
        ease={80}
        refresh
      />
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">
          <TextRevealAnimation text={"Skills"} />
        </h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Frontend</h3>
            <div className="flex flex-wrap items-center gap-4">
              {SkillData.frontend.map((skill, index) => (
                <SkillCard skill={skill} key={index} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Backend</h3>
            <div className="flex flex-wrap items-center gap-4">
              {SkillData.backend.map((skill, index) => (
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
