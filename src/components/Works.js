import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import bodhii from "../assets/bodhii.jpg";
import githubScreenshot from "../assets/githubScreenshot.png";
const Works = () => {
  return (
    <div>
      <Container className="subComponentsContainer">
        <Card.Title className="titleCard">Works</Card.Title>
        <Carousel interval={null} variant="dark" className="carouselClass">
          <Carousel.Item>
            <img className="d-block w-100" src={bodhii} alt="First slide" />
            {/* <Carousel.Caption className="WorksCarousal">
            <h3>Bodhii</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={100000}>
            <img className="d-block w-100" src={bodhii} alt="Second slide" />
            {/* <Carousel.Caption className="WorksCarousal">
            <h3>Papyrus</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={100000}>
            <img className="d-block w-100" src={bodhii} alt="Third slide" />

            {/* <Carousel.Caption className="WorksCarousal">
            <h3>Shopping </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={100000}>
            <img
              className="d-block w-100"
              src={githubScreenshot}
              alt="Fourth slide"
            />

            {/* <Carousel.Caption className="WorksCarousal">
            <h3>Shopping </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Works;
