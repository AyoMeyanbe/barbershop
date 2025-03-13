import { useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Prices from "./Components/Prices/Prices";
import Team from "./Components/Team/Team";
import Testimonials from "./Components/Testimonials/Testimonials";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  const [carousel, setCarousel] = useState(false);
  const [imgId, setImgId] = useState(0);
  console.log(imgId)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Prices/>
      <Gallery setCarousel={setCarousel} setImgId={setImgId}/>
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <Carousel carousel={carousel} setCarousel={setCarousel} imgId={imgId} setImgId={setImgId}/>
    </div>
  );
}

export default App;
