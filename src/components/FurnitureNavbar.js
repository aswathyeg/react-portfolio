import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PiShoppingCartFill } from "react-icons/pi";
import "./FurnitureNavbar.css";
const NewNavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/" className="furnitureNavBrand">
            Happy Heels
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/writings" className="furnitureAbout">
              About
            </Nav.Link>
            <Nav.Link href="/works">
              <PiShoppingCartFill fill="blue" />
            </Nav.Link>
            {/* <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NewNavbar;
