import "./App.css";
import "./Styles/global.css";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import React, { useState, useEffect } from "react";

function App() {
  const [isMovile, setIsMovile] = useState(
    window.innerWidth < 1024 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMovile(true);
    } else {
      setIsMovile(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <div className="App">
      <NavBar isMovile={isMovile} />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
