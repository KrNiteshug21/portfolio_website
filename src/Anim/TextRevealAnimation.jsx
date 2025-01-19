"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const animVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const TextRevealAnimation = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <>
      {text?.split("").map((char, index) => {
        return (
          <motion.span
            ref={ref}
            variants={animVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: "0.25", delay: index * 0.07 }}
            key={index}
          >
            {char}
          </motion.span>
        );
      })}
    </>
  );
};
