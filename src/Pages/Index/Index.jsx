import React from "react";
import { motion } from "motion/react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderMotion from "../../Components/HeaderMotion/HeaderMotion";

import "./index.scss";

const Index = () => {
  return (
    <motion.div className="Index">
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
