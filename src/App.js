import "./App.css";
import "./Styles/headerStyles.css";
import "./Styles/about.css";
import "./Styles/services.css";
import "./Styles/global.css";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
