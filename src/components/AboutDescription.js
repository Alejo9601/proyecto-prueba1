import RefButton from "../components/RefButton";
import cv from "../assets/cv.pdf";

const AboutDescription = () => {
  return (
    <section className="about-description">
      <h2 className="section-subtitle">
        I´m Alejandro Juarez - Systems Analyst /
      </h2>
      <h2 className="section-subtitle">Web Developer</h2>
      <p className="section-paragraph" id="about-me">
        Frontend developer with self-taught experience building websites and web
        applications, particularly, I specialize in REACT framework. I also have
        object-oriented programming experience building native applications with
        JAVA during college. I am always seeking to improve my skills and
        continue growing professionally, in order to be able to integrate a
        development team in my first job.
      </p>
      <RefButton className="cv-download" reference={cv} btnText="Download CV" />
    </section>
  );
};

export default AboutDescription;
