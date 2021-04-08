import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaGithub, FaPinterest, FaTwitter } from "react-icons/fa";
import { GiIonicColumn, GiAncientColumns } from "react-icons/gi";
import "./Footer_2.scss";

function Footer_2(props) {
  return (
    <section className="footer">
      <h2 className="footer__header">
        <GiIonicColumn className="footer__title-icon" />
        <LinkScroll
          to="home"
          className="social-logo"
          spy={true}
          smooth={true}
          offset={-75}
          duration={2000}
          delay={750}
        >
          Stoa Philosophy Website
        </LinkScroll>

        <GiIonicColumn className="footer__title-icon" />
      </h2>
      <div className="footer__container">
        <div className="footer_privacy">
          <Link to="#" className="footer__privacy-links">
            Privacy Policy
          </Link>
          <Link to="/" className="footer__privacy-links">
            Terms of services
          </Link>
          <Link to="/" className="footer__privacy-links">
            Contact Us
          </Link>
          <Link to="/" className="footer__privacy-links">
            Join Us
          </Link>
        </div>
        <div className="footer__socialContainer">
          <div className="footer__social">
            <FaGithub className="footer__icon" />
          </div>
          <div className="footer_social">
            <FaPinterest className="footer__icon" />
          </div>
          <div className="footer_social">
            <FaTwitter className="footer__icon" />
          </div>
        </div>
      </div>
      <GiAncientColumns className="footer__icon-mobile" />
      <p className="footer__rights">&copy; All Rights Reserved 2021</p>
    </section>
  );
}

export default Footer_2;
