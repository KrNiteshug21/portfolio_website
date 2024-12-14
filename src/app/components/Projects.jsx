import React from "react";
import ProjectCard from "./ProjectCard";
import { travelBuddy, moviedise, phoneShop } from "../data/Data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto px-4 min-h-screen text-primary dark:text-dark-text"
    >
      <div>
        <h2 className="mb-8 font-bold text-4xl text-center underline">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <ProjectCard data={travelBuddy} />
          <ProjectCard data={moviedise} />
          <ProjectCard data={phoneShop} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
