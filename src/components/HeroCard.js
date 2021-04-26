import React from "react";
import "./HeroCard.scss";

function HeroCard({ img, title, description }) {
  return (
    <div className="heroCard">
      <img src={img} alt="" />
      <div className="heroCard__content">
        <div className="heroCard__title">{title}</div>
        <div className="heroCard__snippet">{description}</div>
        <div className="heroCard__read">Read More</div>
      </div>
    </div>
  );
}

export default HeroCard;
