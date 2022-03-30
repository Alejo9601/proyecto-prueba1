import React from "react";
import { Link } from "react-scroll";

const DesktopMenu = ({
  activeHome,
  activeAbout,
  activeServices,
  activePortfolio,
  activeContact,
}) => {
  return (
    <>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="section1"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            style={{ cursor: "default" }}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="section2"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            style={{ cursor: "default" }}
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="section3"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            style={{ cursor: "default" }}
          >
            Services
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="section4"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            style={{ cursor: "default" }}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="section5"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            style={{ cursor: "default" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default DesktopMenu;
