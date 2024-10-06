import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./home.scss";
import Munoz from "../../assets/IMG_6919.JPG";

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="heroTitle">
              <p>Diseñador</p>
              <h1>Joel Muñoz</h1>
            </div>
            <div className="heroDesc">
              <p>
                Front-end developer combining art and technology for your
                amusement - <span>¡Echandole Ganas!</span>
              </p>
            </div>
            <a href="/About" className="aboutButton">
              <a href="/About">
                <Button className="buttonCustom" variant="">About</Button>
              </a>
            </a>
          </Col>
          <Col sm={12} md={6}>
            home
          </Col>
        </Row>
      </Container>
      {/* <img className="heroMe" src={Munoz} /> */}
      <div className="bottomTitle">Bienvenidos</div>
    </div>
  );
};

export default Home;
