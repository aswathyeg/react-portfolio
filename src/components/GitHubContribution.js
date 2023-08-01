import React from "react";
import "./GitHubContribution.css";
import githubScreenshot from "../assets/githubScreenshot.jpg";
import git from "../assets/git.jpg";
import { Container } from "react-bootstrap";
const GitHubContribution = () => {
  return (
    <div className="githubBody">
      <Container className="subComponentsContainer">
        {/* <h1>Card Flip with Text</h1>
      <h3>Hover over the image below:</h3> */}

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={githubScreenshot} />
            </div>
            <div class="flip-card-back">
              <h1>Github Contributions</h1>
              <img src={git} />
              {/* <p>Architect & Engineer</p>
               */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GitHubContribution;
