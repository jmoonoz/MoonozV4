import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./home.scss";
import Munoz from "../../assets/mexicoHat.png";
import { motion } from "framer-motion";
import { slideUp } from "../../Components/animation";
import PageTransition from "../../Components/Transitions/PageTransition";

const Home = () => {
  const DURATION = 1.3;
  const STAGGER = 0.03;

  const firstName = "Joel";
  const lastName = "Muñoz";
  const name = firstName + " " + lastName;
  const fullName = name.split("");

  return (
      <div className="Home">
        {/* <motion.img
          initial={{ scale: 1.2, y: "10%", opacity: "0.95%" }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: "easeIn",
            },
          }}
          className="heroMe"
          src={Munoz}
        /> */}
        <Container>
          <Row>
            <Col>
              <div className="heroTitle">
                {lastName.split("").map((l, i) => (
                  <motion.h1
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
                  </motion.h1>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={7} sm={8} md={8}></Col>
            <Col className="homeDesc" xs={2} sm={2} md={1} lg={1}>
              <motion.div
                initial="hidden"
                animate="show"
                exit="exit"
                className="homeUnderTitleText"
              >
                <div>
                  <motion.div variants={slideUp}>Designer</motion.div>
                </div>
                <div>
                  <motion.div variants={slideUp}>Developer</motion.div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
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
