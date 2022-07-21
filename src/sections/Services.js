import { useContext, useEffect, useRef } from "react";
import "../styles/services.css";
import services from "../assets/json/services.json";
import SectionContext from "../context/SectionContext";
import ServiceItem from "../components/ServiceItem";
import { showSection } from "../helpers/showSection";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from "../components/SectionIntro";

const Services = () => {
  const sectionRef = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "services") showSection(sectionRef);
  }, [activeSection]);

  return (
    <section className="flex-content services" ref={sectionRef}>
      <SectionTitle textTitle="Services" />
      <SectionIntro textTitle="Services i offer to my clients" />
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
