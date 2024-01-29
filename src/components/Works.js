import React from "react";
import "./AnimatedCard.css";
import useReducer from "../assets/useReducer.jpg";
import routing from "../assets/routing.jpg";
import excercise from "../assets/excercise.jpg";
import cypressIntro from "../assets/cypressIntro.jpg";
import cypress from "../assets/cypress.jpg";
import bodhii from "../assets/bodhii.jpg";
import tourscrsht from "../assets/tourscrsht.png"
import { Container, Card, CardGroup, Figure } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import furniture from "../assets/furniture.png"

const Works = (props) => {
  const navigate = useNavigate();
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
                navigate('tourguide')
              }
            >
              <div class="imgBx">
                <img src={tourscrsht} alt="images" />
              </div>
              <div class="details">
                <h2>
                  A Tourguide App
                  {/* <span>Director</span> */}
                </h2>
              </div>
            </div>

            <div class="worksAnimatedCard"
             onClick={() =>
              navigate('furnitureApp')
            }>
              <div class="imgBx">
                <img src={furniture} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An E-Commerce App
                  {/* <span>Producer</span> */}
                </h2>
              </div>
            </div>
        
          </div>
        </body>
      </Container>


      <Container className="subComponentsContainer">
        {/* {props.text ? <h4 className="titleCard">Works</h4> : null} */}
        <br></br>
        <body>
          <div class="box">
            <div
              class="worksAnimatedCard"
              onClick={() =>
                navigate('tourguide')
              }
            >
              <div class="imgBx">
                <img src={tourscrsht} alt="images" />
              </div>
              <div class="details">
                <h2>
                  A Tourguide App
                  {/* <span>Director</span> */}
                </h2>
              </div>
            </div>

            <div class="worksAnimatedCard"
             onClick={() =>
              navigate('furnitureApp')
            }>
              <div class="imgBx">
                <img src={furniture} alt="images" />
              </div>
              <div class="details">
                <h2>
                  An E-Commerce App
                  {/* <span>Producer</span> */}
                </h2>
              </div>
            </div>



          
          </div>
        </body>
      </Container>
    </div>
  );
};

export default Works;
