import React from "react";
import "./Header.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/yazeedwidyan/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/YazeedWidyan">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
