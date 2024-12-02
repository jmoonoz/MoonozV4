export const slideUp = {
  initial: {
    y: 0,
  },
  show: {
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
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
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
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
