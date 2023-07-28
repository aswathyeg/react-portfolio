import { Card, Container, CardGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bodhii from "../assets/bodhii.jpg";
import excercise from "../assets/excercise.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import githubScreenshot from "../assets/githubScreenshot.jpg";
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
                <Card.Img src={bodhii}></Card.Img>
                <Card.Text
                  className={props.text ? "homeSmallCards" : "smallCards"}
                >
                  An E-learning platform
                </Card.Text>
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
                <Card.Title>Excercise</Card.Title>
                <Card.Img src={excercise}></Card.Img>
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
      <br></br>
      <div className="gitCard">
        <Card className=" text-white">
          <Card.Img src={githubScreenshot} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            {/* <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text> */}
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
      </div>
    </Container>
  );
}

export default Works;
