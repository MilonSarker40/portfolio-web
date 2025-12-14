"use client";

import { motion, MotionProps, Easing } from "framer-motion";
import { FC, ReactNode } from "react";

interface TransitionProps extends MotionProps {
  children: ReactNode;
  className?: string;
  initialY?: number;
  initialX?: number;
  duration?: number;
  easing?: Easing | Easing[]; // ✅ correct Framer Motion type
  once?: boolean; // Trigger animation only once
  delay?: number; // Custom delay for the animation
}

/* ----------------------------- Transition Up ----------------------------- */
export const TransitionUp: FC<TransitionProps> = ({
  children,
  className = "",
  initialY = 50,
  duration = 0.8,
  easing = "easeOut",
  once = true,
  delay = 0,
  ...motionProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: easing }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------- Transition Down ----------------------------- */
export const TransitionDown: FC<TransitionProps> = ({
  children,
  className = "",
  initialY = -50,
  duration = 0.8,
  easing = "easeOut",
  once = true,
  delay = 0,
  ...motionProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: easing }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------- Transition Left ----------------------------- */
export const TransitionLeft: FC<TransitionProps> = ({
  children,
  className = "",
  initialX = 50,
  duration = 0.8,
  easing = "easeOut",
  once = true,
  delay = 0,
  ...motionProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: easing }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------- Transition Right ---------------------------- */
export const TransitionRight: FC<TransitionProps> = ({
  children,
  className = "",
  initialX = -50,
  duration = 0.8,
  easing = "easeOut",
  once = true,
  delay = 0,
  ...motionProps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: easing }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
