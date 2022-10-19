import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/yazeed.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yazeed Widyan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="home_img" src={ME} alt="yazeed" />
        </div>
      </div>
    </header>
  );
};

export default Header;
