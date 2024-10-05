import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.scss"

const About = () => {
  return (
    <Container className="About">
      <Row>
        <Col className="aboutNameSection">
          <div className="aboutName">
            <h1 >Joel</h1>
            <h6>yoh-ehl</h6>
          </div>
          <div className="aboutName">
            <h1>Munoz</h1>
            <h6>mooh-neeawe-s</h6>
          </div>
        </Col>
        <Col>about</Col>
      </Row>
      <div className="bottomTitle">About</div>
    </Container>
  );
};

export default About;
