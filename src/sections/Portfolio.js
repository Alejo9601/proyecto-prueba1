import { useContext, useEffect, useRef } from "react";
import "../styles/portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import SectionContext from "../context/SectionContext";

const marvel = {
  proyectName: "Marvel API",
  technologies: "React.js - Styled Components",
  urlRepo: "https://github.com/Alejo9601/marvel-api.git",
  urlSite: "https://marvelsite.vercel.app",
  img: "marvel.jpg",
};
const gubPage = {
  proyectName: "Gubernamental Page",
  technologies: "React - CSS",
  urlRepo: "https://github.com/Alejo9601/gubernamental-website.git",
  urlSite: "https://gubernamental-website.vercel.app",
  img: "municipalidad.png",
};
const sisConv = {
  proyectName: "SisCONV",
  technologies: "Java - Hibernate - MySQL",
  urlRepo: "https://github.com/Alejo9601/SisCONV.git",
  urlSite: "",
  img: "sisconv.jpg",
};
const webOnProcess = {
  proyectName: "Web on Process",
  technologies: "I think i´ll use React.js",
  urlRepo: "",
  urlSite: "",
  img: "webOnProcess.jpeg",
};

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
    <>
      <div className="flex-content portfolio" ref={flexContent}>
        <h1 className="section-title">Portfolio</h1>
        <h2 className="section-subtitle-intro">
          These are some projects i have worked on
        </h2>
        <div className="grid-container" id="portfolio-detail">
          {/* {() => {
            console.log("entre a la funcion");
            for (let i = 0; i <= 5; i++) {
              return (
                <PortfolioCard
                  proyId={`Proyect-${i + 1}`}
                  proyName={proyects[i].proyectName}
                  usedTechs={proyects[i].technologies}
                  proyImg={require(`../assets/img/${proyects[i].img}`)}
                />
              );
            }
          }} */}
          <PortfolioCard
            proyName={gubPage.proyectName}
            usedTechs={gubPage.technologies}
            proyImg={require(`../assets/img/${gubPage.img}`)}
            urlRepo={gubPage.urlRepo}
            urlSite={gubPage.urlSite}
          />
          <PortfolioCard
            proyName={marvel.proyectName}
            usedTechs={marvel.technologies}
            proyImg={require(`../assets/img/${marvel.img}`)}
            urlRepo={marvel.urlRepo}
            urlSite={marvel.urlSite}
          />
          <PortfolioCard
            proyName={sisConv.proyectName}
            usedTechs={sisConv.technologies}
            proyImg={require(`../assets/img/${sisConv.img}`)}
            urlRepo={sisConv.urlRepo}
          />
          <PortfolioCard
            proyName={webOnProcess.proyectName}
            usedTechs={webOnProcess.technologies}
            proyImg={require(`../assets/img/${webOnProcess.img}`)}
          />
          <PortfolioCard
            proyName={webOnProcess.proyectName}
            usedTechs={webOnProcess.technologies}
            proyImg={require(`../assets/img/${webOnProcess.img}`)}
          />
          <PortfolioCard
            proyName={webOnProcess.proyectName}
            usedTechs={webOnProcess.technologies}
            proyImg={require(`../assets/img/${webOnProcess.img}`)}
          />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
