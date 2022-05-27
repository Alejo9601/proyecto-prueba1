import { useContext, useEffect, useRef } from "react";
import "../styles/portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import SectionContext from "../context/SectionContext";
import proyects from "../assets/json/proyects.json";

// const proyects = [
//   {
//     proyectName: "Marvel API",
//     technologies: "React.js - Styled Components",
//     urlRepo: "https://github.com/Alejo9601/marvel-api.git",
//     urlSite: "https://marvelsite.vercel.app",
//     img: "marvel.jpg",
//   },
//   {
//     proyectName: "Gubernamental Page",
//     technologies: "React - CSS",
//     urlRepo: "https://github.com/Alejo9601/gubernamental-website.git",
//     urlSite: "https://gubernamental-website.vercel.app",
//     img: "municipalidad.png",
//   },
//   {
//     proyectName: "SisCONV",
//     technologies: "Java - Hibernate - MySQL",
//     urlRepo: "https://github.com/Alejo9601/SisCONV.git",
//     urlSite: "",
//     img: "sisconv.jpg",
//   },
//   {
//     proyectName: "Web on Process",
//     technologies: "I think i´ll use React.js",
//     urlRepo: "",
//     urlSite: "",
//     img: "webOnProcess.jpeg",
//   },
// ];

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
        {proyects.map((proy) => {
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
