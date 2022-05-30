import { useContext, useEffect, useRef } from "react";
import "../styles/about.css";
import cv from "../assets/cv.pdf";
import RefButton from "../components/RefButton";
import SectionContext from "../context/SectionContext";
import skills from "../assets/json/skills.json";

const About = () => {
  const flexContent = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "about") {
      flexContent.current.style.opacity = 1;
      flexContent.current.style.visibility = "visible";
    }
  }, [activeSection]);

  return (
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
          framework. I also have object-oriented programming experience building
          native applications with JAVA during college. I am always seeking to
          improve my skills and continue growing professionally, in order to be
          able to integrate a development team in my first job.
        </p>
        <RefButton
          className="cv-download"
          reference={cv}
          btnText="Download CV"
        />
      </section>
      <section className="grid-container about-skills">
        <h2 className="section-subtitle grid-title">My Skills</h2>
        {skills.map((skill) => {
          return (
            <div className="flex-container skill-container">
              <img
                src={require(`../assets/icons/${skill.img}`)}
                className="img-64px"
                id={skill.name}
                alt={skill.name}
              />
              <h3 className="img-description">{skill.name}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default About;
