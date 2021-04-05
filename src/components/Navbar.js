import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { GiIonicColumn, GiCrossedChains } from "react-icons/gi";
import { VscMenu } from "react-icons/vsc";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(250, 224, 182)" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiIonicColumn className="navbar-icon" />
              Stoa
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <GiCrossedChains /> : <VscMenu />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <LinkScroll
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={1500}
                  delay={250}
                >
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll
                  to="philosophy"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={1500}
                  delay={750}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Philosophy
                </LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={300}
                  duration={1500}
                  delay={750}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Heroes
                </LinkScroll>
              </li>
              <li className="nav-item">
                <Link
                  to="/more"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  More
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
