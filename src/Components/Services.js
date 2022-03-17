import React from "react";
import design from "../img/graphic-design.png";
import responsive from "../img/smartphone.png";
import development from "../img/web-development.png";
import social from "../img/social-media.png";
import performance from "../img/performance.png";
import seo from "../img/seo.png";

const Services = () => {
  return (
    <section className="flex-container services">
      <div id="flex-services">
        <h1 className="section-title">Services</h1>
        <div className="grid-container" id="services-detail">
          <div className="flex-container service-item" id="responsive">
            <img className="service-img" alt="responsive" src={responsive} />
            <h3 className="service-name">Fully Responsive</h3>
            <p>
              Your site will display properly on any device, including desktop
              computers, tablets and mobile phones.
            </p>
          </div>

          <div className="flex-container service-item" id="creative-design">
            <img className="service-img" alt="design" src={design} />
            <h3 className="service-name">Creative Design</h3>
            <p>
              A good and attractive web design helps you keep your leads on your
              site, which is the digital face of your business.
            </p>
          </div>

          <div className="flex-container service-item" id="development">
            <img className="service-img" alt="development" src={development} />
            <h3 className="service-name">Development</h3>
            <p>
              I know the importance of web design and can help you create a
              website you’ll love.
            </p>
          </div>

          <div className="flex-container service-item" id="social-media">
            <img className="service-img" alt="social" src={social} />
            <h3 className="service-name">Social Media Integration</h3>
            <p>
              There are a lot of social platforms out there, and you should
              promote your presence on them on your website
            </p>
          </div>

          <div className="flex-container service-item" id="performance">
            <img className="service-img" alt="performance" src={performance} />
            <h3 className="service-name">Performance</h3>
            <p>
              Retaining users is crucial to improving conversions.
              High-performing sites engage and retain users
            </p>
          </div>

          <div className="flex-container service-item" id="seo">
            <img className="service-img" alt="seo" src={seo} />
            <h3 className="service-name">SEO</h3>
            <p>
              I will optimize your site with intelligent Search Engine
              Optimization strategy to generate leads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
