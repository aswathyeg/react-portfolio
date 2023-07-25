import React, { useState } from "react";
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
import aswathy from "../assets/aswathy.jpg";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { HiSupport } from "react-icons/hi";
const About = (props) => {
  return (
    <div name="about" id="about">
      <Container className="subComponentsContainer">
        <Card.Body>
          {props.text ? (
            <Card.Title className="titleCard">About</Card.Title>
          ) : null}

          {/* <MoreAbout /> */}
          {!props.text ? (
            <div>
              <Card.Text>
                Hi, I'm a front end developer. Over the past 2 years experience
                in development, I have done a handful of projects in React.
                <br></br> I am doing reguler cotributions to Github.Sharing my
                technical knowledge in Medium is my other interest.
              </Card.Text>
              <br></br>
            </div>
          ) : null}
          {/*  */}
        </Card.Body>
        <CardGroup className="homeCard">
          <Card className="homeCard">
            {/* <Card.Img variant="top" roundedCi src={photo} alt="my profile" /> */}
            {!props.text ? (
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
          </Card>

          <Card className={props.text ? "homeSpecialCards" : "specialCards"}>
            <BsBriefcaseFill />
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text
                className={props.text ? "homeSmallCards" : "smallCards"}
              >
                2+ years
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className={props.text ? "homeSpecialCards" : "specialCards"}>
            <HiAcademicCap />

            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text
                className={props.text ? "homeSmallCards" : "smallCards"}
              >
                MCA
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card className={props.text ? "homeSpecialCards" : "specialCards"}>
            <HiSupport />
            <Card.Body>
              <Card.Title>Support</Card.Title>
              <Card.Text
                className={props.text ? "homeSmallCards" : "smallCards"}
              >
                Online
              </Card.Text>
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
