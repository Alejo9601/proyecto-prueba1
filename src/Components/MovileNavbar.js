import React from "react";
import "../Styles/headerStyles.css";
import menuIcon from "../img/menu.png";

const MovileNavbar = () => {
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

export default MovileNavbar;
