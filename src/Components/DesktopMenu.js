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
            style={{ cursor: "pointer" }}
            offset={0}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="about"
            smooth={true}
            style={{ cursor: "pointer" }}
            offset={-100}
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="services"
            smooth={true}
            style={{ cursor: "pointer" }}
            offset={-100}
          >
            Services
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="portfolio"
            smooth={true}
            style={{ cursor: "pointer" }}
            offset={-100}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active-link"
            to="footer"
            smooth={true}
            style={{ cursor: "pointer" }}
            offset={-100}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default DesktopMenu;
