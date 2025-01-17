import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import HeaderMotion from "../../Components/HeaderMotion/HeaderMotion";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Index = ({ toggleMenu }) => {
  // const navigate = useNavigate();

  const menuVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
    exit: { y: "100%" },
  };

  // const handleNavigation = (path) => {
  //   toggleMenu(); // Close the menu first
  //   setTimeout(() => navigate(path), 500); // Wait for animation to complete
  // };

  return (
    <motion.div
      // key="menu"
      className="Index"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Container fluid>
        <Row>
          <Col xs={0} sm={12} lg={9}></Col>
          <Col xs={12} sm={12} lg={3}>
            <a href="/">
              <h1>MNZ</h1>
            </a>
            <HeaderMotion
              name="Home"
              Link="/"
              onClick={toggleMenu}
            />
            <HeaderMotion
              name="About"
              Link="/About"
              onClick={toggleMenu}
            />
            <HeaderMotion
              name="Projects"
              Link="Projects"
              onClick={toggleMenu}
            />
            <HeaderMotion
              name="Contact"
              Link="/Contact"
              onClick={toggleMenu}
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Index;
