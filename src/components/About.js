import React, { useState } from "react";
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
import aswathy from "../assets/aswathy.jpg";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { HiSupport } from "react-icons/hi";
const About = (props) => {
  return (
    <div>
      <Container className="subComponentsContainer">
        <CardGroup className="homeCard">
          <Card className="homeCard">
            <Card.Body>
              {props.text ? <h4 className="titleCard">About</h4> : null}

              {/* <MoreAbout /> */}
              {!props.text ? (
                <div>
                  <Card.Text className="homeSmallCards">
                    Hi, I'm a front end developer. Over the past 2 years
                    experience in development, I have done a handful of projects
                    in React.
                    <br></br> I am doing regular contributions to{" "}
                    <a
                      href="https://github.com/aswathyeg"
                      className="aboutText"
                    >
                      {" "}
                      Github
                    </a>
                    . Sharing my technical knowledge in{" "}
                    <a href="https://medium.com/" className="aboutText">
                      {" "}
                      Medium{" "}
                    </a>
                    is my other interest.
                  </Card.Text>
                  <br></br>
                </div>
              ) : null}
              {/*  */}
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup className="homeCard">
          {/* <Card className="homeCard"> */}
          {/* <Card.Img variant="top" roundedCi src={photo} alt="my profile" /> */}
          {/* {!props.text ? (
              <Figure>
                <Figure.Image
                  className="profilePhoto"
                  width={300}
                  height={300}
                  alt="171x180"
                  src={aswathy}
                />
              </Figure>
            ) : null}
          </Card> */}
          <div div className="about">
            <div className="about">
              <div class="m-4">
                <Card className="card1">
                  {/* <BsBriefcaseFill /> */}
                  <Card.Body>
                    <Card.Title>Experience</Card.Title>
                    <Card.Text
                      // className={props.text ? "homeSmallCards" : "smallCards"}
                      className="smallCards"
                    >
                      2+ years
                    </Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
                </Card>
              </div>
            </div>
            <div className="about">
              <div class="m-4">
                <Card className="card1">
                  {/* <HiAcademicCap /> */}

                  <Card.Body>
                    <Card.Title>Education</Card.Title>
                    <Card.Text className="smallCards">MCA</Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
                </Card>
              </div>
            </div>
            <div className="about">
              <div class="m-4">
                <Card className="card1">
                  {/* <HiSupport /> */}
                  <Card.Body>
                    <Card.Title>Support</Card.Title>
                    <Card.Text className="smallCards">Online</Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
                </Card>
              </div>
            </div>
          </div>
        </CardGroup>
      </Container>
    </div>
  );
};
export default About;
