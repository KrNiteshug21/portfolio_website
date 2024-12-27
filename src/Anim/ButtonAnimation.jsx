"use client";
import React from "react";
import { motion } from "framer-motion";

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
      initial={{ scale: 1 }}
      whileHover={disabled ? null : { scale: 0.93 }}
      whileTap={disabled ? null : { scale: 1.1 }}
      onClick={clickFunction}
      className={className}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default ButtonAnimation;
