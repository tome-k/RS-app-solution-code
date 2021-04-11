import React from "react";
import "./Cards.scss";

function Cards({ img, title, description }) {
  return (
    <div>
      <div className="more__card">
        <div className="more__img-wrapper">
          <img src={img} alt="" className="more__img" />
        </div>
        <h2 className="more__title">{title}</h2>
        <p className="more__description">{description}</p>
        <button className="more__btn">Follow</button>
      </div>
    </div>
  );
}

export default Cards;
