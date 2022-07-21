import { useContext, useEffect, useRef } from "react";
import "../styles/services.css";
import services from "../assets/json/services.json";
import SectionContext from "../context/SectionContext";
import ServiceItem from "../components/ServiceItem";
import { showSection } from "../helpers/showSection";

const Services = () => {
  const sectionRef = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "services") showSection(sectionRef);
  }, [activeSection]);

  return (
    <section className="flex-content services" ref={sectionRef}>
      <h1 className="section-title">Services</h1>
      <h2 className="section-subtitle-intro">Services i offer to my clients</h2>
      <div className="grid-container" id="services-detail">
        {services.map((service, index) => {
          return (
            <ServiceItem
              key={index}
              name={service.serviceName}
              description={service.description}
              img={service.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
