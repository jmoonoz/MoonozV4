import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaRegFolder } from "react-icons/fa";
import Index from "../../Pages/Index/Index";
import "./navBar.scss";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const page = useLocation();

  return (
    <>
      <Navbar expand="md" fixed="top">
        <Container fluid>
          <div className={activeLink ? "navLogo" : "blank"}>
            <Link to="/">MNZ</Link>
          </div>
          <div className="navRight">
            <Nav>
              <FaRegFolder onClick={() => setMenuOpen(!menuOpen)} size={30} />
            </Nav>
          </div>
        </Container>
      </Navbar>
      {menuOpen && (
        <Index isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default NavBar;
