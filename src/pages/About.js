import React from "react";
import { GiAncientColumns } from "react-icons/gi";
import Article from "../components/Article";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__header">About Us Section</h1>
      </div>
      <div className="about__column-wrapper">
        <Article
          icon={<GiAncientColumns className="about__icon" />}
          title="Title of Article"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
        <Article
          icon={<GiAncientColumns className="about__icon" />}
          title="Title of Article"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
        <Article
          icon={<GiAncientColumns className="about__icon" />}
          title="Title of Article"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
        <Article
          icon={<GiAncientColumns className="about__icon" />}
          title="Title of Article"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur corrupti tempora, placeat, tenetur officia ullam, minus voluptates similique dolor laudantium quasi harum illo architecto suscipit praesentium! Amet, modi vero."
        />
      </div>
    </section>
  );
}

export default About;
