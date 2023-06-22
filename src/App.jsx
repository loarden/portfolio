import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {

  return (
    <>
      <main id="Home" className="w-full relative text-text">
        <Header />
        <Hero />
        <div className="relative z-20">  
        <About />
        <Portfolio />
        <Contact />
        </div>
      </main >
    </>
  );
}

export default App;
