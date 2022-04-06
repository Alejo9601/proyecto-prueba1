import "./App.css";
import "./styles/global.css";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import useObserver from "./hooks/useObserver";
import React, { useEffect } from "react";

function App() {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.3,
    root: null,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".content-section");
    setElements(sections);
  }, [setElements]);

  /*------------------------------------------------- */
  return (
    <div className="App">
      <Header />
      <section id="section1">
        <Home observer={observer} entries={entries} />
      </section>
      <section className="flex-container content-section" id="section2">
        <About observer={observer} entries={entries} />
      </section>
      <section className="flex-container content-section" id="section3">
        <Services observer={observer} entries={entries} />
      </section>
      <section className="flex-container content-section" id="section4">
        <Portfolio observer={observer} entries={entries} />
      </section>
      <section className="flex-container content-section" id="section5">
        <Contact observer={observer} entries={entries} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
