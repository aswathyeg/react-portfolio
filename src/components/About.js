import React from "react";
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
import aswathy from "../assets/aswathy.jpg";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { HiSupport } from "react-icons/hi";
const About = () => {
  return (
    <div name="about" id="about">
      <Container className="homeContainer">
        <Card.Title className="titleCard">About</Card.Title>
        <CardGroup className="homeCard">
          <Card className="homeCard">
            {/* <Card.Img variant="top" roundedCi src={photo} alt="my profile" /> */}

            <Figure>
              <Figure.Image
                className="profilePhoto"
                width={300}
                height={300}
                alt="171x180"
                src={aswathy}
              />
            </Figure>
          </Card>

          <Card className="specialCards">
            <BsBriefcaseFill />
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text className="smallCards">2+ years</Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="specialCards">
            <HiAcademicCap />

            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text className="smallCards">MCA</Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className="specialCards">
            <HiSupport />
            <Card.Body>
              <Card.Title>Support</Card.Title>
              <Card.Text className="smallCards">Online</Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};
export default About;
