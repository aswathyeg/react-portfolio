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
const Home = () => {
  const [cardText, setCardText] = useState(true);

  // const handleClickScroll = () => {
  //   const element = document.getElementById("section-1");
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div>
      <Nav className="flex-column">
        {/* <Nav.Link>
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
        </Nav.Link> */}
      </Nav>
      <Container className="homeContainer">
        <CardGroup className="homeCard">
          <Card className="homeCard">
            <Card.Title className="homeTitle">
              {" "}
              Hi there, I'm Aswathy
            </Card.Title>
            <Card.Body className="homeCard">
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

              {/* <MoreAbout /> */}

              {/* make text responsive*/}
              {/* <Card.Title> Hi there, I'm Aswathy</Card.Title> */}
              <Card.Text className="homeSmallCards">
                I Am A Bangalore Based Front End Developer.
                <br></br> Interested In Developing Impactful User Interfaces
                That Speak Volumes.
                <br></br> Let's Work Together.
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

        <About text={cardText} />

        <Works text={cardText} />
        <Skills />
      </Container>
    </div>
  );
};
export default Home;
