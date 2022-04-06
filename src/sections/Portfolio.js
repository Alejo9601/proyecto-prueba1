import { useEffect, useRef } from "react";
import "../styles/portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import municipalidad from "../assets/img/municipalidad.png";
import sisConv from "../assets/img/sisconv.jpg";
import sisElectoral from "../assets/img/electoral.jpg";

const Portfolio = ({ observer, entries }) => {
  const flexContent = useRef();

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.id === "section4") {
        flexContent.current.style.opacity = 1;
        flexContent.current.style.visibility = "visible";
      }
    });
  }, [entries, observer]);

  return (
    <>
      <div className="flex-content portfolio" ref={flexContent}>
        <h1 className="section-title">Portfolio</h1>
        <h2 className="section-subtitle-intro">
          These are some project i have worked on
        </h2>
        <div className="grid-container" id="portfolio-detail">
          <PortfolioCard
            proyId="proyect-one"
            proyName="Municipio 28 de Noviembre"
            usedTechs="Html - css - JavaScript"
            proyImg={municipalidad}
          />
          <PortfolioCard
            proyId="proyect-two"
            proyName="Sistema Electoral"
            usedTechs="Html - css - JavaScript"
            proyImg={sisConv}
          />
          <PortfolioCard
            proyId="proyect-three"
            proyName="Sis-CONV"
            usedTechs="Html - css - JavaScript"
            proyImg={sisElectoral}
          />
          <PortfolioCard
            proyId="proyect-one"
            proyName="Municipio 28 de Noviembre"
            usedTechs="Html - css - JavaScript"
            proyImg={municipalidad}
          />
          <PortfolioCard
            proyId="proyect-one"
            proyName="Municipio 28 de Noviembre"
            usedTechs="Html - css - JavaScript"
            proyImg={municipalidad}
          />
          <PortfolioCard
            proyId="proyect-one"
            proyName="Municipio 28 de Noviembre"
            usedTechs="Html - css - JavaScript"
            proyImg={municipalidad}
          />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
