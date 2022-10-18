import React from "react";
import "./Projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Red from "../../assets/red.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
  return (
    <section id="Projects">
      <h5>Projects</h5>
      <h2>"You can be a hero"</h2>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Red} />
              <Card.Body>
                <Card.Title>E-commerce App</Card.Title>
                <Card.Text>
                  Whether you’re a gamer or shop, RED makes it easy to find your
                  next addictive game. With RED webiste, you get access to many
                  games all over the world, as we help you to search, filter for
                  new and interseting games, add to your cart and purchase them
                  with a simple design to ensure having the best user
                  experience.
                </Card.Text>
                <Button variant="danger">
                  <a
                    href="https://github.com/C6-YazeedWidyan/MERAKI_Academy_Project_4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github link
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
