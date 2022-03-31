import { useEffect, useState } from "react";
import "../styles/services.css";
import design from "../assets/icons/graphic-design.png";
import responsive from "../assets/icons/smartphone.png";
import development from "../assets/icons/web-development.png";
import social from "../assets/icons/social-media.png";
import performance from "../assets/icons/performance.png";
import seo from "../assets/icons/seo.png";

const Services = ({ observer, entries }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.id === "section3") {
        setShow(true);
        observer.unobserve(entry.target);
      }
    });
  }, [entries, observer]);

  return (
    <>
      {show ? (
        <div className="flex-content services">
          <h1 className="section-title">Services</h1>
          <h2 className="section-subtitle-intro">
            Services i offer to my clients
          </h2>
          <div className="grid-container" id="services-detail">
            <div className="flex-container service-item" id="responsive">
              <img className="service-img" alt="responsive" src={responsive} />
              <h3 className="service-name">Fully Responsive</h3>
              <p className="section-paragraph description">
                Your site will display properly on any device, including desktop
                computers, tablets and mobile phones.
              </p>
            </div>

            <div className="flex-container service-item" id="creative-design">
              <img className="service-img" alt="design" src={design} />
              <h3 className="service-name">Creative Design</h3>
              <p className="section-paragraph description">
                A good and attractive web design helps you keep your leads on
                your site, which is the digital face of your business.
              </p>
            </div>

            <div className="flex-container service-item" id="development">
              <img
                className="service-img"
                alt="development"
                src={development}
              />
              <h3 className="service-name">Development</h3>
              <p className="section-paragraph description">
                I know the importance of web design and can help you create a
                website you’ll love.
              </p>
            </div>

            <div className="flex-container service-item" id="social-media">
              <img className="service-img" alt="social" src={social} />
              <h3 className="service-name">Social Media Integration</h3>
              <p className="section-paragraph description">
                There are a lot of social platforms out there, and you should
                promote your presence on them on your website
              </p>
            </div>

            <div className="flex-container service-item" id="performance">
              <img
                className="service-img"
                alt="performance"
                src={performance}
              />
              <h3 className="service-name">Performance</h3>
              <p className="section-paragraph description">
                Retaining users is crucial to improving conversions.
                High-performing sites engage and retain users
              </p>
            </div>

            <div className="flex-container service-item" id="seo">
              <img className="service-img" alt="seo" src={seo} />
              <h3 className="service-name">SEO</h3>
              <p className="section-paragraph description">
                I will optimize your site with intelligent Search Engine
                Optimization strategy to generate leads.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Services;
