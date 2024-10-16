import React from "react";
import "./Moonoz.scss";
import { Container } from "react-bootstrap";
import BottomTitle from "../../Components/BottomTitle/BottomTitle";

const Moonoz = () => {
  return (
    <Container className="MoonozPage">
      <div>Moonoz</div>
      <BottomTitle title="Moonoz" />
    </Container>
  );
};

export default Moonoz;
