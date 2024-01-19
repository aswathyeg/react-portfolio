import React from "react";

const Card = (props) => {
  return (
    <div
      data-aos={props.aos}
      data-aos-offset={props.aos_offset}
      className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
    >
      <div class="card p0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
