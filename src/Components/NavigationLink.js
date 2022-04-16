import { useContext } from "react";
import { Link } from "react-scroll";
import SectionContext from "../context/SectionContext";

const NavigationLink = ({ isMobile, refTo, textValue }) => {
  const mobileClasses = {
    navLink: "mobile-nav-links",
    navItem: "mobile-nav-item",
  };

  const desktopClasses = {
    navLink: "desktop-nav-links",
    navItem: "desktop-nav-item",
  };

  const activeSection = useContext(SectionContext);

  return (
    <>
      <li className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}>
        <Link
          className={activeSection === refTo ? "link active" : "link"}
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
