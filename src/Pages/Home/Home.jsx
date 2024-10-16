import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.scss";
import Munoz from "../../assets/CollegeMunoz.png";
import HeaderMotion from "../../Components/HeaderMotion/HeaderMotion";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";
const Home = () => {
  const headerName = "Joel Muñoz";
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="heroTitle">
              <HeaderMotion name={headerName} />
            </div>
            <div className="heroDesc">
              <p>
                Front-end developer combining art and technology for your
                amusement <br />
                <span>- ¡Echandole Ganas!</span>
              </p>
            </div>
            <a href="/About" className="aboutButton">
              <Button className="buttonCustom" variant="">
                About
              </Button>
            </a>
          </Col>
          <Col sm={12} md={6}></Col>
        </Row>
      </Container>
      <img className="heroMe" src={Munoz} />
      {/* <div className="bottomTitle">Bienvenidos</div> */}
      <BottomTitle title="Bienvenidos" />
    </div>
  );
};

export default Home;
