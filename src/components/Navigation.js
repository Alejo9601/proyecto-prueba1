import NavigationLink from "./NavigationLink";

const Navegation = ({ useToggleMenu, isMobile }) => {
  const classes = {
    deskLink: "desktop-nav-links",
    mobLink: "mobile-nav-links",
  };

  const links = ["Home", "About Me", "Services", "Portfolio", "Contact"];

  return (
    <ul className={isMobile ? classes.mobLink : classes.deskLink}>
      {links.map((link, index) => {
        return (
          <NavigationLink
            key={index}
            toggleMenu={isMobile ? useToggleMenu : null}
            refTo={link}
            textValue={link}
          />
        );
      })}
    </ul>
  );
};

export default Navegation;
