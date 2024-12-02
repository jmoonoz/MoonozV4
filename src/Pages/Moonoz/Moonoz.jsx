import React from "react";
import "./Moonoz.scss";
import { Container } from "react-bootstrap";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";
import PageTransition from "../../Components/Transitions/PageTransition";

const Moonoz = () => {
  return (
    <PageTransition>
      <Container className="MoonozPage">
        <div>Moonoz</div>
        <BottomTitle title="Moonoz" />
      </Container>
    </PageTransition>
  );
};

export default Moonoz;
