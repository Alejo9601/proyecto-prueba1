import { useEffect, useRef } from "react";
import "../styles/about.css";
import AboutSkills from "../components/AboutSkills";
import AboutDescription from "../components/AboutDescription";
import { showSection } from "../helpers/showSection";
import SectionTitle from "../components/SectionTitle";
import useSectionObserver from "../hooks/useSectionObserver";

const About = () => {
  const sectionRef = useRef();
  const intersectedSection = useSectionObserver();

  useEffect(() => {
    if (intersectedSection === "about") showSection(sectionRef);
  }, [intersectedSection]);

  return (
    <section className="flex-content about" ref={sectionRef}>
      <SectionTitle textTitle="About Me" />
      <AboutDescription />
      <AboutSkills />
    </section>
  );
};

export default About;
