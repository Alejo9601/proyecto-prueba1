import "./App.css";
import "./Styles/headerStyles.css";
import "./Styles/global.css";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
