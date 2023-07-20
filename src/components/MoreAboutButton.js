import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

function MoreAbout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Introduction
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }}>
              Hi, I'm a front end developer.
              <br></br> Over the past 2 years of experience in development, I
              have done a handful of projects in React.
              {/* <br></br> I am doing regular contributions to Github.
              <br></br> Sharing my technical knowledge in Medium is my other
              interest. */}
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default MoreAbout;
