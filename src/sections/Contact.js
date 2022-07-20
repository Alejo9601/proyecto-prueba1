import { useContext, useEffect, useRef } from "react";
import "../styles/contact.css";
import contactMeans from "../assets/json/contact_means.json";
// import gmail from "../assets/icons/gmail.png";
// import github from "../assets/icons/github.png";
// import twitter from "../assets/icons/twitter.png";
// import linkedin from "../assets/icons/linkedin.png";
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
      {/* <div className="flex-container contact-item" id="">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPGFjDGBffFvZLjSNnFgScgtNRFHgRpnfxPCXqGNjBzMPThptSbJtzLSCQpPSXpwStVPzdH"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img-64px" src={gmail} alt="" />
        </a>
        <h3 className="img-description  contact-label">Mail Me</h3>
      </div>

      <div className="flex-container contact-item" id="">
        <a href="https://github.com/Alejo9601" target="_blank" rel="noreferrer">
          <img className="img-64px" src={github} alt="" />
        </a>
        <h3 className="img-description  contact-label">Follow Me</h3>
      </div>

      <div className="flex-container contact-item" id="">
        <a
          href="https://twitter.com/AlejandroJ1896"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img-640px" src={twitter} alt="" />
        </a>
        <h3 className="img-description  contact-label">Follow Me</h3>
      </div>

      <div className="flex-container contact-item" id="">
        <a
          href="https://www.linkedin.com/in/alejandro-juarez96"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img-640px" src={linkedin} alt="" />
        </a>
        <h3 className="img-description contact-label">Contact Me</h3>
      </div> */}
    </div>
  );
};

export default Contact;
