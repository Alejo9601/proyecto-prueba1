import NavigationLink from "./NavigationLink";

const Navegation = ({ useToggleMenu, isMobile }) => {
  const classes = {
    deskLink: "desktop-nav-links",
    mobLink: "mobile-nav-links",
  };

  return (
    <>
      <ul className={isMobile ? classes.mobLink : classes.deskLink}>
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
