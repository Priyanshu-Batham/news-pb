import React from "react";

const Card = (props) => {
  return (
    <div className="card my-4" style={{width: "18rem"}}>
      <img src={props.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <a href={props.link} className="btn btn-primary" target='_black'>
          More
        </a>
      </div>
    </div>
  );
};

export default Card;
