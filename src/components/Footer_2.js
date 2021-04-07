import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaPinterest, FaTwitter } from "react-icons/fa";
import "./Footer_2.scss";

function Footer_2(props) {
  return (
    <div className="footer">
      <h2 className="footer__header">Stoa Philosophy Website</h2>
      <div className="footer__container">
        <div className="footer_privacy">
          <Link className="footer__privacy-links">Privacy Policy</Link>
          <Link className="footer__privacy-links">Terms of services</Link>
          <Link className="footer__privacy-links">Contact Us</Link>
          <Link className="footer__privacy-links">Join Us</Link>
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
      <p className="footer__rights">&copy; All Rights Reserved Stoa 2021</p>
    </div>
  );
}

export default Footer_2;
