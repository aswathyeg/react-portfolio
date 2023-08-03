import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { HiArrowNarrowRight } from "react-icons/hi";
import face from "../assets/face.jpg";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";
import Figure from "react-bootstrap/Figure";
import { AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import Works from "./Works";
import About from "./About";
import MoreAbout from "./MoreAboutButton";
import Footer from "./Footer";
import Skills from "./Skills";
import Writings from "./Writings";
import AnimatedCard from "./AnimatedCard";
import WorksNew from "./WorksNew";

const Home = () => {
  const [cardText, setCardText] = useState(true);

  return (
    <div>
      {/* <Nav className="flex-column"></Nav> */}
      <Container>
        <CardGroup>
          <Card className="descriptionCard">
            <div className="heroText">
              <h4 className="heroText">Aswathy</h4>
              <h className="homeTitle"> UI Developer</h>
            </div>
            <Card.Body className="descriptionCard">
              <Nav className="flex-column">
                <Nav.Link>
                  <AiFillLinkedin
                    size={40}
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/aswathyeg/")
                    }
                    color="black"
                  />
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  <BsMedium
                    size={40}
                    onClick={() => window.open("https://aswathyeg.medium.com/")}
                    color="black"
                  />
                </Nav.Link>
                <Nav.Link eventKey="link-2">
                  <AiFillGithub
                    size={40}
                    color="black"
                    onClick={() => window.open("https://github.com/aswathyeg")}
                  />
                </Nav.Link>
              </Nav>

              {/* <MoreAbout /> */}

              {/* make text responsive*/}
              {/* <Card.Title> Hi there, I'm Aswathy</Card.Title> */}
              <Card.Text className="homeSmallCards">
                I am a Bangalore based Front End Developer.
                <br></br> Interested in developing impactful User Interfaces
                that speak volumes.
                <br></br> Let's work together.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="homeCard">
            <Card.Body className="homeCard">
              {/* <Card.Img variant="top" roundedCi src={photo} alt="my profile" /> */}
              <Figure>
                <Figure.Image
                  className="profilePhoto"
                  // width={371}
                  // height={380}
                  alt="171x180"
                  src={face}
                />
              </Figure>
            </Card.Body>
          </Card>
        </CardGroup>
        <Works text={cardText} />
        <AnimatedCard />

        {/* <WorksNew /> */}
        <Skills />
        {/* <Writings /> */}

        {/* <GitHubContribution /> */}
        <About text={cardText} />
      </Container>
    </div>
  );
};
export default Home;
