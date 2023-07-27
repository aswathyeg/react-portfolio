import React from "react";
import { Container } from "react-bootstrap";
import Aswathy_EG_Resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
const Contact = () => {
  return (
    <div className="contactDiv">
      <Container className="subComponentsContainer">
        <CardGroup className="homeCard">
          <Card className="homeCard">
            <Card.Title>Download Resume</Card.Title>

            {/* download CV */}
            <Link
              className="homeSmallCards"
              to={Aswathy_EG_Resume}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              Aswathy E G_Resume
            </Link>
          </Card>
          <Card className="ContactCard">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Card>
        </CardGroup>
        <div className="contactIcons">
          <Nav className="flex-raw">
            <Nav.Link>
              <AiFillLinkedin
                onClick={() =>
                  window.open("https://www.linkedin.com/in/aswathyeg/")
                }
                color="black"
              />
            </Nav.Link>
            <Nav.Link eventKey="link-1">
              <BsMedium
                onClick={() => window.open("https://aswathyeg.medium.com/")}
                color="black"
              />
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <AiFillGithub
                color="black"
                onClick={() => window.open("https://github.com/aswathyeg")}
              />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
