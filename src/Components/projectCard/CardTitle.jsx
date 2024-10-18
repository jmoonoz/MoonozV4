import React from "react";
import { motion } from "framer-motion";

const CardTitle = (props) => {
  const header = props.title.split("");

  const STAGGER = 0.05;

  return (
    <div className="cardHeader">
      <div className="firstSet">
        {header.map((l, i) => (
          <motion.h1
            variants={{ initial: { y: 0 }, hovered: { y: "-120%" } }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.h1>
        ))}
      </div>
      <div className="secondSet">
        {header.map((l, i) => (
          <motion.h1
            variants={{ initial: { y: "120%" }, hovered: { y: 0 } }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default CardTitle;
