import NavigationLink from "./NavigationLink";

const Navegation = ({ useToggleMenu, isMobile }) => {
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
        <NavigationLink
          toggleMenu={isMobile ? useToggleMenu : null}
          refTo="home"
          textValue="Home"
        />
        <NavigationLink
          toggleMenu={isMobile ? useToggleMenu : null}
          refTo="about"
          textValue="About"
        />
        <NavigationLink
          toggleMenu={isMobile ? useToggleMenu : null}
          refTo="services"
          textValue="Services"
        />
        <NavigationLink
          toggleMenu={isMobile ? useToggleMenu : null}
          refTo="portfolio"
          textValue="Portfolio"
        />
        <NavigationLink
          toggleMenu={isMobile ? useToggleMenu : null}
          refTo="contact"
          textValue="Contact"
        />
      </ul>
    </>
  );
};

export default Navegation;
