import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegFolder } from "react-icons/fa";
import "./navBar.scss";

const navBar = () => {
  const [activeLink, setActiveLink] = useState("");

  // this will update the current page location
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <div className="navLogo">
          <a href="/">MNZ</a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div className="navRight">
            <Nav>
              <Nav.Link
                href="/"
                className={
                  activeLink === "/" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("/")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/About"
                className={
                  activeLink === "/About" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("/About")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/Contact"
                className={
                  activeLink === "/Contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("/Contact")}
              >
                Contact
              </Nav.Link>
              <Nav.Link href="/Projects">
                <FaRegFolder />
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navBar;
