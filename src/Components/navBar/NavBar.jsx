import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaRegFolder } from "react-icons/fa";

import "./navBar.scss";

const NavBar = () => {
  return (
    <Container className="navBar">
      <div className="navRight">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
          <Nav.Link href="/Projects">
            <FaRegFolder />
          </Nav.Link>
        </Nav>
      </div>
    </Container>
  );
};

export default NavBar;
