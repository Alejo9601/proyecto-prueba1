import { useRef } from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  const overlay1 = useRef();
  const overlay2 = useRef();
  const overlay3 = useRef();

  const activeOverlay = "item-overlay active";
  const inactiveOverlay = "item-overlay";

  const proyMouseOver = (event) => {
    console.log(event.target);
    switch (event.target.id) {
      case "proyect-one":
        console.log("entre");
        overlay1.current.className = activeOverlay;
        break;
      case "proyect-two":
        overlay2.current.className = activeOverlay;
        break;
      case "proyect-three":
        overlay3.current.className = activeOverlay;
        break;
      default:
        break;
    }
  };
  const proyMouseLeave = (e) => {
    overlay1.current.className = inactiveOverlay;
    overlay2.current.className = inactiveOverlay;
    overlay3.current.className = inactiveOverlay;
  };

  return (
    <div className="flex-content" id="portfolio">
      <h1 className="section-title">Portfolio</h1>
      <h2 className="section-subtitle-intro">
        These are some project i have worked on
      </h2>
      <div className="grid-container" id="portfolio-detail">
        <div
          className="flex-container portfolio-item"
          id="proyect-one"
          onMouseOver={proyMouseOver}
          onMouseLeave={proyMouseLeave}
        >
          <div className={inactiveOverlay} ref={overlay1}>
            <h3 className="img-description dark-background-label">
              Proyecto 1
            </h3>
          </div>
        </div>

        <div
          className="flex-container portfolio-item"
          id="proyect-two"
          onMouseOver={proyMouseOver}
          onMouseLeave={proyMouseLeave}
        >
          <div className={inactiveOverlay} ref={overlay2}>
            <h3 className="img-description dark-background-label">
              Proyecto 2
            </h3>
          </div>
        </div>

        <div
          className="flex-container portfolio-item"
          id="proyect-three"
          onMouseOver={proyMouseOver}
          onMouseLeave={proyMouseLeave}
        >
          <div className={inactiveOverlay} ref={overlay3}>
            <h3 className="img-description dark-background-label">
              Proyecto 3
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
