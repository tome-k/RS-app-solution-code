import React from "react";
import "./More.scss";
// import BackImg_5 from "../assets/stoicism_004.jpg";
// import BackImg_7 from "../assets/stoicism_006.jpg";
import BackImg_1 from "../assets/stoicism_000.jpg";
import BackImg_2 from "../assets/stoicism_001.jpg";
import BackImg_3 from "../assets/stoicism_002.jpg";
import BackImg_4 from "../assets/stoicism_003.jpg";
import BackImg_6 from "../assets/stoicism_005.jpg";
import BackImg_8 from "../assets/stoicism_007.jpg";

function More({ title }) {
  return (
    <section className="more">
      <div className="more__card">
        <div className="more__img-wrapper">
          <img src={BackImg_1} alt="" className="more__img" />
        </div>
        <h1 className="more__title">{title}</h1>
        <p className="more__more__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          officia?
        </p>
        <button className="more__btn">Follow</button>
      </div>
      <div className="more__card">
        <div className="more__img-wrapper">
          <img src={BackImg_4} alt="" className="more__img" />
        </div>
        <h1 className="more__title">{title}</h1>
        <p className="more__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          eos dolor sit amet msenhasa?
        </p>
        <button className="more__btn">Follow</button>
      </div>
      <div className="more__card">
        <div className="more__img-wrapper">
          <img src={BackImg_3} alt="" className="more__img" />
        </div>
        <h1 className="more__title">{title}</h1>
        <p className="more__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores.
        </p>
        <button className="more__btn">Follow</button>
      </div>
      <div className="more__card">
        <div className="more__img-wrapper">
          <img src={BackImg_6} alt="" className="more__img" />
        </div>
        <h1 className="more__title">{title}</h1>
        <p className="more__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eaque!
        </p>
        <button className="more__btn">Follow</button>
      </div>
      <div className="more__card">
        <div className="more__img-wrapper">
          <img src={BackImg_2} alt="" className="more__img" />
        </div>
        <h1 className="more__title">{title}</h1>
        <p className="more__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          architecto.
        </p>
        <button className="more__btn">Follow</button>
      </div>
      <div className="more__card">
        <div className="more__img-wrapper">
          <img src={BackImg_8} alt="" className="more__img" />
        </div>
        <h1 className="more__title">{title}</h1>
        <p className="more__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam?
        </p>
        <button className="more__btn">Follow</button>
      </div>
    </section>
  );
}

export default More;
