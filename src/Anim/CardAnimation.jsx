"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={
        triggerHoverAnimation && { scale: 1.1, transition: { duration: 0.1 } }
      }
      layout={true}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
