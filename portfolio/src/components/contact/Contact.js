import React from "react";
import "./Contact.css";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Contact = () => {
  return (
    <Stack>
      <section id="Contact">
        <h5>CONTACT US</h5>
        <Container>
          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/yazeedwidyan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkdin
              </a>
            </Col>
            <Col>
              {" "}
              <a
                href="https://www.linkedin.com/in/yazeedwidyan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkdin
              </a>
            </Col>
            <Col>
              {" "}
              <a
                href="https://www.linkedin.com/in/yazeedwidyan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkdin
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </Stack>
  );
};

export default Contact;
