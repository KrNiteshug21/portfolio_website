"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  hover: { translateY: "-3px", transition: { duration: "0.1" } },
};

const CardAnimation = ({
  children,
  className = "",
  triggerHoverAnimation = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={triggerHoverAnimation ? "hover" : ""}
      layout={true}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
