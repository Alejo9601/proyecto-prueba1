import React from "react";
import "../styles/headerStyles.css";
import menuIcon from "../assets/icons/menu.png";

const MobileMenu = () => {
  return (
    <>
      <div className="flex-container" id="flex-mobile-menu">
        <a href="#" className="togle-menu">
          <img src={menuIcon} alt="togle-menu" />
        </a>
      </div>
    </>
  );
};

export default MobileMenu;
