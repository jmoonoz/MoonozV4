import React from "react";
import "./sideMenu.scss";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import { LiaGithub } from "react-icons/lia";
import { Container } from "react-bootstrap";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <a href="/" className="sideMNZ">
        <p>MNZ</p>
      </a>
      <div className="socialTitle">Developer / Designer</div>
      <div className="sideIcon">
        {/* linekedin */}
        <a href="https://www.linkedin.com/in/moonoz/" target="_blank">
          <FaLinkedinIn />
        </a>
        {/* git */}
        <a>
          <LiaGithub />
        </a>
        {/* email */}
        <MdOutlineMailOutline />
      </div>
    </div>
  );
};

export default SideMenu;
