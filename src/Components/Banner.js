import React from "react";
import profileImg from "../img/profile2.jpg";

const Banner = () => {
  return (
    <div id="banner-container">
      <section className="flex-container" id="init-profile-container">
        <div id="profile-img-container">
          <img src={profileImg} id="profile-img" alt="Profile" />
        </div>
        <div id="profile-text-container">
          <h2> Hi!</h2>
          <h1>I'm Alejandro Juarez</h1>
          <p>Frontend developer </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
