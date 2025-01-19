import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";
import EducationData from "../../data/EducationData";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">
          <TextRevealAnimation text={"Education"} />
        </h2>
        <div className="space-y-4">
          {EducationData.map((edu, index) => (
            <EducationItem key={index} index={index} edu={edu} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
