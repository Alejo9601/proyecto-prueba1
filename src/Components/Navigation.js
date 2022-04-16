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
        <NavigationLink isMobile={isMobile} refTo="home" textValue="Home" />
        <NavigationLink isMobile={isMobile} refTo="about" textValue="About" />
        <NavigationLink
          isMobile={isMobile}
          refTo="services"
          textValue="Services"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="portfolio"
          textValue="Portfolio"
        />
        <NavigationLink
          isMobile={isMobile}
          refTo="contact"
          textValue="Contact"
        />
      </ul>
    </>
  );
};

export default Navegation;
