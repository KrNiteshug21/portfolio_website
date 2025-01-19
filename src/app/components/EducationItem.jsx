"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedItem = ({
  children,
  direction,
  index,
  isInView,
  className = "",
}) => {
  const variants = {
    hidden: { opacity: 0, x: direction * 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.25,
      },
    },
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const EducationItem = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      key={edu.institution}
      className="flex sm:flex-row flex-col flex-auto sm:flex-none sm:items-center gap-4"
    >
      <AnimatedItem
        direction={-1}
        index={index}
        isInView={isInView}
        className="rounded-md overflow-hidden"
      >
        <Image
          src={edu.logo}
          width={300}
          height={300}
          alt={edu.institution}
          className=""
        />
      </AnimatedItem>
      <AnimatedItem
        direction={1}
        index={index}
        isInView={isInView}
        className="w-[300px] sm:w-full text-gray-500 text-lg dark:text-dark-text leading-8"
      >
        <h3 className="font-bold text-3xl text-primary dark:text-dark-text">
          {edu.eduType}
        </h3>
        <p>{edu.course}</p>
        <p className="">{edu.institution}</p>
        <p className="">{edu.duration}</p>
        <p>Status: {edu.status}</p>
      </AnimatedItem>
    </div>
  );
};

export default EducationItem;
