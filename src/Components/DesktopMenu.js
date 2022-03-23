import React from "react";

const DesktopMenu = ({
  activeHome,
  activeAbout,
  activeServices,
  activePortfolio,
  activeContact,
}) => {
  return (
    <>
      <ul className="navbar-links">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Portfolio</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </>
  );
};

export default DesktopMenu;
