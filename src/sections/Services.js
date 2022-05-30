import { useContext, useEffect, useRef } from "react";
import "../styles/services.css";
import services from "../assets/json/services.json";
import SectionContext from "../context/SectionContext";
import ServiceItem from "../components/ServiceItem";

const Services = () => {
  const flexContent = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "services") {
      flexContent.current.style.opacity = 1;
      flexContent.current.style.visibility = "visible";
    }
  }, [activeSection]);

  return (
    <div className="flex-content services" ref={flexContent}>
      <h1 className="section-title">Services</h1>
      <h2 className="section-subtitle-intro">Services i offer to my clients</h2>
      <div className="grid-container" id="services-detail">
        {services.map((service) => {
          return (
            <ServiceItem
              name={service.serviceName}
              description={service.description}
              img={service.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
