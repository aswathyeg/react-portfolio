import React from "react";
import { Button, Container } from "react-bootstrap";
const Location = () => {
  return (
    <Container>
      <Button
        className=" location"
        onClick={() => {
          window.location.href =
            "https://www.google.com/maps/dir/Bengaluru,+Karnataka/Hampi,+Karnataka+583239/@14.1497114,75.7520358,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2m2!1d77.5945627!2d12.9715987!1m5!1m1!1s0x3bb77fd95d4be823:0x6e52e05076df36b8!2m2!1d76.460024!2d15.3350132!3e0?entry=ttu";
        }}
      >
        Click to check location
      </Button>
    </Container>
  );
};

export default Location;
