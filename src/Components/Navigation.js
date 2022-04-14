import NavigationLink from "./NavigationLink";
import { useContext, useState } from "react";
import ObserverContext from "../context/ObserverContext";

const Navegation = ({ useToggleMenu, isMobile }) => {
  const [observer, setElements, entries] = useContext(ObserverContext);

  const mobileClasses = {
    navLink: "mobile-nav-links",
    navItem: "mobile-nav-item",
  };

  const desktopClasses = {
    navLink: "desktop-nav-links",
    navItem: "desktop-nav-item",
  };

  return (
    <>
      <ul className={isMobile ? mobileClasses.navLink : desktopClasses.navLink}>
        <NavigationLink isMobile={isMobile} refTo="section1" textValue="Home" />
        <NavigationLink
          isMobile={isMobile}
          refTo="section2"
          textValue="About"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="section3"
          textValue="Services"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="section4"
          textValue="Portfolio"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="section5"
          textValue="Contact"
        />
      </ul>
    </>
  );
};

export default Navegation;
