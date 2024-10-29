import React, { useRef } from "react";
import ProjectCard from "../../Components/projectCard/ProjectCard";
import { Container, Row } from "react-bootstrap";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";
import "./Projects.scss";
import Cursor from "../../Components/projectCard/Cursor";

const Project = () => {
  // cursor details

  const CURSOR_WIDTH = 32;
  const HOVER_PADDING = 24;

  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = e.target;
    const cursorEl = cursorRef.current;

    const isCardHover = el.classList.contains("outline-card");

    if (isCardHover) {
      const { width, height, top, left } = el.getBoundingClientRect();

      cursorEl.style.transition = "0.25s all";

      cursorEl.style.width = `${width + HOVER_PADDING}px`;
      cursorEl.style.height = `${height + HOVER_PADDING}px`;
      cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`;
      cursorEl.style.top = `${top + window.scrollY + height / 2}px`;
      cursorEl.style.left = `${left + width / 2}px`;
    } else {
      cursorEl.style.transition = "0s all";

      cursorEl.style.width = `${CURSOR_WIDTH}px`;
      cursorEl.style.height = `${CURSOR_WIDTH}px`;
      cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
      cursorEl.style.top = `${e.clientY + window.scrollY}px`;
      cursorEl.style.left = `${e.clientX}px`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="Project overflow-hidden px-8 py-24"
    >
      <Container>
        <Row>
          <ProjectCard
            title="Discover"
            href="#"
            bgUrl="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProjectCard
            title="Learn"
            href="#"
            bgUrl="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProjectCard
            title="Grow"
            href="#"
            bgUrl="https://images.unsplash.com/photo-1521649415036-659258dc424f?q=80&w=2548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProjectCard
            title="Grow"
            href="#"
            bgUrl="https://images.unsplash.com/photo-1521649415036-659258dc424f?q=80&w=2548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Row>
        <Cursor cursorRef={cursorRef} />
      </Container>
      <BottomTitle title="Project" />
    </section>
  );
};

export default Project;
