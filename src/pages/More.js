import React from "react";
import "./More.scss";
import BackImg_8 from "../assets/stoicism_007.jpg";
// import BackImg_7 from "../assets/stoicism_006.jpg";
// import BackImg_5 from "../assets/stoicism_004.jpg";
import BackImg_1 from "../assets/stoicism_000.jpg";
import BackImg_2 from "../assets/stoicism_001.jpg";
import BackImg_3 from "../assets/stoicism_002.jpg";
import BackImg_4 from "../assets/stoicism_003.jpg";
import BackImg_6 from "../assets/stoicism_005.jpg";
import Cards from "../components/Cards";

function More() {
  return (
    <section className="more">
      <div className="more__wrapper">
        <Cards
          img={BackImg_3}
          title="The Stoic Book"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem a facilis deleniti dicta ab."
        />
        <Cards
          img={BackImg_1}
          title="The Stoic Book"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem a facilis deleniti dicta ab."
        />
        <Cards
          img={BackImg_2}
          title="The Stoic Book"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem a facilis deleniti dicta ab."
        />
        <Cards
          img={BackImg_4}
          title="The Stoic Book"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem a facilis deleniti dicta ab."
        />
        <Cards
          img={BackImg_8}
          title="The Stoic Book"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem a facilis deleniti dicta ab."
        />
        <Cards
          img={BackImg_6}
          title="The Stoic Book"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem a facilis deleniti dicta ab."
        />
      </div>
    </section>
  );
}

export default More;
