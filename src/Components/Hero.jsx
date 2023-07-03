import AnimatedBg from "./AnimatedBg";
import { motion, useScroll, useTransform } from "framer-motion";
import NextPage from "./NextPage";

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <>
      <AnimatedBg />
      <header className="relative h-screen max-w-7xl mx-auto flex flex-col z-0 justify-center items-center">
        <motion.article
          style={{ y: y1 }}
          className="relative z-50 md:p-0 p-2 text-center"
        >
          <h1 className="tracking-widest text-4xl sm:text-5xl md:text-6xl font-thin">
            Biacsi Örs
          </h1>
          <p className="text-4xl sm:text-6xl md:text-7xl mt-3 sm:mt-4 md:mt-5">
            Frontend Developer
          </p>
          <a href="#Portfolio">
            <motion.button
              whileHover={{ y: -5 }}
              className="px-5 md:px-7 py-3 md:py-5 text-md md-text-2xl border-[1px] mt-3 sm:mt-4 md:mt-5"
            >
              Explore my projects
            </motion.button>
          </a>
        </motion.article>
        <NextPage page="About" />
      </header>
    </>
  );
}

export default Hero;
