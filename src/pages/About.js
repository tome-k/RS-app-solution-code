import React from "react";
import { Link } from "react-router-dom";
import BackImg_1 from "../assets/stoicism_000.jpg";
import BackImg_2 from "../assets/stoicism_001.jpg";
import BackImg_3 from "../assets/stoicism_002.jpg";
import BackImg_4 from "../assets/stoicism_003.jpg";
import BackImg_5 from "../assets/stoicism_004.jpg";
import BackImg_6 from "../assets/stoicism_005.jpg";
// import BackImg_7 from "../assets/stoicism_006.jpg";
// import BackImg_8 from "../assets/stoicism_007.jpg";
import "./About.scss";

function About() {
  return (
    <section className="aboutus">
      <Link href="#" className="about">
        <div className="about__overlay">
          <span>Read More</span>
        </div>
        <div
          className="about__image"
          style={{ backgroundImage: `url(${BackImg_1})` }}
        ></div>
        <div className="about__content">
          <div className="about__title">I am very pretty girl from South</div>
          <div className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            eligendi sit repellat nesciunt saepe fuga tenetur nisi quas nostrum
            possimus.
          </div>
        </div>
        <div className="about__date">May 9, 2021</div>
        <div className="about__readtime">5 min read</div>
      </Link>
      <Link href="#" className="about">
        <div className="about__overlay">
          <span>Read More</span>
        </div>
        <div
          className="about__image"
          style={{ backgroundImage: `url(${BackImg_2})` }}
        ></div>
        <div className="about__content">
          <div className="about__title">My eyes are big and black</div>
          <div className="about__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            facilis porro obcaecati, odio adipisci harum laborum cumque
            voluptatum necessitatibus quia.
          </div>
        </div>
        <div className="about__date">May 9, 2021</div>
        <div className="about__readtime">5 min read</div>
      </Link>
      <Link href="#" className="about">
        <div className="about__overlay">
          <span>Read More</span>
        </div>
        <div
          className="about__image"
          style={{ backgroundImage: `url(${BackImg_3})` }}
        ></div>
        <div className="about__content">
          <div className="about__title">Look into my eyes so deeply!</div>
          <div className="about__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            mollitia? Ipsa modi hic repellat. Autem veniam delectus aliquam
            quaerat itaque!
          </div>
        </div>
        <div className="about__date">May 9, 2021</div>
        <div className="about__readtime">5 min read</div>
      </Link>
      <Link href="#" className="about">
        <div className="about__overlay">
          <span>Read More</span>
        </div>
        <div
          className="about__image"
          style={{ backgroundImage: `url(${BackImg_4})` }}
        ></div>
        <div className="about__content">
          <div className="about__title">I'm twisted just like my hair!</div>
          <div className="about__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti minus quos dolores sunt soluta unde sed earum magnam
            laborum.
          </div>
        </div>
        <div className="about__date">May 9, 2021</div>
        <div className="about__readtime">5 min read</div>
      </Link>
      <Link href="#" className="about">
        <div className="about__overlay">
          <span>Read More</span>
        </div>
        <div
          className="about__image"
          style={{ backgroundImage: `url(${BackImg_5})` }}
        ></div>
        <div className="about__content">
          <div className="about__title">Freckles, hat and beautiful face!</div>
          <div className="about__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore
            odit explicabo quis labore reiciendis? Pariatur nesciunt veniam
            dicta officia?
          </div>
        </div>
        <div className="about__date">May 9, 2021</div>
        <div className="about__readtime">5 min read</div>
      </Link>
      <Link href="#" className="about">
        <div className="about__overlay">
          <span>Read More</span>
        </div>
        <div
          className="about__image"
          style={{ backgroundImage: `url(${BackImg_6})` }}
        ></div>
        <div className="about__content">
          <div className="about__title">I Love when it's raining !</div>
          <div className="about__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos
            nisi dolorum vero quae nostrum, recusandae repudiandae illum!
            Deleniti, dolorem?
          </div>
        </div>
        <div className="about__date">May 9, 2021</div>
        <div className="about__readtime">5 min read</div>
      </Link>
    </section>
  );
}

export default About;
