import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; 

interface Props {
  children: React.ReactNode;
  className?: string;
  stiffness?: number;
  damping?: number;
}

const AnimatedButton = ({
  children,
  stiffness = 300,
  damping = 15,
  className,
  ...props
}: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={cn(
        "px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/20",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
