import { useEffect, useRef } from "react";
import "../styles/contact.css";
import contactMeans from "../assets/json/contact_means.json";
import ContactItem from "../components/ContactItem";
import { showSection } from "../helpers/showSection";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from "../components/SectionIntro";
import useSectionObserver from "../hooks/useSectionObserver";

const Contact = () => {
  const sectionRef = useRef();
  const intersectedSection = useSectionObserver();

  useEffect(() => {
    if (intersectedSection === "contact") showSection(sectionRef);
  }, [intersectedSection]);

  return (
    <section className="flex-content contact" ref={sectionRef}>
      <SectionTitle textTitle="Contact" />
      <SectionIntro textTitle="Contact me if you want us to work together" />
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
