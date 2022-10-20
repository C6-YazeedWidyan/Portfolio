import React from "react";
import "./Contact.css";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
const Contact = () => {
  return (
    <Stack>
      <section id="Contact">
        <h5>CONTACT US</h5>
        <Container>
          <Row className="contact_links_contanier">
            <Col className="contact_links">
              <a
                href="https://www.linkedin.com/in/yazeedwidyan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="contact_icons" />
              </a>
            </Col>
            <Col className="contact_links">
              {" "}
              <a
                href="https://www.facebook.com/yazeed.widyan17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="contact_icons" />
              </a>
            </Col>
            <Col className="contact_links">
              {" "}
              <a
                href="https://github.com/YazeedWidyan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="contact_icons" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </Stack>
  );
};

export default Contact;
