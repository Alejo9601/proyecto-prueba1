import { useContext, useEffect, useRef } from "react";
import "../styles/about.css";
import SectionContext from "../context/SectionContext";
import AboutSkills from "../components/AboutSkills";
import AboutDescription from "../components/AboutDescription";

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
      <AboutDescription />
      <AboutSkills />
    </div>
  );
};

export default About;
