import React from "react";
import { motion } from "framer-motion";
import "./HeaderMotion.scss";

const HeaderMotion = (props) => {
  //   const nameArray = props.name.split("");
  const DURATION = 0.5;
  const STAGGER = 0.015;

  const WORD = props.name.split("");
  console.log(props.link);

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      style={{
        lineHeight: 0.6,
      }}
      className="headerMotion"
    >
      <a href={props.link}>
        <div className="firstSet">
          {WORD.map((l, i) => (
            <motion.span
              key={i}
              variants={{ initial: { y: 0 }, hovered: { y: "-200%" } }}
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
              key={i}
              variants={{ initial: { y: "250%" }, hovered: { y: 0 } }}
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
      </a>
    </motion.div>
  );
};

export default HeaderMotion;
