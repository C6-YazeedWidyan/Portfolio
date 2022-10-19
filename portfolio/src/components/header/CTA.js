import React from "react";
import CV from "../../assets/cv.pdf";
import "./Header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn1" href={CV} download>
        Download CV
      </a>
      <a className="btn1 btn1-primary" href="#Contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
