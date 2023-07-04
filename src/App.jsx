import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import { AnimatePresence, motion } from "framer-motion";
import SideBar from "./Components/Sidebar";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <main
      id="Home"
      className="w-full relative text-text"
    >
      <Header />
      <SideBar />
      <Hero />
      <div className="relative z-20">
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
