import NavigationLink from "./NavigationLink";

const Navegation = ({ useToggleMenu, isMobile }) => {
  const classes = {
    deskLink: "desktop-nav-links",
    mobLink: "mobile-nav-links",
  };

  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <ul className={isMobile ? classes.mobLink : classes.deskLink}>
      {links.map((link) => {
        return (
          <NavigationLink
            toggleMenu={isMobile ? useToggleMenu : null}
            refTo={link.toLowerCase()}
            textValue={link}
          />
        );
      })}
    </ul>
  );
};

export default Navegation;
