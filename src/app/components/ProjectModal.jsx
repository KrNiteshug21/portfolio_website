"use client";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import Link from "next/link";
import React from "react";
import {
  IoCodeSlash,
  IoPlayOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { SlidingCarousel } from "./SlidingCarousel";
import { motion } from "framer-motion";

const projectModalVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const ProjectModal = ({ data, setShowModal }) => {
  return (
    <section>
      <div className="top-1/2 left-1/2 z-50 fixed flex justify-center items-center bg-black/50 w-full h-full -translate-x-1/2 -translate-y-1/2">
        <motion.div
          variants={projectModalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
          className="relative bg-gray-100 dark:bg-primary m-2 rounded-md"
        >
          <button
            className="top-1 right-1 z-10 absolute bg-red-600 rounded-full"
            onClick={() => setShowModal(false)}
          >
            <IoCloseCircleOutline color="white" size={24} />
          </button>
          <div className="flex flex-col p-2 rounded-md max-w-screen-lg">
            <SlidingCarousel
              images={data.image}
              className="rounded-t-md w-full h-[60vh] overflow-hidden"
            />

            <div className="p-2 rounded-md text-gray-500">
              <h3 className="font-bold text-3xl text-primary dark:text-white/90">
                <button onClick={() => setShowModal(true)}>{data.title}</button>
              </h3>
              <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                <div className="space-y-4">
                  <p className="font-thin text-base text-gray-400 text-justify">
                    {data.description}
                  </p>
                  <p>
                    <b className="text-primary dark:text-white/90">
                      Tech-stack:
                    </b>{" "}
                    {data.techStack}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-center gap-4 w-full">
                  <Link className="w-full" target="_blank" href={data.github}>
                    <ButtonAnimation className="flex justify-center items-center gap-2 bg-green-700 px-4 py-2 rounded-md w-full text-white text-xl">
                      <span>Github</span>
                      <IoCodeSlash size={24} />
                    </ButtonAnimation>
                  </Link>
                  <Link className="w-full" target="_blank" href={data.live}>
                    <ButtonAnimation className="flex justify-center items-center gap-2 border-2 border-green-700 px-4 py-2 rounded-md w-full text-green-800 text-xl">
                      <span>Live</span>
                      <IoPlayOutline size={24} />
                    </ButtonAnimation>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectModal;
