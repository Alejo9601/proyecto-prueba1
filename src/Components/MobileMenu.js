import { useState } from "react";
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
                <Link
                  to="section1"
                  smooth="true"
                  onClick={useToggleMenu}
                  offset={0}
                >
                  Home
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link
                  to="section2"
                  smooth="true"
                  onClick={useToggleMenu}
                  offset={-100}
                >
                  About
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link
                  to="section3"
                  smooth="true"
                  onClick={useToggleMenu}
                  offset={-100}
                >
                  Services
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link
                  to="section4"
                  smooth="true"
                  onClick={useToggleMenu}
                  offset={-100}
                >
                  Portfolio
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link
                  to="section5"
                  smooth="true"
                  onClick={useToggleMenu}
                  offset={-100}
                >
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
