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
import Animation from "./Components/Animation";
import SideBar from "./Components/Sidebar";

function App() {
  const [loading, setLoading] = useState(false)

/*   useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  },[loading]) */

  return (
    <AnimatePresence
      onExitComplete={() => null}
    >
      {loading ?
        <Loading /> :
        <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.5
        }}
        id="Home" className="w-full relative text-text">
          <Header />
          <SideBar />
          <Hero />
          <div className="relative z-20">
            <About />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
        </motion.main >}
    </AnimatePresence>
  );
}

export default App;
