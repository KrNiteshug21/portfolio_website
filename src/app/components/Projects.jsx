import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import ProjectCard from "./ProjectCard";
import projects from "../../data/Data";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";

const Projects = async () => {
  return (
    <SectionWrapper id="projects">
      <div>
        <h2 className="mb-8 font-bold text-4xl underline">
          <TextRevealAnimation text={"Projects"} />
        </h2>

        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} data={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
