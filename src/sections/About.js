import { useContext, useEffect, useRef } from "react";
import "../styles/about.css";
import SectionContext from "../context/SectionContext";
import AboutSkills from "../components/AboutSkills";
import AboutDescription from "../components/AboutDescription";
import { showSection } from "../helpers/showSection";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  const sectionRef = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "about") showSection(sectionRef);
  }, [activeSection]);

  return (
    <section className="flex-content about" ref={sectionRef}>
      <SectionTitle textTitle="About Me" />
      <AboutDescription />
      <AboutSkills />
    </section>
  );
};

export default About;
