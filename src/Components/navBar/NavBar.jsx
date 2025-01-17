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
          <div>
            <Link to="/">MNZ</Link>
          </div>
          <div className="navRight">
            <Nav>
              <FaRegFolder onClick={toggleMenu} size={30} />
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
