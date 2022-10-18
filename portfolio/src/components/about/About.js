import React from "react";
import "./About.css";
import ME from "../../assets/yazeed2.jpg";
import Red from "../../assets/red.png";

const About = () => {
  return (
    <section id="About">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="about_contianer">
        <div className="about_me">
          <div>
            <img className=" about_me_img" src={ME} alt="YAZEED" />
          </div>
        </div>
        <div className="about_contact">
          <div className="about_cards">
            <div className="about_card">
              <h5>Age</h5>
              <small>23</small>
            </div>
            <div className="about_card">
              <h5>Email</h5>
              <small>yazeedwidyany@gmail.com</small>
            </div>
            <div className="about_card">
              <h5>Projects</h5>
              <img className="red" src={Red} alt="red" />
            </div>
          </div>
          <p>
            I am a passionate programmer I have my own style, I enjoy learning
            and new skills , I love challenges and places where there is
            enthusiasm
          </p>
          <a href="#Contact" className="btn btn-outline-danger">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
