import { useContext, useEffect, useRef } from "react";
import "../styles/contact.css";
import contactMeans from "../assets/json/contact_means.json";
import SectionContext from "../context/SectionContext";
import ContactItem from "../components/ContactItem";
import { showSection } from "../helpers/showSection";
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";

const Contact = () => {
  const sectionRef = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "contact") showSection(sectionRef);
  }, [activeSection]);

  return (
    <section className="flex-content contact" ref={sectionRef}>
      <SectionTitle textTitle="Contact" />
      <SectionSubtitle textTitle="Contact me if you want us to work together" />
      {contactMeans.map((mean, index) => {
        return (
          <ContactItem
            key={index}
            img={mean.icon}
            refTo={mean.link}
            descriptionTag={mean.name}
          />
        );
      })}
    </section>
  );
};

export default Contact;
