import React, { useState } from "react";
// import "./Home.css";
import imageSlide from "./data";


import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./Books";
import Location from "./Location";
import { Card } from "react-bootstrap";
import Destinations from "./Destinations";
import TourNavBar from "./TourNavBar";

const TourHome = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    // width: "100 vw",
  };
  return (
    <div className="container-style">
      <div style={bgImageStyle}>
        <TourNavBar />{" "}
        {/* <BrowserRouter>
         
          <Routes>
            <Route path="/location" element={<Location />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </div>
  );
};

export default TourHome;
