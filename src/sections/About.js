import { useContext, useEffect, useRef } from "react";
import "../styles/about.css";
import SectionContext from "../context/SectionContext";
import AboutSkills from "../components/AboutSkills";
import AboutDescription from "../components/AboutDescription";
import { showSection } from "../helpers/showSection";

const About = () => {
  const sectionRef = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "about") showSection(sectionRef);
  }, [activeSection]);

  return (
    <section className="flex-content about" ref={sectionRef}>
      <h1 className="section-title">About Me</h1>
      <AboutDescription />
      <AboutSkills />
    </section>
  );
};

export default About;
