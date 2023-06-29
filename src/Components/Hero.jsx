import AnimatedBg from './AnimatedBg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import NextPage from './NextPage';

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -200]);


  return (
    <>
      <AnimatedBg />
      <header className="relative h-screen max-w-7xl mx-auto flex flex-col z-0 justify-center items-center">
        <motion.article style={{ y: y1 }} className='relative z-50 md:p-0 p-2 text-center'>
          {/*<h3 className='text-2xl pl-2 md:pl-3'>Hi, my name is</h3> */}
          <h1 className="tracking-widest md:text-5xl font-thin sm:text-4xl text-3xl">BIACSI ÖRS</h1>
          <p className='text-4xl sm:text-5xl mt-3 md:text-6xl font-semibold pl-2 md:pl-3'>Frontend Developer</p>
          <div className='pl-2 md:pl-3 flex items-center gap-4 mt-2'>
            {/* <a href='#Portfolio'>
              <motion.button
                whileHover={{ y: -5 }}
                className='border-2 px-5 py-4 cursor-pointer'>
                Projects
              </motion.button>
            </a> */}
          </div>
        </motion.article>
        <NextPage
          page='About'
        />
      </header>
    </>
  )
}

export default Hero