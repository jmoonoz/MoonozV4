import React from "react";
import { motion } from "framer-motion";
// import { perspective, slideUp, pageVariants, fade, slide } from "../animation";
import "./transitions.scss";

export default function PageTransition({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const perspective = {
    initial: {
      zIndex: 1,
      y: 0,
      top: "100vh",
      scale:1,

    },
    enter: {
      zIndex: 1,
      y: 0,
      top: "0",
      scale:1,
      transition: {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      zIndex: -1,
      y: -100,
      top: "0",
      scale:.97,
      transition: {
        duration: .8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0.5,
    },
  };

  return (
    <motion.div className="inner">
      {/* <motion.div className="blackFilter" {...anim(blackFilter)} /> */}
      <motion.div {...anim(perspective)} className="perspective">
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </motion.div>
  );
}
