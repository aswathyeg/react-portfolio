import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import photo3 from "../assets/photo3.avif";
import Stack from "react-bootstrap/Stack";
function Books() {
  const myStyle = {
    backgroundImage:
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    //height: "100vh",
    // marginTop: "-70px",
    // fontSize: "50px",
    //backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Container>
      <div className="bookStack" style={myStyle}>
        <Stack gap={3}>
          <div className="p-2">A Forgotten Empire</div>
          <div className="p-2">Hampi Vijayanagara</div>
          <div className="p-2">The never to be forgotten empire</div>
        </Stack>
        <Stack gap={3}>
          <div
            className="p-2"
            onClick={() =>
              (window.location.href =
                "https://www.amazon.in/Forgotten-Empire-Vijayanagar-Hampi/dp/8184682905")
            }
          >
            Click to buy
          </div>
          <div
            className="p-2"
            onClick={() =>
              (window.location.href =
                "https://www.amazon.in/Hampi-Vijayanagara-John-M-Fritz/dp/8184956029")
            }
          >
            Click to buy
          </div>
          <div
            className="p-2"
            onClick={() =>
              (window.location.href =
                "https://www.amazon.in/VIJAYANAGARA-NEVER-BE-FORGOTTEN-EMPIRE/dp/1684665728/ref=d_pd_sbs_sccl_3_5/262-6888446-0873153?pd_rd_w=0LaUN&content-id=amzn1.sym.fdedbc61-3064-4c21-85ae-8ccd58c778a7&pf_rd_p=fdedbc61-3064-4c21-85ae-8ccd58c778a7&pf_rd_r=1MXZKDY6JJV071F2ZAE1&pd_rd_wg=yH2qM&pd_rd_r=371d46ae-2db7-49a9-b9a4-2b01d2739b6c&pd_rd_i=1684665728&psc=1")
            }
          >
            Click to buy
          </div>
        </Stack>
      </div>
    </Container>
  );
}

export default Books;
