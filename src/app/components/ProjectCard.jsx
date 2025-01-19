"use client";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import CardAnimation from "@/Anim/CardAnimation";
import Link from "next/link";
import { IoCodeSlash, IoPlayOutline } from "react-icons/io5";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

const ProjectCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <AnimatePresence key={data.title}>
        {showModal && (
          <ProjectModal
            key={data.title}
            data={data}
            setShowModal={setShowModal}
          />
        )}
      </AnimatePresence>
      <CardAnimation className="space-y-2 border-1 border-gray-400 bg-gray-200 dark:bg-gray-800 shadow-md rounded-md overflow-hidden dark:bg">
        <div>
          <Image
            src={data.image[0]}
            width={400}
            height={300}
            alt={data.title}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="space-y-2 p-2 rounded-md text-gray-500 dark:text-dark-text">
          <h3 className="font-bold text-3xl text-primary dark:text-dark-text">
            <button onClick={() => setShowModal(true)}>{data.title}</button>
          </h3>
          <p className="font-thin text-base text-justify dark:text-gray-400">
            {data.description.length > 80
              ? data.description.slice(0, 80) + "..."
              : data.description}
          </p>
          <p>
            <span className="font-medium text-primary dark:text-dark-text tracking-wider">
              Tech-stack:
            </span>{" "}
            {data.techStack}
          </p>
          <div className="flex flex-col justify-between items-center gap-2 pt-2 w-full">
            <Link
              className="flex-auto w-full"
              target="_blank"
              href={data.github}
            >
              <ButtonAnimation className="flex justify-center items-center gap-2 bg-green-700 px-4 py-2 rounded-md w-full text-white text-xl">
                <span>Github</span>
                <IoCodeSlash size={24} />
              </ButtonAnimation>
            </Link>
            <Link className="flex-auto w-full" target="_blank" href={data.live}>
              <ButtonAnimation className="flex justify-center items-center gap-2 border-2 border-green-700 bg-green-200 px-4 py-2 rounded-md w-full text-green-800 text-xl">
                <span>Live</span>
                <IoPlayOutline size={24} />
              </ButtonAnimation>
            </Link>
          </div>
        </div>
      </CardAnimation>
    </div>
  );
};

export default ProjectCard;
