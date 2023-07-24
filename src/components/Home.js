import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { HiArrowNarrowRight } from "react-icons/hi";
import aswathy from "../assets/aswathy.jpg";
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
          {/* <Nav className="flex-column">
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
          </Nav> */}
          <Card className="homeCard">
            <Card.Body>
              <Card.Title className="titleCard">Aswathy E G</Card.Title>

              {/* <MoreAbout /> */}
              <Card.Text>
                Hi, I'm a front end developer. Over the past 2 years experience
                in development, I have done a handful of projects in React.
                {/* <br></br> I am doing reguler cotributions to Github.Sharing my
                technical knowledge in Medium is my other interest. */}
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
              <Figure.Image
                className="profilePhoto"
                width={371}
                height={380}
                alt="171x180"
                src={aswathy}
              />
            </Figure>
          </Card>
        </CardGroup>

        {/* <div>
          <button className="btn-scroll" onClick={handleClickScroll}>
            Scroll Down
          </button>
        </div>
        <div id="section-1">
          <About />
        </div> */}
        <About text={cardText} />

        <Works />
        <Skills />
        <Footer />
      </Container>
    </div>
  );
};
export default Home;
