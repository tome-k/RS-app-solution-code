import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  // GiAncientColumns,
  // GiCrossedSwords,
  GiCrossMark,
  // GiCrossedAirFlows,
  GiIonicColumn,
} from "react-icons/gi";
// import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "$secondary-color" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiIonicColumn className="navbar-icon" />
              Stoa
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <GiCrossMark /> : <AiOutlineMenuUnfold />}
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
                  Heroes
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
              <li className="nav-item">
                <Link
                  to="/products"
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
