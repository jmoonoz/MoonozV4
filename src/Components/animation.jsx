import { delay } from "motion/react";

// text under munoz on home page
export const slideUp = {
  initial: {
    y: "200%",
  },
  show: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 3.0,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};



export const imgOpacity = {
  initial: {
    y: 10,
    opacity: "0.9%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

export const perspective = {
  initial: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    y: -100,
    scale: 0.9,
    opacity: 0.4,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
    transition: {
      delay: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: 0,
    transition: {
      duration: 0.04,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 1,
  },
};

export const pageVariants = {
  initial: { opacity: 0, y: "-100vh" },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100vh" },
};
