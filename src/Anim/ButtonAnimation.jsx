"use client";
import React from "react";
import { motion } from "framer-motion";

const btnVariants = {
  hidden: { scale: 1 },
  hover: {
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 1.09,
  },
};

const ButtonAnimation = ({
  type = "button",
  children,
  clickFunction = () => {},
  className = "",
  disabled = false,
}) => {
  return (
    <motion.button
      type={type}
      variants={btnVariants}
      initial="hidden"
      whileHover={disabled ? null : "hover"}
      whileTap={disabled ? null : "tap"}
      onClick={clickFunction}
      className={className}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default ButtonAnimation;
