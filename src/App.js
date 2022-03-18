import "./App.css";
import "./Styles/global.css";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import React, { useState, useEffect } from "react";

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
    </div>
  );
}

export default App;
