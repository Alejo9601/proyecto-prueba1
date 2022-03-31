import logo from "../assets/icons/logo.png";
import "../styles/headerStyles.css";
import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useObserver from "../hooks/useObserver";
import useMobileObserver from "../hooks/useMobileObserver";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobileObserver();

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
