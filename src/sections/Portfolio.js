import { useEffect, useRef } from "react";
import "../styles/portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import projects from "../assets/json/projects.json";
import { showSection } from "../helpers/showSection";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from "../components/SectionIntro";
import useSectionObserver from "../hooks/useSectionObserver";

const Portfolio = () => {
  const sectionRef = useRef();
  const intersectedSection = useSectionObserver();

  useEffect(() => {
    if (intersectedSection === "portfolio") showSection(sectionRef);
  }, [intersectedSection]);

  return (
    <section className="flex-content portfolio" ref={sectionRef}>
      <SectionTitle textTitle="Portfolio" />
      <SectionIntro textTitle="These are some projects i have worked on" />
      <div className="grid-container" id="portfolio-detail">
        {projects.map((proy, index) => {
          return (
            <PortfolioCard
              key={index}
              proyName={proy.proyectName}
              usedTechs={proy.technologies}
              proyImg={proy.img}
              urlRepo={proy.urlRepo}
              urlSite={proy.urlSite}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
