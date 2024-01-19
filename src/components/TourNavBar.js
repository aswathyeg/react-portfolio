import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./TourNavBar.css";
import { useState } from "react";
const TourNavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar className={navbar ? "navbar active" : "navbar"}>
      <Container className="containerClass">
        <Navbar.Brand
          href="/"
          //
          className="navBrand"
        >
          Explore Hampi
        </Navbar.Brand>

        <Nav className="navbarHome">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/location">Location</Nav.Link>
          <Nav.Link href="/plan">Plan</Nav.Link>
          <Nav.Link href="/stay">Stay</Nav.Link>
          <Nav.Link href="/books">Books</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default TourNavBar;
