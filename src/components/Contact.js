import React from "react";
import { Container } from "react-bootstrap";
import Aswathy_EG_Resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <Container className="subComponentsContainer">
        {/* download CV */}
        <h4>Download Resume</h4>
        <Link
          to={Aswathy_EG_Resume}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          Aswathy E G_Resume
        </Link>
      </Container>
    </div>
  );
};

export default Contact;
