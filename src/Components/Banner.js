import React from "react";
import profileImg from "../img/profile.jpg";
import backgroundImg from "../img/programacion.jpg";

const Banner = () => {
  return (
    <div id="banner-container">
      <section className="flex-container" id="init-profile-container">
        <div id="profile-img-container">
          <img src={profileImg} id="profile-img" alt="Profile" />
        </div>
        <div id="profile-text-container">
          <p>Hello, welcome to my pagem... here are some works of mine</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
