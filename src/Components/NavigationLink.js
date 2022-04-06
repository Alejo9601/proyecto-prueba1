import { Link } from "react-scroll";

const NavigationLink = ({ isMobile, refTo, textValue }) => {
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
      <li className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}>
        <Link
          to={refTo}
          smooth="true"
          style={{ cursor: "pointer" }}
          offset={-100}
        >
          {textValue}
        </Link>
      </li>
    </>
  );
};

export default NavigationLink;