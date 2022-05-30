import { useState } from "react";
import menuIcon from "../assets/icons/menu.png";
import Navigation from "./Navigation";

const MobileMenu = () => {
  const [showNav, setShowNav] = useState(false);

  const useToggleMenu = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  return (
    <div className="flex-container" id="flex-mobile-menu">
      <div className="toggle-menu" onClick={useToggleMenu}>
        <img src={menuIcon} alt="togle-menu" />
      </div>
      {showNav ? (
        <div
          className="flex-container generic-container"
          onClick={useToggleMenu}
        >
          <Navigation useToggleMenu={useToggleMenu} isMobile={true} />
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
