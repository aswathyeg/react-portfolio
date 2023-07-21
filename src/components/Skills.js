import React from "react";
import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
const Skills = () => {
  const percentage = 70;
  return (
    <div>
      <Container className="subComponentsContainer">
        <div className="progressBar">
          <ProgressBar
            now={percentage}
            label={` HTML ${percentage}% `}
            variant="dark"
            animated
          />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
