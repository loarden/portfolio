import AnimatedBg from "./AnimatedBg";
import { motion, useScroll, useTransform } from "framer-motion";
import NextPage from "./NextPage";
import Button from "./Button";

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
          <p className="text-4xl font-thin sm:text-6xl md:text-7xl mt-3 sm:mt-4 md:mt-5">
            Frontend Developer
          </p>
          <div className="flex justify-center mt-3 sm:mt-4 md:mt-5">
          <Button 
            text='Explore my projects'
            url='#Portfolio'
          />
          </div>
        </motion.article>
        <NextPage page="About" />
      </header>
    </>
  );
}

export default Hero;
