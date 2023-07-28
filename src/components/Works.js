import { Card, Container, CardGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bodhii from "../assets/bodhii.jpg";
import ListGroup from "react-bootstrap/ListGroup";
function Works(props) {
  return (
    <Container>
      <Card.Body>
        {" "}
        {props.text ? (
          <Card.Title className="titleCard">Works</Card.Title>
        ) : null}
      </Card.Body>
      <CardGroup className="homeCard">
        <Card className="homeCard"></Card>
        <div className="about">
          <div class="m-4">
            <Card className="worksCard1">
              {/* <BsBriefcaseFill /> */}
              <Card.Body>
                <Card.Title>Bodhii</Card.Title>
                {/* <Card.Text
                  className={props.text ? "homeSmallCards" : "smallCards"}
                >
                  2+ years
                </Card.Text> */}
              </Card.Body>
              {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
            </Card>
          </div>
          <div class="m-4">
            <Card className="worksCard1">
              {/* <HiAcademicCap /> */}

              <Card.Body>
                <Card.Title>Papyrus</Card.Title>
                {/* <Card.Text
                  className={props.text ? "homeSmallCards" : "smallCards"}
                >
                  MCA
                </Card.Text> */}
              </Card.Body>
              {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
            </Card>
          </div>
          {/* <div class="m-4">
            <Card className="card1">
             
              <Card.Body>
                <Card.Title>Othanachan</Card.Title>
                
              </Card.Body>
             
            </Card>
          </div> */}
        </div>
      </CardGroup>
    </Container>
  );
}

export default Works;
