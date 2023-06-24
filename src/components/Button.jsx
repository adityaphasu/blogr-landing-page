import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { motion } from "framer-motion";

export default function Button({ text, className }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className={`${className} rounded-full py-3 text-base font-medium `}>
      {text}
    </motion.button>
  );
}
