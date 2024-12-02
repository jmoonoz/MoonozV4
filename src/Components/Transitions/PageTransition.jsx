import React from "react";
import { motion } from "framer-motion";
import { perspective, slideUp, fade, slide } from "../animation";
import "./transitions.scss";
import NavBar from "../navBar/NavBar";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      className="fullPage"
    >
      <motion.div variants={slideUp}>
        <NavBar />
        {children}
      </motion.div>
    </motion.div>
  );
}
