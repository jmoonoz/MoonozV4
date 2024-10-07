import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./home.scss";
import Munoz from "../../assets/moonozCutout.png";

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
                amusement <br/><span>- ¡Echandole Ganas!</span>
              </p>
            </div>
              <a href="/About" className="aboutButton">
                <Button className="buttonCustom" variant="">About</Button>
              </a>
          </Col>
          <Col sm={12} md={6}>
          </Col>
        </Row>
      </Container>
      <img className="heroMe" src={Munoz} />
      <div className="bottomTitle">Bienvenidos</div>
    </div>
  );
};

export default Home;
