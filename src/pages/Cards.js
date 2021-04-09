import React from "react";
import "./Cards.scss";

// import BackImg_1 from "../assets/stoicism_000.jpg";
// import BackImg_2 from "../assets/stoicism_001.jpg";
// import BackImg_3 from "../assets/stoicism_002.jpg";
import BackImg_4 from "../assets/stoicism_003.jpg";
// import BackImg_5 from "../assets/stoicism_004.jpg";
// import BackImg_6 from "../assets/stoicism_005.jpg";
// import BackImg_7 from "../assets/stoicism_006.jpg";
// import BackImg_8 from "../assets/stoicism_007.jpg";

function Cards() {
  return (
    <div className="main1">
      <section className="cards1">
        <div className="card1">
          <div className="card1__img-container">
            <img
              src={BackImg_4}
              alt="Book cover showcase"
              className="card1__img"
            />
          </div>
          <div className="card1__content">
            <p className="card1__title text--medium">
              Here's is the Title of an Awesome Card
            </p>
            <div className="card1__info">
              <p className="text--medium">30 min</p>
              <p className="card1__price text--medium">free</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card1__img-container">
            <img
              src={BackImg_4}
              alt="Book cover showcase"
              className="card1__img"
            />
          </div>
          <div className="card1__content">
            <p className="card1__title text--medium">
              Here's is the Title of an Awesome Card
            </p>
            <div className="card1__info">
              <p className="text--medium">30 min</p>
              <p className="card1__price text--medium">free</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card1__img-container">
            <img
              src={BackImg_4}
              alt="Book cover showcase"
              className="card1__img"
            />
          </div>
          <div className="card1__content">
            <p className="card1__title text--medium">
              Here's is the Title of an Awesome Card
            </p>
            <div className="card1__info">
              <p className="text--medium">30 min</p>
              <p className="card1__price text--medium">free</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card1__img-container">
            <img
              src={BackImg_4}
              alt="Book cover showcase"
              className="card1__img"
            />
          </div>
          <div className="card1__content">
            <p className="card1__title text--medium">
              Here's is the Title of an Awesome Card
            </p>
            <div className="card1__info">
              <p className="text--medium">30 min</p>
              <p className="card1__price text--medium">free</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card1__img-container">
            <img
              src={BackImg_4}
              alt="Book cover showcase"
              className="card1__img"
            />
          </div>
          <div className="card1__content">
            <p className="card1__title text--medium">
              Here's is the Title of an Awesome Card
            </p>
            <div className="card1__info">
              <p className="text--medium">30 min</p>
              <p className="card1__price text--medium">free</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card1__img-container">
            <img
              src={BackImg_4}
              alt="Book cover showcase"
              className="card1__img"
            />
          </div>
          <div className="card1__content">
            <p className="card1__title text--medium">
              Here's is the Title of an Awesome Card
            </p>
            <div className="card1__info">
              <p className="text--medium">30 min</p>
              <p className="card1__price text--medium">free</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
