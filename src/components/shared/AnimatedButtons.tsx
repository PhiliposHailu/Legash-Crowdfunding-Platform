import React from "react";
import { motion } from "framer-motion";
interface prop {
  children: string;
  stiffness: number;
  damping: number;
}

function AnimatedButtons({ children, stiffness, damping }: prop) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="p-3  bg-blue-400 text-white rounded-4xl m-10"
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButtons;
