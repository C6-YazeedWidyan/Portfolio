import React from "react";
import CV from "../../assets/cv.pdf";
import "./Header.css";

import "bootstrap/dist/css/bootstrap.min.css";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn btn-outline-primary" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-outline-primary" href="#Contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
