import { useContext, useEffect, useRef } from "react";
import "../styles/about.css";
import css from "../assets/icons/css-3.png";
import html from "../assets/icons/html-5.png";
import javascript from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/nodejs.png";
import git from "../assets/icons/git.png";
import cv from "../assets/cv.pdf";
import RefButton from "../components/RefButton";
import SectionContext from "../context/SectionContext";

const AboutMe = () => {
  const flexContent = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "about") {
      flexContent.current.style.opacity = 1;
      flexContent.current.style.visibility = "visible";
    }
  }, [activeSection]);

  return (
    <>
      <div className="flex-content about" ref={flexContent}>
        <h1 className="section-title">About Me</h1>
        <section className="about-description">
          <h2 className="section-subtitle">
            I´m Alejandro Juarez - Web developer /
          </h2>
          <h2 className="section-subtitle">Software engineer</h2>
          <p className="section-paragraph" id="about-me">
            I am a Frontend developer with self-taught experience building
            websites and web applications, particularly, I specialize in REACT
            framework. I also have object-oriented programming experience
            building native applications with JAVA during college. I am always
            seeking to improve my skills and continue growing professionally, in
            order to be able to integrate a development team in my first job.
          </p>
          <RefButton
            className="cv-download"
            reference={cv}
            btnText="Download CV"
          />
        </section>
        <section className="grid-container about-skills">
          <h2 className="section-subtitle grid-title">My Skills</h2>
          <div className="flex-container skill-container">
            <img src={html} className="img-64px" id="html" alt="html" />
            <h3 className="img-description">html</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={css} className="img-64px" id="css" alt="css" />
            <h3 className="img-description">css</h3>
          </div>
          <div className="flex-container skill-container">
            <img
              src={javascript}
              className="img-64px"
              id="javascript"
              alt="javascript"
            />
            <h3 className="img-description">javascript</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={react} className="img-64px" id="react" alt="react" />
            <h3 className="img-description">react</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={node} className="img-64px" id="node" alt="node.js" />
            <h3 className="img-description">node.js</h3>
          </div>
          <div className="flex-container skill-container">
            <img src={git} className="img-64px" id="git" alt="git" />
            <h3 className="img-description">git</h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
