import React, { useState } from "react";
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
import aswathy from "../assets/aswathy.jpg";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { HiSupport } from "react-icons/hi";
import bodhii from "../assets/bodhii.jpg";
import excercise from "../assets/excercise.jpg";
const About = (props) => {
  return (
    <div>
      <Container className="subComponentsContainer">
        <Card className="homeCard">
          <Card.Body>
            {props.text ? <h4 className="titleCard">Works</h4> : null}
          </Card.Body>
        </Card>

        <CardGroup className="homeCard">
          {/* <Card.Img variant="top" roundedCi src={photo} alt="my profile" /> */}

          <div className="about">
            <div class="m-4">
              <Card
                className="worksCard1"
                // onClick={() => window.open("https://aswathyeg.medium.com/")}
              >
                <Card.Body>
                  <Card.Title>Bodhii</Card.Title>
                  <Card.Img src={bodhii} />
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="about">
            <div class="m-4">
              <Card className="worksCard1">
                <Card.Body>
                  <Card.Title>Food Order App</Card.Title>
                  <Card.Img src={bodhii} />
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="about">
            <div class="m-4">
              <Card className="worksCard1">
                <Card.Body>
                  <Card.Title>Othanachan</Card.Title>
                  <Card.Img src={bodhii} />
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="about">
            <div class="m-4">
              <Card className="worksCard1">
                <Card.Body>
                  <Card.Title>Papyrus</Card.Title>
                  <Card.Img src={bodhii} />
                </Card.Body>
              </Card>
            </div>
          </div>
        </CardGroup>
      </Container>
    </div>
  );
};
export default About;
