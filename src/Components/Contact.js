import React from "react";
import "../Styles/contact.css";
import gmail from "../assets/icons/gmail.png";
import github from "../assets/icons/github.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/linkedin.png";

const Contact = () => {
  return (
    <>
      <section className="flex-container content-section">
        <div className="flex-content" id="contact">
          <h1 className="section-title">Contact</h1>
          <h2 className="section-subtitle-intro">
            Contact me if you want us to work together
          </h2>
          <div className="flex-container contact-item" id="">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPGFjDGBffFvZLjSNnFgScgtNRFHgRpnfxPCXqGNjBzMPThptSbJtzLSCQpPSXpwStVPzdH"
              target="_blank"
            >
              <img className="img-64px" src={gmail} alt="" />
            </a>
            <h3 className="img-description  contact-label">Mail me</h3>
          </div>

          <div className="flex-container contact-item" id="">
            <a href="https://github.com/Alejo9601" target="_blank">
              <img className="img-64px" src={github} alt="" />
            </a>
            <h3 className="img-description  contact-label">Follow me</h3>
          </div>

          <div className="flex-container contact-item" id="">
            <img className="img-640px" src={twitter} alt="" />
            <h3 className="img-description  contact-label">Follow me</h3>
          </div>

          <div className="flex-container contact-item" id="">
            <a
              href="https://www.linkedin.com/in/alejandro-juarez96"
              target="_blank"
            >
              <img className="img-640px" src={linkedin} alt="" />
            </a>
            <h3 className="img-description contact-label">Contact me</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
