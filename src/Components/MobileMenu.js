import { useState } from "react";
import "../styles/headerStyles.css";
import menuIcon from "../assets/icons/menu.png";
import { Link } from "react-scroll";

const MobileMenu = () => {
  const [showNav, setShowNav] = useState(false);

  const useToggleMenu = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  return (
    <>
      <div className="flex-container" id="flex-mobile-menu">
        <div className="toggle-menu" onClick={useToggleMenu}>
          <img src={menuIcon} alt="togle-menu" />
        </div>
        {showNav ? (
          <div
            className="flex-container generic-container"
            onClick={useToggleMenu}
          >
            <ul className="mobile-nav-links">
              <li className="mobile-nav-item">
                <Link to="section1" smooth="true" onClick={useToggleMenu}>
                  Home
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="section2" smooth="true" onClick={useToggleMenu}>
                  About
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="section3" smooth="true" onClick={useToggleMenu}>
                  Services
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="section4" smooth="true" onClick={useToggleMenu}>
                  Portfolio
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="section5" smooth="true" onClick={useToggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MobileMenu;
