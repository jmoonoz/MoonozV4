import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.scss";
import Aguila from "../../assets/MexicanAguila.png";
import Moonoz from "../../assets/moonozCutout.png";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";
import PageTransition from "../../Components/Transitions/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="About">
        <Container>
          <Row>
            <Col>
              <div className="aboutNameSection">
                <div className="aboutName">
                  <h1>Joel</h1>
                  <h6>yoh-ehl</h6>
                </div>
                <div className="aboutName">
                  <h1>Munoz</h1>
                  <h6>mooh-neeawe-s</h6>
                </div>
              </div>
              <p>
                Front-End Developer and a proud first-generation Mexican
                American college graduate. I hold a B.S. in Computer Science, a
                B.A. in Psychology, and a minor in Sociology from California
                State University East Bay (CSUEB). My journey began in
                Psychology, but after earning my degree, I found my true passion
                in coding and transitioned into Computer Science. This shift
                opened up a world of creativity and problem-solving that has
                fueled my career ever since.
              </p>
              <p>
                I specialize in building responsive, pixel-perfect web
                applications using technologies like HTML5, CSS3, Sass,
                JavaScript, React, and Bootstrap. With a strong focus on
                front-end development, I aim to create seamless, user-friendly
                interfaces that bring design and functionality together. My
                expertise allows me to develop robust, scalable applications
                that not only meet user needs but also provide an engaging and
                intuitive experience across all devices.
              </p>
              <p>
                Get to know me better by reaching out, whether you want to
                collaborate. You can also explore more about my artistic alter
                ego through <a href="/Moonoz">Moonoz</a>, where I bring my
                creative ideas to life, transitioning art from paper to the
                digital world.
              </p>
            </Col>
            <Col>
              <div className="aboutPhoto">
                {/* <img src={Moonoz} alt="" /> */}
              </div>
            </Col>
          </Row>
          <img className="aboutAguila" src={Aguila} />
          <img className="aboutMoonoz" src={Moonoz} />
          <BottomTitle title="About" />
        </Container>
      </div>
    </PageTransition>
  );
};

export default About;
