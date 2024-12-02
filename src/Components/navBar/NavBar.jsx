import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaRegFolder } from "react-icons/fa";
import "./navBar.scss";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  // this will update the current page location
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" fixed="top">
      <Container fluid>
        <div className="navLogo">
          <Link to="/">MNZ</Link>
        </div>
        <div className="navRight">
          <Nav>
            <Nav.Link href="/Index">
              <FaRegFolder size={30} />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
