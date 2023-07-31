import React, { useState } from "react";
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
import aswathy from "../assets/aswathy.jpg";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { HiSupport } from "react-icons/hi";
import useReducer from "../assets/useReducer.jpg";
import routing from "../assets/routing.jpg";
import chart from "../assets/chart.jpg";
import statemanagement from "../assets/statemanagement.jpg";
const Writings = (props) => {
  return (
    <div>
      <Container className="subComponentsContainer">
        <Card className="homeCard">
          <Card.Body>
            {props.text ? (
              <Card.Title className="titleCard">Works</Card.Title>
            ) : null}
          </Card.Body>
        </Card>

        <CardGroup className="homeCard">
          {/* <Card.Img variant="top" roundedCi src={photo} alt="my profile" /> */}

          <div className="about">
            <div class="m-4">
              <Card className="worksCard1">
                <Card.Body>
                  {/* <Card.Title>useReducer</Card.Title> */}
                  <Card.Img src={useReducer} />
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="about">
            <div class="m-4">
              <Card className="worksCard1">
                <Card.Body>
                  {/* <Card.Title>Food Order App</Card.Title> */}
                  <Card.Img src={chart} />
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* <div className="about">
            <div class="m-4">
              <Card className="worksCard1">
                <Card.Body>
                  <Card.Title>Othanachan</Card.Title>
                  <Card.Img src={routing} />
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="about">
            <div class="m-4">
              <Card className="worksCard1">
                <Card.Body>
                  <Card.Title>Papyrus</Card.Title>
                  <Card.Img src={chart} />
                </Card.Body>
              </Card>
            </div>
          </div> */}
        </CardGroup>
      </Container>
    </div>
  );
};
export default Writings;
