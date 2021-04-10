import React from "react";
import "./Card.scss";

function Card({ img, title, description }) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={img} alt="" className="card__img" />
        <h2 className="card__title">{title}</h2>
        <p className="card__desc">{description}</p>
      </div>
      <button className="card__btn">View This</button>
    </div>
  );
}

export default Card;
