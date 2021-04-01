import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiIonicColumn, GiCrossedChains } from "react-icons/gi";
import { VscMenu } from "react-icons/vsc";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";
// import { Link as LinkSc, animateScroll as scroll } from "react-scroll";

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
                <Link
                  href="#home"
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#philosophy"
                  to="/philosophy"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Philosophy
                </a>
              </li>
              <li className="nav-item">
                <a
                  to="/hero"
                  href="#hero"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Heroes
                </a>
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
