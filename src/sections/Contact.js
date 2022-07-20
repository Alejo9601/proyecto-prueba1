import { useContext, useEffect, useRef } from "react";
import "../styles/contact.css";
import contactMeans from "../assets/json/contact_means.json";
import SectionContext from "../context/SectionContext";
import ContactItem from "../components/ContactItem";

const Contact = () => {
  const flexContent = useRef();
  const activeSection = useContext(SectionContext);

  useEffect(() => {
    if (activeSection === "contact") {
      flexContent.current.style.opacity = 1;
      flexContent.current.style.visibility = "visible";
    }
  }, [activeSection]);

  return (
    <div className="flex-content contact" ref={flexContent}>
      <h1 className="section-title">Contact</h1>
      <h2 className="section-subtitle-intro">
        Contact me if you want us to work together
      </h2>
      {contactMeans.map((mean) => {
        return (
          <ContactItem
            img={mean.icon}
            refTo={mean.link}
            descriptionTag={mean.name}
          />
        );
      })}
    </div>
  );
};

export default Contact;
