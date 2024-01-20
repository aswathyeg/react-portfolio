// App.js

import React from "react";
// import "./App.css";
import FurnitureCard from "../components/FurnitureCard";
import blue from "../assets/blue.jpg";
import white from "../assets/white.jpg";
import yellow from "../assets/yellow.jpg";
import white2 from "../assets/white2.jpg";
import orange2 from "../assets/orange2.jpg";
import wood from "../assets/wood.jpg";
import FurnitureNavbar from "../components/FurnitureNavbar";
function FurnitureApp() {
  // const PRODUCTS=[
  //   {img:{white},title:"Style-white",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .",
  //   price:"$2",stocked:true
  // },
  // {}
      
    
  return (
    <div>
      <FurnitureNavbar />
      <div className="navtop"></div>
      <div className="wrapper">
        <FurnitureCard
          img={white}
          title="Style-white"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ."
        />
        <FurnitureCard
          img={blue}
          title="Style-blue"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
          "
        />
        <FurnitureCard
          img={yellow}
          title="Style-yellow"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed.
          "
        />
      </div>
      <div className="navtop"></div>
      <div className="wrapper">
        <FurnitureCard
          img={orange2}
          title="Style-orange"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ."
        />
        <FurnitureCard
          img={white2}
          title="Style-white"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .
          "
        />
        <FurnitureCard
          img={wood}
          title="Style-wooden"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .
          "
        />
      </div>
    </div>
  );
}

export default FurnitureApp;
