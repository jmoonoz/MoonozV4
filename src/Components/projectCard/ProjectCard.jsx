import React, { useState } from "react";
import { motion, transform } from "motion/react";
import { Col, Offcanvas } from "react-bootstrap";
import "./ProjectCard.scss";

import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ bgUrl, title, href }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <a
        href={href}
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: "center",
        }}
        className="outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
      >
        <div className="pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl">
          <h3>{title}</h3>
          <FaArrowRight />
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
