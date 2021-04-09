import React from "react";
import "./Grid.scss";
import BackImg_1 from "../assets/stoicism_000.jpg";
import BackImg_2 from "../assets/stoicism_001.jpg";
import BackImg_3 from "../assets/stoicism_002.jpg";
import BackImg_4 from "../assets/stoicism_003.jpg";
import BackImg_5 from "../assets/stoicism_004.jpg";
import BackImg_6 from "../assets/stoicism_005.jpg";
import BackImg_7 from "../assets/stoicism_006.jpg";
import BackImg_8 from "../assets/stoicism_007.jpg";

function Grid({ title }) {
  return (
    <div class="wrapper-grid">
      <div class="grid-container">
        <div class="banner-img">
          <img src={BackImg_1} alt="" class="profile-img" />
        </div>
        <h1 class="name">{title}</h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          officia?
        </p>
        <button class="btn">Follow</button>
      </div>
      <div class="grid-container">
        <div class="banner-img">
          <img src={BackImg_4} alt="" class="profile-img" />
        </div>
        <h1 class="name">{title}</h1>
        <p class="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          eos dolor sit amet msenhasa?
        </p>
        <button class="btn">Follow</button>
      </div>
      <div class="grid-container">
        <div class="banner-img">
          <img src={BackImg_5} alt="" class="profile-img" />
        </div>
        <h1 class="name">{title}</h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores.
        </p>
        <button class="btn">Follow</button>
      </div>
      <div class="grid-container">
        <div class="banner-img">
          <img src={BackImg_6} alt="" class="profile-img" />
        </div>
        <h1 class="name">{title}</h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eaque!
        </p>
        <button class="btn">Follow</button>
      </div>
      <div class="grid-container">
        <div class="banner-img">
          <img src={BackImg_7} alt="" class="profile-img" />
        </div>
        <h1 class="name">{title}</h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          architecto.
        </p>
        <button class="btn">Follow</button>
      </div>
      <div class="grid-container">
        <div class="banner-img">
          <img src={BackImg_8} alt="" class="profile-img" />
        </div>
        <h1 class="name">{title}</h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam?
        </p>
        <button class="btn">Follow</button>
      </div>
    </div>
  );
}
export default Grid;
