import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Prices from "./Components/Prices/Prices";
import Team from "./Components/Team/Team";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Prices/>
      <Gallery />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
