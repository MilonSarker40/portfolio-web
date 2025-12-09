"use client";

import { motion, MotionProps } from "framer-motion";
import { FC, ReactNode } from "react";

interface TransitionProps extends MotionProps {
  children: ReactNode;
  className?: string;
  initialY?: number;
  initialX?: number;
  duration?: number;
  easing?: string | [number, number, number, number];
  once?: boolean; // Trigger animation only once
  delay?: number; // Custom delay for the animation
}

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
