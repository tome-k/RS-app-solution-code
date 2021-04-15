import React from "react";
import {
  GiAncientColumns,
  GiStoneBlock,
  GiColumnVase,
  GiIonicColumn,
} from "react-icons/gi";
import Article from "../components/Article";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <h2 className="about__header">About Us Section</h2>
      <h5 className="about__subheader">Sub Header</h5>
      <div className="about__column-wrapper">
        <Article
          icon={<GiAncientColumns className="about__icon" />}
          title="Team"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
        <Article
          icon={<GiIonicColumn className="about__icon" />}
          title="Contact Us"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
        <Article
          icon={<GiColumnVase className="about__icon" />}
          title="Services"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
        <Article
          icon={<GiStoneBlock className="about__icon" />}
          title="Philosopher"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
      </div>
    </section>
  );
}

export default About;
