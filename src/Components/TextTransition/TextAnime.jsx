import React from "react";
import { motion } from "motion/react";
import { slideUp } from "../animation";
import "./TextAnime.scss";

const TextAnime = (prop) => {
  const str = prop.children.split("");
  console.log(str);
  return (
    <motion.div
      initial="initial"
      animate="show"
      exit="exit"
      className="textContainer"
    >
      <div>
        {str.map((l, i) => (
          // make sure to have them in a span instead of div. div is block and soan is inline
          // <motion.span
          //   key={i}
          //   initial={{ y: "200%", rotate: "-9deg" }}
          //   animate={{
          //     y: 0,
          //     rotate: "0deg",
          //     transition: {
          //       duration: 0.03,
          //       type: "spring",
          //       delay: 0.03 * i,
          //       ease: [0.12, 0, 0.39, 0],
          //     },
          //   }}
  
          // >
          //   {l}
          // </motion.span>
          <span key={l}>{i}</span>
          
        ))}
      </div>
    </motion.div>
  );
};

export default TextAnime;
