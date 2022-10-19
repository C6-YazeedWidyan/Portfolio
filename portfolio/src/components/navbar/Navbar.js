import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SiProgress } from "react-icons/si";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav">
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="#"
      >
        <AiOutlineHome className="navbar_icon" />
      </a>
      <a
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
        href="#About"
      >
        <AiOutlineUser className="navbar_icon" />
      </a>
      <a
        onClick={() => setActiveNav("#Experience")}
        className={activeNav === "#Experience" ? "active" : ""}
        href="#Experience"
      >
        <GrProjects className="navbar_icon" />
      </a>
      <a
        onClick={() => setActiveNav("#Projects")}
        className={activeNav === "#Projects" ? "active" : ""}
        href="#Projects"
      >
        <SiProgress className="navbar_icon" />
      </a>
      <a
        onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}
        href="#Contact"
      >
        <BiMessageSquareDetail className="navbar_icon" />
      </a>
    </nav>
  );
};

export default Navbar;
