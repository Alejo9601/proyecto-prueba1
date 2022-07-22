import "./styles/global.css";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="section1">
        <Home />
      </section>
      <section className="flex-container content-section" id="section2">
        <About />
      </section>
      <section className="flex-container content-section" id="section3">
        <Services />
      </section>
      <section className="flex-container content-section" id="section4">
        <Portfolio />
      </section>
      <section className="flex-container content-section" id="section5">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
