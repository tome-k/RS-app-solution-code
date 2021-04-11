import React from "react";
import "./Cards.scss";

function Cards({ img, title, description }) {
  return (
    <div>
      <div className="card">
        <div className="card__body">
          <img src={img} alt="" className="card__img" />
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <button className="card__btn">Follow This</button>
      </div>
    </div>
  );
}

export default Cards;
