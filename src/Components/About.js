import React from "react";
import "../Styles/about.css";
import css from "../img/css-3.png";
import html from "../img/html-5.png";
import javascript from "../img/js.png";
import react from "../img/react.png";
import node from "../img/nodejs.png";
import git from "../img/git.png";

const AboutMe = () => {
  return (
    <section className="flex-container about">
      <div id="flex-about">
        <h1>About Me</h1>
        <section className="about-description">
          <h2>I´m Alejandro Juarez - Web developer /</h2>
          <h2>Software engineer</h2>
          <p>
            I am a Full Stack developer with experience building websites and
            web applications. I specialize in JavaScript, and have professional
            experience working with React. I am always seeking to improve my
            skills and continue growing professionally in order to make valuable
            contributions at the working group I am part of. Therefore I use the
            modern development workflow with CodeStream in order to increase
            productivity and improve communication inside our development team.
          </p>
          <div className="flex-container" id="btn-cv-container">
            <a className="download-btn"> Download CV</a>
          </div>
        </section>
        <section className="grid-container about-skills">
          <h2 className="grid-title">My Skills</h2>
          <div className="flex-container skill-container">
            <img src={html} className="skill-img" id="html" alt="html" />
            <h3 className="skill-name">html</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={css} className="skill-img" id="css" alt="css" />
            <h3 className="skill-name">css</h3>
          </div>
          <div className="flex-container skill-container">
            <img
              src={javascript}
              className="skill-img"
              id="javascript"
              alt="javascript"
            />
            <h3 className="skill-name">javascript</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={react} className="skill-img" id="react" alt="react" />
            <h3 className="skill-name">react</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={node} className="skill-img" id="node" alt="node.js" />
            <h3 className="skill-name">node.js</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={git} className="skill-img" id="git" alt="git" />
            <h3 className="skill-name">git</h3>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
