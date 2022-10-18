import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const Contact = () => {
  return (
    <Stack>
      <section id="Contact">
        <h5>CONTACT US</h5>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="yazeedwidyany@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </section>
    </Stack>
  );
};

export default Contact;
