import React from "react";
import { Container } from "react-bootstrap";
import Aswathy_EG_Resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <div>
      <Container className="subComponentsContainer">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        {/* download CV */}
        <h4>Download Resume</h4>
        <Link
          to={Aswathy_EG_Resume}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          Aswathy E G_Resume
        </Link>
      </Container>
    </div>
  );
};

export default Contact;
