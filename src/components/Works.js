import React from "react";
import "./AnimatedCard.css";
import useReducer from "../assets/useReducer.jpg";
import routing from "../assets/routing.jpg";
import excercise from "../assets/excercise.jpg";
import cypressIntro from "../assets/cypressIntro.jpg";
import cypress from "../assets/cypress.jpg";
import bodhii from "../assets/bodhii.jpg";
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
const Works = (props) => {
  return (
    <div>
      <Container className="subComponentsContainer">
        {props.text ? <h4 className="titleCard">Works</h4> : null}
        <br></br>
        <body>
          <div class="box">
            <div
              class="worksAnimatedCard"
              onClick={() =>
                window.open(
                  "https://aswathyeg.medium.com/using-chart-js-in-react-239d0c7f055c"
                )
              }
            >
              <div class="imgBx">
                <img src={excercise} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An Excercise App
                  {/* <span>Director</span> */}
                </h2>
              </div>
            </div>

            <div class="worksAnimatedCard">
              <div class="imgBx">
                <img src={bodhii} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An E-Learning App
                  {/* <span>Producer</span> */}
                </h2>
              </div>
            </div>

            {/* <div class="animatedCard">
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
          </div> */}
          </div>
        </body>
      </Container>
    </div>
  );
};

export default Works;
