import React from "react";
import "./sideMenu.scss";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import { LiaGithub } from "react-icons/lia";
import { Container } from "react-bootstrap";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <a href="/">
        <p>MNZ</p>
      </a>
      <div className="socialTitle">Developer / Designer</div>
      <div className="sideIcon">
        {/* linekedin */}
        <FaLinkedinIn />
        {/* git */}
        <LiaGithub />
        {/* email */}
        <MdOutlineMailOutline />
      </div>
    </div>
  );
};

export default SideMenu;
