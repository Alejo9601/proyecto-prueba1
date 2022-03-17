import logo from "../img/logo.png";
import "../Styles/headerStyles.css";
import React, { useState } from "react";
import MovileNavbar from "./MovileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const NavBar = (isMovile) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`flex-container ${isScrolled ? "navbar active" : "navbar"}`}
    >
      <div className="logo">
        <img src={logo} id="logo" alt="logo" />
      </div>
      {isMovile ? <MovileNavbar /> : <DesktopNavbar />}
    </nav>
  );
};

export default NavBar;
