import "./App.css";
import "./styles/global.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import useObserver from "./hooks/useObserver";
import React, { useEffect } from "react";

function App() {
  const [observer, setElements, entries] = useObserver({
    threshold: 1,
    root: null,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".content-section");
    setElements(sections);
  }, [setElements]);

  /*------------------------------------------------- */
  return (
    <div className="App">
      <NavBar />
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
