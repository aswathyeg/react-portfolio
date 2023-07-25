import React from "react";
import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
const Skills = () => {
  const htmlPercentage = 70;
  const cssPercentage = 60;
  const javascriptPercentage = 65;
  const reactPercentage = 70;
  const azurePercentage = 10;
  const bootstrapPercentage = 50;
  const cypressPercentage = 60;
  return (
    <div className="subComponentsContainer">
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
            label={` Azure ${azurePercentage}% `}
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
    </div>
  );
};

export default Skills;
