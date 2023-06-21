import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {

  return (
    <>
      <main id="Home" className="w-full relative text-text">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
