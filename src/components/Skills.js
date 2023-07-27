import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const Skills = () => {
  const htmlPercentage = 70;
  const cssPercentage = 60;
  const javascriptPercentage = 65;
  const reactPercentage = 70;
  const azurePercentage = 15;
  const bootstrapPercentage = 50;
  const cypressPercentage = 60;
  return (
    <div className="subComponentsContainer">
      <Container className="homeContainer">
        <CardGroup className="homeCard">
          <Card className="homeCard">
            <Card.Title className="titleCard">Skills</Card.Title>
            <Container className="progressbarContainer">
              <div className="progressBar">
                <ProgressBar
                  now={htmlPercentage}
                  label={` HTML ${htmlPercentage}% `}
                  variant="dark"
                  animated
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div className="progressBar">
                <ProgressBar
                  now={cssPercentage}
                  label={` CSS ${cssPercentage}% `}
                  variant="dark"
                  animated
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div className="progressBar">
                <ProgressBar
                  now={javascriptPercentage}
                  label={` JavaScript ${javascriptPercentage}% `}
                  variant="dark"
                  animated
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div className="progressBar">
                <ProgressBar
                  now={reactPercentage}
                  label={` React ${reactPercentage}% `}
                  variant="dark"
                  animated
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div className="progressBar">
                <ProgressBar
                  now={azurePercentage}
                  label={` Azure ${azurePercentage}%`}
                  variant="dark"
                  animated
                />
              </div>
            </Container>

            <Container className="progressbarContainer">
              <div className="progressBar">
                <ProgressBar
                  now={bootstrapPercentage}
                  label={` Bootstrap ${bootstrapPercentage}% `}
                  variant="dark"
                  animated
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div className="progressBar">
                <ProgressBar
                  now={cypressPercentage}
                  label={` Cypress ${cypressPercentage}% `}
                  variant="dark"
                  animated
                />
              </div>
            </Container>
          </Card>
          <Card className="homeCard">
            <Card.Title className="titleCard">Why work with me?</Card.Title>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="homeSmallCards">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Analytical`}
                    isValid={false}
                    checked
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Clear Communicator`}
                    isValid={false}
                    checked
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Strong Interpersonal skills`}
                    isValid={false}
                    checked
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Results Driven`}
                    isValid={false}
                    checked
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Deadline Conscious`}
                    isValid={false}
                    checked
                  />
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Big-picture Problem Solver`}
                    isValid={false}
                    checked
                  />

                  {/* <Form.Check
                    disabled
                    type={type}
                    label={`disabled ${type}`}
                    id={`disabled-default-${type}`}
                  /> */}
                </div>
              ))}
            </Form>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Skills;
