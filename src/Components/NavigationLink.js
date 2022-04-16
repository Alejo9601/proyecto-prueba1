import { useContext } from "react";
import { Link } from "react-scroll";
import SectionContext from "../context/SectionContext";

const NavigationLink = ({ toggleMenu, refTo, textValue }) => {
  const classes = {
    deskItem: "desktop-nav-item",
    mobItem: "mobile-nav-item",
  };

  const activeSection = useContext(SectionContext);

  return (
    <>
      <li className={toggleMenu != null ? classes.mobItem : classes.deskItem}>
        <Link
          className={activeSection === refTo ? "link active" : "link"}
          to={refTo}
          onClick={toggleMenu}
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
