import React from "react";
import "./Article.scss";

function Article({ title, description, icon }) {
  return (
    <div className="article">
      <div className="article__banner-icon">{icon}</div>
      <h2 className="article__column-title">{title}</h2>
      <p className="article__column-desc">{description}</p>
    </div>
  );
}

export default Article;
