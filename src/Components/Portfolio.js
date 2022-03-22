import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="flex-content" id="portfolio">
      <h1 className="section-title">Portfolio</h1>
      <h2 className="section-subtitle-intro">
        These are some project i have worked on
      </h2>
      <div className="grid-container" id="portfolio-detail">
        <div
          className="flex-container portfolio-item"
          id="proyect-municipalidad"
        >
          <h3 className="service-name">Proyecto 1</h3>
        </div>

        <div className="flex-container portfolio-item" id="proyect-electoral">
          <h3 className="service-name">Proyecto 2</h3>
        </div>

        <div className="flex-container portfolio-item" id="proyect-sisconv">
          <h3 className="service-name">Proyecto 3</h3>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
