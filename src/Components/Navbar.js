import React from "react";
import appleLogo from "../img/logo.png";

const NavBar = () => {
  return (
    <div className="flex-container" id="logo-navbar-container">
      <section className="flex-container" id="logo">
        <img src={appleLogo} id="logo" alt="logo" />
      </section>
      <nav className="navbar flex-container">
        <ul className="flex-container">
          <li className="navbar-item">HOME</li>
          <li className="navbar-item">ABOUT</li>
          <li className="navbar-item">SERVICES</li>
          <li className="navbar-item">PORTFOLIO</li>
          <li className="navbar-item">CONTACTO</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
