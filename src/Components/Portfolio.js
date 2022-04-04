import { useEffect, useState, useRef } from "react";
import "../styles/portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = ({ observer, entries }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.id === "section4") {
        setShow(true);
        observer.unobserve(entry.target);
      }
    });
  }, [entries, observer]);

  return (
    <>
      {show ? (
        <div className="flex-content portfolio">
          <h1 className="section-title">Portfolio</h1>
          <h2 className="section-subtitle-intro">
            These are some project i have worked on
          </h2>
          <div className="grid-container" id="portfolio-detail">
            <PortfolioCard
              proyId="proyect-one"
              proyName="Municipio 28 de Noviembre"
              usedTechs="Html - css - JavaScript"
            />
            <PortfolioCard
              proyId="proyect-two"
              proyName="Sistema Electoral"
              usedTechs="Html - css - JavaScript"
            />
            <PortfolioCard
              proyId="proyect-three"
              proyName="Sis-CONV"
              usedTechs="Html - css - JavaScript"
            />
            <PortfolioCard
              proyId="proyect-one"
              proyName="Municipio 28 de Noviembre"
              usedTechs="Html - css - JavaScript"
            />
            <PortfolioCard
              proyId="proyect-one"
              proyName="Municipio 28 de Noviembre"
              usedTechs="Html - css - JavaScript"
            />
            <PortfolioCard
              proyId="proyect-one"
              proyName="Municipio 28 de Noviembre"
              usedTechs="Html - css - JavaScript"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Portfolio;
