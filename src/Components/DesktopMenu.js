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
            activeClass="active"
            to="section1"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="section2"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="section3"
            smooth={true}
            spy={true}
            offset={-10}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="section4"
            smooth={true}
            spy={true}
            offset={-120}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="section5"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default DesktopMenu;
