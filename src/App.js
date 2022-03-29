import "./App.css";
import "./styles/global.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import React, { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import useObserver from "./hooks/useObserver";

function App() {
  /*------------------------------------------------- */
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1024 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", handleResize);

  /*------------------------------------------------- */

  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [observer, setElements, entries] = useObserver({
    threshold: 1,
    root: null,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".content-section");
    setElements(sections);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "section2":
            setShowAbout(true);
            break;
          case "section3":
            setShowServices(true);
            break;
          case "section4":
            setShowPortfolio(true);
            break;
          case "section5":
            setShowContact(true);
            break;
          default:
            break;
        }
        observer.unobserve(entry.target);
      }
    });
  }, [entries, observer]);

  /*------------------------------------------------- */
  return (
    <div className="App">
      <NavBar
        isMobile={isMobile}
        activeSection={{ home: false, about: false, portfolio: false }}
      />
      <section id="section1">
        <Home />
      </section>
      <section className="flex-container content-section" id="section2">
        {showAbout ? <About /> : null}
      </section>
      {/* <div className="lazy about"></div> */}
      <section className="flex-container content-section" id="section3">
        {showServices ? <Services /> : null}
      </section>
      <section className="flex-container content-section" id="section4">
        {showPortfolio ? <Portfolio /> : null}
      </section>
      <section className="flex-container content-section" id="section5">
        {showContact ? <Contact /> : null}
      </section>
      <Footer />
    </div>
  );
}

export default App;
