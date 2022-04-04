import { useRef } from "react";

const PortfolioCard = ({ proyId, proyName, usedTechs }) => {
  const activeOverlay = "flex-container item-overlay active";
  const inactiveOverlay = "flex-container item-overlay";
  const overlay = useRef();

  const proyMouseOver = (event) => {
    overlay.current.className = activeOverlay;
  };

  const proyMouseLeave = (e) => {
    overlay.current.className = inactiveOverlay;
  };

  return (
    <>
      <div
        className="portfolio-item"
        onMouseOver={proyMouseOver}
        onMouseLeave={proyMouseLeave}
      >
        <div className="image-container" id={proyId}>
          <div className={inactiveOverlay} ref={overlay}>
            <h3 className="img-description dark-background-text">{proyName}</h3>
            <p className="dark-background-text">{usedTechs}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
