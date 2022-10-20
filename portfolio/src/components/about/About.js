import React from "react";
import "./About.css";
import ME from "../../assets/yazeed2.jpg";
import Red from "../../assets/red.png";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const About = () => {
  return (
    <section id="About">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_contianer">
        <div className="about_me">
          <div>
            <img className=" about_me_img" src={ME} alt="YAZEED" />
          </div>
        </div>
        <div className="about_contact">
          <div className="about_cards">
            <article className="about_card">
              <BsPerson className="about_icon" />
              <h5>Age</h5>
              <small>23</small>
            </article>
            <article className="about_card">
              <HiOutlineMail className="about_icon" />
              <h5>Email</h5>
              <small>
                yazeedwidyany
                <br />
                @gmail.com
              </small>
            </article>
            <article className="about_card">
              <AiFillProject className="about_icon" />
              <h5>Intrests</h5>
              <small>Coding & Anime</small>
            </article>
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
