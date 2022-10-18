import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav">
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="#"
      >
        Home
      </a>
      <a
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
        href="#About"
      >
        About
      </a>
      <a
        onClick={() => setActiveNav("#Projects")}
        className={activeNav === "#Projects" ? "active" : ""}
        href="#Projects"
      >
        Projects
      </a>
      <a
        onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}
        href="#Contact"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
