import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import ObserverContext from "../context/ObserverContext";

const NavigationLink = ({ isMobile, refTo, textValue }) => {
  const mobileClasses = {
    navLink: "mobile-nav-links",
    navItem: "mobile-nav-item",
  };

  const desktopClasses = {
    navLink: "desktop-nav-links",
    navItem: "desktop-nav-item",
  };

  const [observer, setElements, entries] = useContext(ObserverContext);
  const [activeSection, setActiveSection] = useState(false);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.id === refTo) {
        setActiveSection(true);
      } else {
        setActiveSection(false);
      }
    });
  }, [entries, observer]);

  return (
    <>
      <li className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}>
        <Link
          className={activeSection ? "link active" : "link"}
          to={refTo}
          smooth="true"
          offset={-50}
        >
          {textValue}
        </Link>
      </li>
    </>
  );
};

export default NavigationLink;
