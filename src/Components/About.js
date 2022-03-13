import React from "react";

const AboutMe = () => {
  return (
    <section className="about">
      <div className="flex-container">
        <h1>About Me</h1>
        <section className="about-description">
          <h2>Who am i?</h2>
          <h2>I´m Alejandro Juarez - Software Engineer /</h2>
          <h2>Web developer</h2>
        </section>
        <section className="grid-container about-skills">
          <div className="skill" id="html"></div>
          <div className="skill" id="css"></div>
          <div className="skill" id="javascript"></div>
          <div className="skill" id="react"></div>
          <div className="skill" id="node.js"></div>
          <div className="skill" id="git"></div>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
