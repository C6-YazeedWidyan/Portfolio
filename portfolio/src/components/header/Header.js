import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/yazeed.jpg";

const Header = () => {
  return (
    <>
      <div className="container">
        <h5>Hello I'm</h5>
        <h1>Yazeed Widyan</h1>
        <h5>Fullstack Developer</h5>
        <CTA />

        <div className="me">
          <img className="home_img" src={ME} alt="yazeed" />
        </div>

        <a href="#Contact"></a>
      </div>
    </>
  );
};

export default Header;
