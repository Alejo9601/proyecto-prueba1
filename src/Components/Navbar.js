import logo from "../img/logo.png";
import "../Styles/headerStyles.css";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const NavBar = ({ isMobile }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 93) {
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
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  );
};

export default NavBar;
