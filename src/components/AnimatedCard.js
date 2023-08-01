import React from "react";
import "./AnimatedCard.css";
import useReducer from "../assets/useReducer.jpg";
import routing from "../assets/routing.jpg";
import chart from "../assets/chart.jpg";
import cypressIntro from "../assets/cypressIntro.jpg";
import cypress from "../assets/cypress.jpg";
import statemanagement from "../assets/statemanagement.jpg";
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
const AnimatedCard = () => {
  return (
    <div>
      <Container className="subComponentsContainer">
        <h4 className="titleCard">Writings</h4>
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
                  SomeOne Famous<span>Director</span>
                </h2>
              </div>
            </div>

            <div class="animatedCard">
              <div class="imgBx">
                <img src={statemanagement} alt="images" />
              </div>
              <div class="details">
                <h2>
                  SomeOne Famous<span>Producer</span>
                </h2>
              </div>
            </div>

            <div class="animatedCard">
              <div class="imgBx">
                <img src={useReducer} alt="images" />
              </div>
              <div class="details">
                <h2>
                  SomeOne Famous<span>Actor</span>
                </h2>
              </div>
            </div>

            <div class="animatedCard">
              <div class="imgBx">
                <img src={routing} alt="images" />
              </div>
              <div class="details">
                <h2>
                  SomeOne Famous<span>Producer</span>
                </h2>
              </div>
            </div>
            <div class="animatedCard">
              <div class="imgBx">
                <img src={cypressIntro} alt="images" />
              </div>
              <div class="details">
                <h2>
                  SomeOne Famous<span>Producer</span>
                </h2>
              </div>
            </div>
            <div class="animatedCard">
              <div class="imgBx">
                <img src={cypress} alt="images" />
              </div>
              <div class="details">
                <h2>
                  SomeOne Famous<span>Producer</span>
                </h2>
              </div>
            </div>
          </div>
        </body>
      </Container>
    </div>
  );
};

export default AnimatedCard;
