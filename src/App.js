import "./App.css";
import "./Styles/headerStyles.css";
import "./Styles/global.css";
import Banner from "./Components/Banner";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
