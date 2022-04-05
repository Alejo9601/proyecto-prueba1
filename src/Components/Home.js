import React from "react";
import "../styles/home.css";
import profileImg from "../assets/img/profile2.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="flex-container" id="flex-home">
        <picture className="image-container">
          <source type="image/png" srcSet={profileImg} />
          <img className="profile-image" alt="ProfileImage" />
        </picture>
        <div id="profile-text-container">
          <h2> Hi!</h2>
          <h1>I'm Alejandro Juarez</h1>
          <p>Frontend developer</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
