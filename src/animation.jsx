export const slideUp = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: { duration: 0.9 },
  },
  exit: {
    y: "-100%",
    ease: "easeOut",
    transition: { duration: 3 },
  },
};
