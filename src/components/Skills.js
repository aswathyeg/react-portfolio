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
    <div>
      <Container className="subComponentsContainer">
        <CardGroup className="homeCard">
          <Card className="homeCard">
            <Card.Title className="titleCard">Skills</Card.Title>
            <Container className="progressbarContainer">
              <div>
                <ProgressBar
                  now={reactPercentage}
                  label={` React  `}
                  variant="dark"
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div>
                <ProgressBar
                  now={javascriptPercentage}
                  label={` JavaScript `}
                  variant="dark"
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div>
                <ProgressBar
                  now={htmlPercentage}
                  label={` HTML `}
                  variant="dark"
                />
                {/* add ${htmlPercentage}%  to include percentage*/}
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div>
                <ProgressBar
                  now={cssPercentage}
                  label={` CSS `}
                  variant="dark"
                />
              </div>
            </Container>
            <Container className="progressbarContainer">
              <div>
                <ProgressBar
                  now={bootstrapPercentage}
                  label={` Bootstrap  `}
                  variant="dark"
                />
              </div>
            </Container>

            <Container className="progressbarContainer">
              <div>
                <ProgressBar
                  now={azurePercentage}
                  label={` Azure `}
                  variant="dark"
                />
              </div>
            </Container>

            <Container className="progressbarContainer">
              <div>
                <ProgressBar
                  now={cypressPercentage}
                  label={` Cypress  `}
                  variant="dark"
                />
              </div>
            </Container>
          </Card>
          <Card className="homeCard">
            <Card.Title className="titleCard">Why work with me?</Card.Title>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="skillsCards">
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
