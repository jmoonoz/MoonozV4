import React from "react";
import { motion, transform } from "framer-motion";
import { Col } from "react-bootstrap";
import "./ProjectCard.scss";
import CardTitle from "./CardTitle";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ bgUrl, title, href }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: "center",
        }}
        className="projectCard"
      >
        <div className="cardBottomSection">
          <h3>{title}</h3>
          {/* <CardTitle title={title} /> */}
          <FaArrowRight />
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
