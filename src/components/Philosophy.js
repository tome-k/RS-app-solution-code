import React from "react";
import "./Philosophy.scss";
import img_1 from "../assets/book_33.jpg";

function Philosophy() {
  return (
    <div className="home__philosophy-section">
      <div className="container">
        <div className="row home__philosophy-row">
          <div className="col">
            <div className="home__philosophy-text-wrapper">
              <div className="top-line">Mario Golik</div>
              <h1 className="heading">Philosophy Section</h1>
              <p className="home__philosophy-subtitle">
                Stoicism is a school of Hellenistic philosophy founded by Zeno
                of Citium in Athens in the early 3rd century BC. It is a
                philosophy of personal ethics informed by its system of logic
                and its views on the natural world. According to its teachings,
                as social beings, the path to eudaimonia (happiness, or
                blessedness) is found in accepting the moment as it presents
                itself, by not allowing oneself to be controlled by the desire
                for pleasure or by the fear of pain, by using one's mind to
                understand the world and to do one's part in nature's plan, and
                by working together and treating others fairly and justly.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="home__philosophy-img-wrapper">
              <img src={img_1} alt="3" className="home__philosophy-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
