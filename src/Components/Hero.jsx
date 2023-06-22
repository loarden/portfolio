import AnimatedBg from './AnimatedBg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useScroll, motion, MotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import NextPage from './NextPage';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Hero() {

  return (
    <>
      <AnimatedBg />
      <section className="relative h-screen max-w-7xl mx-auto flex flex-col z-0 items-start space-y-2">
        <article className='fixed z-50 md:top-72 sm:top-60 top-52 md:p-0 p-2 text-left space-y-2'>
          <h3 className='text-xl pl-2 md:pl-3'>Hello, my name is</h3>
          <h1 className="tracking-widest md:text-8xl sm:text-7xl text-6xl">BIACSI ÖRS</h1>
          <p className='text-md md:text-lg  pl-2 md:pl-3'>and I'm a Junior Frontend Developer from Hungary.</p>
          <div className='pl-2 md:pl-3 pt-6 flex items-center gap-4'>
            <a href='#Portfolio'>
              <motion.button
                whileHover={{ y: -5 }}
                className='border-2 p-4 cursor-pointer'>
                Projects
              </motion.button>
            </a>
            <a href="https://github.com/loarden"><GitHubIcon sx={{ fontSize: '2.5em' }} /></a>
            <a href="https://www.linkedin.com/in/örs-biacsi-345b3b239/"><LinkedInIcon sx={{ fontSize: '2.5em' }} /></a>
          </div>
          <div className='pl-2 md:pl-3'>

          </div>
        </article>
        <NextPage
          page='About'
        />
      </section>
    </>
  )
}

export default Hero