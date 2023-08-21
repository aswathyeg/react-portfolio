import React from "react";
import "./Works.css";
import useReducer from "../assets/useReducer.jpg";
import routing from "../assets/routing.jpg";
import chart from "../assets/chart.jpg";
import cypressIntro from "../assets/cypressIntro.jpg";
import cypress from "../assets/cypress.jpg";
import statemanagement from "../assets/statemanagement.jpg";
import { Container } from "react-bootstrap";
const AnimatedCard = (props) => {
  return (
    <div>
      <Container className="subComponentsContainer">
        {props.text ? <h4 className="titleCard">Writings</h4> : null}
        <br></br>
        <body>
          <div class="box">
            <div
              class="animatedCard"
              onClick={() =>
                window.open(
                  "https://aswathyeg.medium.com/using-chart-js-in-react-239d0c7f055c"
                )
              }
            >
              <div class="imgBx">
                <img src={chart} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An overview of data visualisation using Chart.js in React
                </h2>
              </div>
            </div>

            <div
              class="animatedCard"
              onClick={() =>
                window.open(
                  "https://aswathyeg.medium.com/state-management-in-react-f96c42992b7"
                )
              }
            >
              <div class="imgBx">
                <img src={statemanagement} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An introduction to state management
                  {/* <span>Producer</span> */}
                </h2>
              </div>
            </div>

            <div
              class="animatedCard"
              onClick={() =>
                window.open(
                  "https://aswathyeg.medium.com/understanding-usereducer-hook-in-react-ab81a9055619"
                )
              }
            >
              <div class="imgBx">
                <img src={useReducer} alt="images" />
              </div>
              <div class="details">
                <h2>A brief overview of useReducer hook in React</h2>
              </div>
            </div>

            <div
              class="animatedCard"
              onClick={() =>
                window.open(
                  "https://aswathyeg.medium.com/overview-of-react-routing-a5ce0f1c33ba"
                )
              }
            >
              <div class="imgBx">
                <img src={routing} alt="images" />
              </div>
              <div class="details">
                <h2>A quick overview of Routing in React</h2>
              </div>
            </div>
            <div
              class="animatedCard"
              onClick={() =>
                window.open(
                  "https://aswathyeg.medium.com/introduction-to-cypress-part-1-8950db7ec711"
                )
              }
            >
              <div class="imgBx">
                <img src={cypressIntro} alt="images" />
              </div>
              <div class="details">
                <h2>A brief introduction to Cypress</h2>
              </div>
            </div>
            <div
              class="animatedCard"
              onClick={() =>
                window.open(
                  "https://aswathyeg.medium.com/cypress-installation-and-execution-875e173f3167"
                )
              }
            >
              <div class="imgBx">
                <img src={cypress} alt="images" />
              </div>
              <div class="details">
                <h2>An introduction on how to install and execute Cypress</h2>
              </div>
            </div>
          </div>
        </body>
      </Container>
    </div>
  );
};

export default AnimatedCard;
