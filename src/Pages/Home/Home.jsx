import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./home.scss";
import Munoz from "../../assets/mexicoHat.png";
import { motion } from "motion/react";
import { slideUp, imgOpacity } from "../../Components/animation";
import TextAnime from "../../Components/TextTransition/TextAnime";


const Home = () => {
  const DURATION = 1.8;
  const STAGGER = 0.0;

  const lastName = "Muñoz";

  return (
    <div className="Home">
      <motion.img
        initial={{ y: 10, opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.9,
            duration: 0.8,
            ease: "easeIn",
          },
        }}
        // variants={imgOpacity}
        className="heroMe"
        src={Munoz}
      />
      <Container>
        <Row>
          <Col>
            <div className="heroTitle">
              {lastName.split("").map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", rotate: "-9deg" }}
                  animate={{
                    y: 0,
                    rotate: "0deg",
                    transition: {
                      duration: DURATION,
                      type: "spring",
                      delay: STAGGER * i,
                      ease: [0.12, 0, 0.39, 0],
                    },
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={8} md={8}></Col>
          <Col className="homeDesc" xs={2} sm={2} md={1} lg={1}>
            <motion.div
              initial="initial"
              animate="show"
              exit="exit"
              className="homeUnderTitleText"
            >
              <div>
                <TextAnime>Desginer</TextAnime>
                <motion.div variants={slideUp}>Designer</motion.div>
              </div>
              <div>
                <motion.div variants={slideUp}>Developer</motion.div>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              animate="show"
              exit="exit"
              className="homeUnderTitleText2"
            >
              <div>
                <motion.div variants={slideUp}>¡Echándole</motion.div>
              </div>
              <div>
                <motion.div variants={slideUp}>Ganas!</motion.div>
              </div>
            </motion.div>
          </Col>

          <Col className="homeDesc" xs={1} sm={1} md={1} lg={1}></Col>
          <Col md={2}></Col>
        </Row>
      </Container>

      {/* <BottomTitle title="Bienvenidos" /> */}
    </div>
  );
};

export default Home;
