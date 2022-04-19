import RefButton from "./RefButton";

const PortfolioCard = ({ proyName, proyImg, usedTechs, urlRepo, urlSite }) => {
  return (
    <>
      <div className="portfolio-item">
        <picture className="image-container">
          <source type="image/png" srcSet={proyImg} />
          <img className="card-image" alt="portfolio-item"></img>
        </picture>
        <div className="flex-container item-overlay">
          <h3 className="dark-background-text" id="title">
            {proyName}
          </h3>
          <p className="dark-background-text" id="subtitle">
            {usedTechs}
          </p>
          <div className="flex-container" id="buttons-box">
            <RefButton
              className="link-website"
              reference={urlSite}
              btnText="Website"
            />
            <RefButton
              className="link-repo"
              reference={urlRepo}
              btnText="GitHub"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
