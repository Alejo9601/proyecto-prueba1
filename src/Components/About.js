import React from "react";
import "../Styles/about.css";

const AboutMe = () => {
  return (
    <section className="flex-container about">
      <div className="flex-container" id="flex-about">
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
        </section>
        <section className="grid-container about-skills">
          <h2>My Skills</h2>
          <div className="skill" id="html">
            HTML
          </div>
          <div className="skill" id="css">
            CSS
          </div>
          <div className="skill" id="javascript">
            javascript
          </div>
          <div className="skill" id="react">
            REACT
          </div>
          <div className="skill" id="node.js">
            NODE.JS
          </div>
          <div className="skill" id="git">
            GIT
          </div>
          <div className="skill" id="react">
            REACT
          </div>
          <div className="skill" id="node.js">
            NODE.JS
          </div>
          <div className="skill" id="git">
            GIT
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
