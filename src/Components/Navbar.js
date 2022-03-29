import logo from "../assets/icons/logo.png";
import "../styles/headerStyles.css";
import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useObserver from "../hooks/useObserver";

const NavBar = ({ isMobile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHome, setActiveHome] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeServices, setActiveServices] = useState(false);
  const [activePfolio, setActivePfolio] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const [observer, setElements, entries] = useObserver({
    threshold: 1,
    root: null,
  });

  useEffect(() => {
    const activeSection = document.querySelectorAll(".flex-content");
    setElements(activeSection);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "home":
            setActiveAbout(false);
            setActiveContact(false);
            setActiveHome(true);
            setActivePfolio(false);
            setActiveServices(false);
            break;
          case "about":
            setActiveAbout(true);
            setActiveContact(false);
            setActiveHome(false);
            setActivePfolio(false);
            setActiveServices(false);
            break;
          case "services":
            setActiveAbout(false);
            setActiveContact(false);
            setActiveHome(false);
            setActivePfolio(false);
            setActiveServices(true);
            break;
          case "portfolio":
            setActiveAbout(false);
            setActiveContact(false);
            setActiveHome(false);
            setActivePfolio(true);
            setActiveServices(false);
            break;
          case "contact":
            setActiveAbout(false);
            setActiveContact(true);
            setActiveHome(false);
            setActivePfolio(false);
            setActiveServices(false);
            break;
          default:
            break;
        }
      }
    });
  }, [entries, setElements]);

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
