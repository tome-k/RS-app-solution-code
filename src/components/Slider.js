import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { GiAncientColumns } from "react-icons/gi";
import data from "../data";
import "./Slider.scss";

const Slider = () => {
  // eslint-disable-next-line
  const [views, setViews] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = views.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, views]);

  // Auto slider
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 77500);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section" id="home">
      <div className="title">
        {/* <h1>
          <span>"Stoicism Golden thoughts.."</span>
        </h1> */}
      </div>
      <div className="section-center">
        {views.map((view, viewIndex) => {
          const { id, image, name, title, quote } = view;
          let position = "nextSlide";
          if (viewIndex === index) {
            position = "activeSlide";
          }
          if (
            viewIndex === index - 1 ||
            (index === 0 && viewIndex === views.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="view-img" />
              <h5>{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <GiAncientColumns className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
