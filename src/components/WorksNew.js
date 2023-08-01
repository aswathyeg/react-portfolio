import React from "react";
import "./WorksNew.css";
import aswathy from "../assets/aswathy.jpg";
const WorksNew = () => {
  return (
    <div className="allWorksNew">
      <p class="browser-warning">
        If this looks wonky to you it's because this browser doesn't support the
        CSS property 'aspect-ratio'.
      </p>
      <div class="stack">
        <div class="cardWorksNew">
          <div class="image">
            <img src={aswathy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksNew;
