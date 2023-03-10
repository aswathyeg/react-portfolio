import React from "react";
import Nav from "react-bootstrap/Nav";
import { HiArrowNarrowRight } from "react-icons/hi";
import face from "../assets/face.jpg";

import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";
import Figure from "react-bootstrap/Figure";
import { AiFillLinkedin } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import Works from "./Works";
const Home = () => {
  return (
    <div className="homeDiv">
      <Nav className="flex-column">
        <Nav.Link>
          <AiFillLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/aswathyeg/")
            }
            color="black"
          />
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <AiTwotoneMail color="black" />
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <AiFillGithub
            color="black"
            onClick={() => window.open("https://github.com/aswathyeg")}
          />
        </Nav.Link>
      </Nav>
      <Container className="homeContainer">
        <CardGroup className="homeCard">
          <Card className="homeCard">
            <Card.Body>
              <Card.Title className="cardTitle">
                I'm a Front End Developer.
              </Card.Title>
              <Card.Text>
                Over the past 2 years experience in front end development, I
                have done a handful of projects in React. I am doing reguler
                cotributions to Github.Sharing my technical knowledge in Medium
                is my other interest.
              </Card.Text>
            </Card.Body>
            {/* <div>
              <Badge pill bg="info">
                About Me
              </Badge>{" "}
            </div> */}
          </Card>
          <Card className="homeCard">
            {/* <Card.Img variant="top" roundedCi src={photo} alt="my profile" /> */}
            <Figure>
              <Figure.Image width={371} height={380} alt="171x180" src={face} />
            </Figure>
          </Card>
        </CardGroup>
        <Works />
      </Container>
    </div>
  );
};
export default Home;
