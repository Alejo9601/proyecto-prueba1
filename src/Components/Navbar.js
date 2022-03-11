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
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Portfolio</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
