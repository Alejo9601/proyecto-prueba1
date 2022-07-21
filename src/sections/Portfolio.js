import { useContext, useEffect, useRef } from "react";
import "../styles/portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import SectionContext from "../context/SectionContext";
import projects from "../assets/json/projects.json";

const Portfolio = () => {
  const flexContent = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "portfolio") {
      flexContent.current.style.opacity = 1;
      flexContent.current.style.visibility = "visible";
    }
  }, [activeSection]);

  return (
    <div className="flex-content portfolio" ref={flexContent}>
      <h1 className="section-title">Portfolio</h1>
      <h2 className="section-subtitle-intro">
        These are some projects i have worked on
      </h2>
      <div className="grid-container" id="portfolio-detail">
        {projects.map((proy) => {
          return (
            <PortfolioCard
              proyName={proy.proyectName}
              usedTechs={proy.technologies}
              proyImg={require(`../assets/img/${proy.img}`)}
              urlRepo={proy.urlRepo}
              urlSite={proy.urlSite}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
