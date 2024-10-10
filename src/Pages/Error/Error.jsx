import React from "react";
import "./Error.scss";
import { Container, Button } from "react-bootstrap";

const Error = () => {
  return (
    <div className="Error">
      <Container>
        <div className="errorSection">
          <h1>A little lost? </h1>
          <h3>lets get back Home</h3>
          <Button className="buttonCustom" href="/">
            Home
          </Button>
        </div>
        Error
      </Container>
    </div>
  );
};

export default Error;
