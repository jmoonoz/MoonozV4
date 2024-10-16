import React from "react";
import { motion } from "framer-motion";
import "./BottomTitle.scss";

const BottomTitle = (props) => {
  const title = props.title.split("");
  const DURATION = 0.5;
  const STAGGER = 0.015;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      className="bottomTitle"
    >
      {title.map((l, i) => (
        <motion.div
          variants={{
            hidden: { y: "200%" },
            show: {
              y: 0,
              ease: "easeInOut",
              transition: { duration: 1.3, delay: STAGGER * i },
            },
            exit: {
              y: "200%",
              ease: "easeInOut",
              transition: { duration: 1.3, delay: STAGGER * i },
            },
          }}
        >
          {l}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BottomTitle;
