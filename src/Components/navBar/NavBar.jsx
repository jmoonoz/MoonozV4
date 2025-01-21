import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaRegFolder } from "react-icons/fa";
import Index from "../../Pages/Index/Index";
import "./navBar.scss";

const NavBar = ({ toggleMenu }) => {
  return (
    <>
      {/* className={activeLink ? "navLogo" : "blank"} */}
      <Navbar expand="md" fixed="top">
        <Container fluid>
          <div className="navLogo">
            <Link to="/">MNZ</Link>
          </div>
          <div className="navRight">
            <Nav>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
              {/* <Link to="/Menu">
                <FaRegFolder size={30} />
              </Link> */}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
