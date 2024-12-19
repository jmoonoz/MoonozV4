import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import HeaderMotion from "../../Components/HeaderMotion/HeaderMotion";
import "./index.scss";

const menuVariants = {
  hidden: {
    y: "100%", // Start off-screen
    opacity: 0,
  },
  visible: {
    y: 0, // Slide into view
    opacity: 1,
    transition: {
      duration: 0.001,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "100%", // Slide back down
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const Index = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className="Index"
      variants={menuVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
    >
      <Container fluid>
        <Row>
          <Col xs={0} sm={12} lg={9}></Col>
          <Col xs={12} sm={12} lg={3}>
            <a href="/">
              <h1>MNZ</h1>
            </a>
            <HeaderMotion name="Home" link="/" />
            <HeaderMotion name="About" link="/About" />
            <HeaderMotion name="Projects" link="/Projects" />
            <HeaderMotion name="Contact" link="/Contact" />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Index;
