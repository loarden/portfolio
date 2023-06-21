import AnimatedBg from './AnimatedBg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useScroll, motion, MotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import NextPage from './NextPage';

function useParallax(MotionValue, distance) {
  return useTransform(MotionValue, [0, 1], [-distance, distance]);
}

function Hero() {
  const scrollRef = useRef()
  const { scrollYProgress } = useScroll({ target: scrollRef })
  const y = useParallax

  return (
    <>
      <AnimatedBg />
      <section className="relative h-screen max-w-7xl mx-auto flex flex-col -z-20 items-start space-y-2">
        <motion.article style={{ y }} ref={scrollRef} className='fixed md:top-72 sm:top-60 top-52 md:p-0 p-2 text-left space-y-2'>
          <h3 className='text-xl pl-2 md:pl-3'>Hello, my name is</h3>
          <h1 className="tracking-widest md:text-8xl sm:text-7xl text-6xl">BIACSI ÖRS</h1>
          <p className='text-md md:text-lg  pl-2 md:pl-3'>and I'm a Junior Frontend Developer from Hungary.</p>
          <div className='pl-2 md:pl-3 mt-5 flex gap-4'>
            <a href="https://github.com/loarden"><GitHubIcon sx={{ fontSize: '2.5em' }} /></a>
            <a href="https://www.linkedin.com/in/örs-biacsi-345b3b239/"><LinkedInIcon sx={{ fontSize: '2.5em' }} /></a>
          </div>
        </motion.article>
        <NextPage />
      </section>
    </>
  )
}

export default Hero