import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.scss";
import Munoz from "../../assets/mexicoHat.png";
import HeaderMotion from "../../Components/HeaderMotion/HeaderMotion";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";
const Home = () => {
  const firstName = "Joel Muñoz";
  const lastName = "Muñoz";
  return (
    <div className="Home">
      <Container fluid>
        <Row>
          <Col>
            <div className="heroTitle">
              <h1>Joel Muñoz</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={8} md={8}></Col>
          <Col className="homeDesc" xs={2} sm={2} md={1} lg={1}>
            <div className="homeUnderTitleText">
              <div>Designer</div>
              <div>Developer</div>
            </div>
            <div className="homeUnderTitleText2">
              <div>¡Echándole</div>
              <div>Ganas!</div>
            </div>
          </Col>

          <Col className="homeDesc" xs={1} sm={1} md={1} lg={1}></Col>
          <Col md={2}></Col>
        </Row>
      </Container>
      <img className="heroMe" src={Munoz} />
      {/* <BottomTitle title="Bienvenidos" /> */}
    </div>
  );
};

export default Home;
