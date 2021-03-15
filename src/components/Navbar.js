import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiAncientColumns, GiCrossedSwords } from "react-icons/gi";
import { RiMenu3Line } from "react-icons/ri";

import "./Navbar.scss";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(255, 188, 2)" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiAncientColumns className="navbar-icon" />
              Stoa
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <GiCrossedSwords /> : <RiMenu3Line />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Philosophy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Figure
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  More
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
