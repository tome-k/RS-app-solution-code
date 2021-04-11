import React from "react";
import "./Card.scss";

function Card({ img, title, description }) {
  return (
    <div className="card2">
      <div className="card2__body">
        <img src={img} alt="" className="card2__img" />
        <h2 className="card2__title">{title}</h2>
        <p className="card2__desc">{description}</p>
      </div>
      <button className="card2__btn">View This</button>
    </div>
  );
}

export default Card;
