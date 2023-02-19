import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import black from "../assets/black.jpg";
const Works = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={black} alt="First slide" />
        <Carousel.Caption className="WorksCarousal">
          <h3>Bodhii</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={black} alt="Second slide" />
        <Carousel.Caption className="WorksCarousal">
          <h3>Papyrus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={black} alt="Third slide" />
        <Carousel.Caption className="WorksCarousal">
          <h3>Shopping </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Works;
