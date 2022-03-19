import "./App.css";
import "./Styles/global.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
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

  return (
    <div className="App">
      <NavBar isMobile={isMobile} />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
