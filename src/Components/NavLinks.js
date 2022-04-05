import { Link } from "react-scroll";

const NavLinks = ({ useToggleMenu, isMobile }) => {
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
        <li
          className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}
        >
          <Link
            to="home"
            smooth="true"
            onClick={useToggleMenu}
            style={{ cursor: "pointer" }}
            offset={0}
          >
            Home
          </Link>
        </li>
        <li
          className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}
        >
          <Link
            to="about"
            smooth="true"
            onClick={useToggleMenu}
            style={{ cursor: "pointer" }}
            offset={-100}
          >
            About
          </Link>
        </li>
        <li
          className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}
        >
          <Link
            to="services"
            smooth="true"
            onClick={useToggleMenu}
            style={{ cursor: "pointer" }}
            offset={-100}
          >
            Services
          </Link>
        </li>
        <li
          className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}
        >
          <Link
            to="portfolio"
            smooth="true"
            onClick={useToggleMenu}
            style={{ cursor: "pointer" }}
            offset={-100}
          >
            Portfolio
          </Link>
        </li>
        <li
          className={isMobile ? mobileClasses.navItem : desktopClasses.navItem}
        >
          <Link
            to="contact"
            smooth="true"
            onClick={useToggleMenu}
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

export default NavLinks;
