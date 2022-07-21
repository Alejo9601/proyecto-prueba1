import { useContext, useEffect, useRef } from "react";
import "../styles/portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import SectionContext from "../context/SectionContext";
import projects from "../assets/json/projects.json";
import { showSection } from "../helpers/showSection";

const Portfolio = () => {
  const sectionRef = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "portfolio") showSection(sectionRef);
  }, [activeSection]);

  return (
    <section className="flex-content portfolio" ref={sectionRef}>
      <h1 className="section-title">Portfolio</h1>
      <h2 className="section-subtitle-intro">
        These are some projects i have worked on
      </h2>
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
