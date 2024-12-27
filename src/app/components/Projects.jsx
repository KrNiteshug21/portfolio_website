import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { travelBuddy, moviedise, phoneShop } from "../data/Data";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";

const Projects = async () => {
  return (
    <SectionWrapper id="projects">
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">
          <TextRevealAnimation text={"Projects"} />
        </h2>

        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard data={travelBuddy} />
          <ProjectCard data={moviedise} />
          <ProjectCard data={phoneShop} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
