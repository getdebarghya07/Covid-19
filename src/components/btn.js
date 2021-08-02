import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./btn.css";
function Buttons() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav id="bootstrap-overrides" className="Navbar">
        <div className="Navbar-container">
          <ul className={click ? "nav--menu active" : "nav--menu"}>
            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={100}
                to="/"
                smooth={true}
                className="nav--links"
                onClick={closeMobileMenu}
              >
                Covid Tracker
              </Link>
            </li>

            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={100}
                to="Guidelines"
                smooth={true}
                className="nav--links"
              >
                GuideLines
              </Link>
            </li>

            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={100}
                to="health"
                smooth={true}
                className="nav--links"
              >
                Health and Beds
              </Link>
            </li>

            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={100}
                to="news"
                smooth={true}
                className="nav--links"
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Buttons;
