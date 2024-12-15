import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { travelBuddy, moviedise, phoneShop } from "../data/Data";

const Projects = async () => {
  return (
    <SectionWrapper id="projects">
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">Projects</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <ProjectCard data={travelBuddy} />
          <ProjectCard data={moviedise} />
          <ProjectCard data={phoneShop} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
