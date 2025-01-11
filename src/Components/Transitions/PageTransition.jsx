import React from "react";
import { motion } from "framer-motion";
import { perspective, slideUp, pageVariants, fade, slide } from "../animation";
import "./transitions.scss";
import NavBar from "../navBar/NavBar";

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      // className="fullPage"
    >
      <NavBar />
      {children}
    </motion.div>
  );
}
