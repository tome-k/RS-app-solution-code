import React from "react";
import { GiColumnVase, GiAncientColumns } from "react-icons/gi";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">About Us Section</h2>
      </div>
      <div className="about__column-wrapper">
        <div className="about__column-box">
          <div className="about__banner-icon">
            {/* <GiColumnVase className="about__icon" /> */}
            <GiAncientColumns className="about__icon" />
          </div>
          <h2 className="about__column-title">This is header</h2>
          <p className="about__column-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            quidem dicta provident esse. Optio odit, harum beatae ipsa nisi
            deleniti quis repellendus. Quae, unde. In ab blanditiis, alias,
            atque nulla tempora ratione perspiciatis et qui reprehenderit porro
            suscipit, earum quisquam molestiae? Dicta blanditiis earum delectus
            fugit laudantium? Eaque, nobis? Vero provident laboriosam
            consectetur iusto consequatur quisquam modi optio eligendi placeat?
            Quas iure ratione repellendus voluptatibus illum officiis
            repudiandae nam sint delectus velit, maiores, aspernatur corporis
            perspiciatis architecto et! Ipsam, sit!
          </p>
        </div>
        <div className="about__column-box">
          <h2 className="about__column-title">This is header</h2>
          <p className="about__column-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            quidem dicta provident esse. Optio odit, harum beatae ipsa nisi
            deleniti quis repellendus. Quae, unde. In ab blanditiis, alias,
            atque nulla tempora ratione perspiciatis et qui reprehenderit porro
            suscipit, earum quisquam molestiae? Dicta blanditiis earum delectus
            fugit laudantium? Eaque, nobis? Vero provident laboriosam
            consectetur iusto consequatur quisquam modi optio eligendi placeat?
            Quas iure ratione repellendus voluptatibus illum officiis
            repudiandae nam sint delectus velit, maiores, aspernatur corporis
            perspiciatis architecto et! Ipsam, sit!
          </p>
        </div>
        <div className="about__column-box">
          <h2 className="about__column-title">This is header</h2>
          <p className="about__column-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            quidem dicta provident esse. Optio odit, harum beatae ipsa nisi
            deleniti quis repellendus. Quae, unde. In ab blanditiis, alias,
            atque nulla tempora ratione perspiciatis et qui reprehenderit porro
            suscipit, earum quisquam molestiae? Dicta blanditiis earum delectus
            fugit laudantium? Eaque, nobis? Vero provident laboriosam
            consectetur iusto consequatur quisquam modi optio eligendi placeat?
            Quas iure ratione repellendus voluptatibus illum officiis
            repudiandae nam sint delectus velit, maiores, aspernatur corporis
            perspiciatis architecto et! Ipsam, sit!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
