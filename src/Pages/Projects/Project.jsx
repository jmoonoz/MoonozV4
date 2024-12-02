import React, { useRef } from "react";
import ProjectCard from "../../Components/projectCard/ProjectCard";
import { Container, Row } from "react-bootstrap";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";
import PageTransition from "../../Components/Transitions/PageTransition";
import "./Projects.scss";

const Project = () => {
  return (
    <PageTransition>
      <div>Projects</div>
    </PageTransition>
  );
};

export default Project;
