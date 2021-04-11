import React from "react";
import Card from "../components/Card";

// import BackImg_5 from "../assets/stoicism_004.jpg";
// import BackImg_7 from "../assets/stoicism_006.jpg";
import BackImg_1 from "../assets/stoicism_000.jpg";
import BackImg_2 from "../assets/stoicism_001.jpg";
import BackImg_3 from "../assets/stoicism_002.jpg";
// import BackImg_4 from "../assets/stoicism_003.jpg";
// import BackImg_6 from "../assets/stoicism_005.jpg";
// import BackImg_8 from "../assets/stoicism_007.jpg";
import "./About.scss";

function About() {
  return (
    <section className="cardx">
      <div className="cardx__wrapper">
        <Card
          img={BackImg_1}
          title="The Stoic Book"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nihil minima laborum."
        />
        <Card
          img={BackImg_2}
          title="The Stoic Book"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nihil minima laborum."
        />
        <Card
          img={BackImg_3}
          title="The Stoic Book"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nihil minima laborum."
        />
        <Card
          img={BackImg_1}
          title="The Stoic Book"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nihil minima laborum."
        />
        <Card
          img={BackImg_2}
          title="The Stoic Book"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nihil minima laborum."
        />
        <Card
          img={BackImg_3}
          title="The Stoic Book"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nihil minima laborum."
        />
      </div>
    </section>
  );
}

export default About;
