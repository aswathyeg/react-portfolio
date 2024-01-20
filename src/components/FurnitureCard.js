import React from "react";
import "./FurnitureCard.css";

const FurnitureCard = (props) => {
  return (
    <div className="furniturecard">
      <div className="furniturecard-body">
        <img src={props.img} className="furniturecard-image" />
        <h2 className="furniturecard-title">{props.title}</h2>
        <p className="furniturecard-description">{props.text}</p>
        <button className="furniturecard-btn">View product</button>
      </div>
    </div>
  );
};

export default FurnitureCard;
