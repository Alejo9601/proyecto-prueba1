import React from "react";
import appleLogo from "../img/logo.png";
import "../Styles/headerStyles.css";

const NavBar = () => {
  return (
    <nav className="flex-container navbar">
      <div className="logo">
        <img src={appleLogo} id="logo" alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Portfolio</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
