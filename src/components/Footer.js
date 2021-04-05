import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaGithub, FaPinterest, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiIonicColumn } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <section className="footer-subscription">
          <h2 className="footer-subscription-heading">
            Join us to receive stoicism golden thoughts
          </h2>
          <p className="footer-subscription-text">
            You can unsubscribe at any time
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <button className="footer-btn">Subscribe</button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Philosopher</Link>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/">GitHub</Link>
              <Link to="/">Pinterest</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">LinkedIn</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <LinkScroll
                to="home"
                className="social-logo"
                spy={true}
                smooth={true}
                offset={-75}
                duration={2000}
                delay={750}
              >
                <GiIonicColumn className="footer-icon" />
                Stoa
              </LinkScroll>
            </div>
            <small className="website-rights"></small>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Pinterest"
              >
                <FaPinterest />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <hr className="footer-line" />
        </section>
      </div>
    </div>
  );
}

export default Footer;
