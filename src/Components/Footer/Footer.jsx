import React from "react";
import "./footer.scss";
import { Container } from "react-bootstrap";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container >
      <div className="footer">Joel Muñoz @ {year}</div>
    </Container>
  );
};

export default Footer;
