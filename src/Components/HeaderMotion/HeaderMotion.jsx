import React from "react";
import { motion } from "framer-motion";
import "./HeaderMotion.scss";

const HeaderMotion = (props) => {
  //   const nameArray = props.name.split("");
  const DURATION = 0.5;
  const STAGGER = 0.015;

  const WORD = props.name.split("");

  console.log(WORD);
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      style={{
        lineHeight: 0.6,
      }}
      className="headerMotion"
    >
      <div className="firstSet">
        {WORD.map((l, i) => (
          <motion.span
            variants={{ initial: { y: -1 }, hovered: { y: "-140%" } }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="secondSet">
        {WORD.map((l, i) => (
          <motion.span
            variants={{ initial: { y: "200%" }, hovered: { y: 0 } }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* <motion.div
        className="secondabSet"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      >
        {props.name}
      </motion.div> */}
    </motion.div>
  );
};

export default HeaderMotion;
