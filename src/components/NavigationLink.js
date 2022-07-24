import { Link } from "react-scroll";
import useACtiveSection from "../hooks/useActiveSection";

const NavigationLink = ({ toggleMenu, refTo, textValue }) => {
  const classes = {
    deskItem: "desktop-nav-item",
    mobItem: "mobile-nav-item",
  };

  const activeSection = useACtiveSection();

  return (
    <li className={toggleMenu != null ? classes.mobItem : classes.deskItem}>
      <Link
        className={activeSection === refTo ? "link active" : "link"}
        to={refTo.toLowerCase().split(" ")[0]}
        onClick={toggleMenu}
        smooth="true"
        offset={-150}
      >
        {textValue}
      </Link>
    </li>
  );
};

export default NavigationLink;
