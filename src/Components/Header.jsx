import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import Animation from './Animation';

const navItems = [
  {
    title: 'Home'
  },
  {
    title: 'About'
  },
  {
    title: 'Portfolio'
  },
  {
    title: 'Contact'
  },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  });

  useEffect(() => {
    if (windowWidth >= 640) {
      setIsOpen(false)
    }
  }, [windowWidth])

  return (
    <header className='fixed mx-auto w-full'>
      <nav className="w-full h-14 max-w-7xl mx-auto relative flex flex-row justify-between items-center z-50">
        <h2 className="text-text relative text-xl md:text-2xl font-bold -z-50 pl-2">Örs.</h2>
        <div className='md:flex items-center text-text hidden gap-11 pr-2'>
          <ul className="flex gap-7 text-text text-md">
            {navItems.map((item, index) => {
              return <a key={index} href={`#${item.title}`}><li className='cursor-pointer py-1 relative before:transition-all before:duration-300 hover:before:absolute before:w-0 hover:before:w-full hover:before:bottom-0 hover:before:h-[2px] hover:before:bg-text'>{item.title}</li></a>
            })}
          </ul>
          <div className='flex gap-7'>
            <div className='cursor-pointer'>
              <a href="https://github.com/loarden"><GitHubIcon sx={{fontSize: '2em'}} /></a>
            </div>
            <div className='cursor-pointer'>
              <a href="https://www.linkedin.com/in/örs-biacsi-345b3b239/"><LinkedInIcon sx={{fontSize: '2em'}} /></a>
            </div>
          </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}
          className='block md:hidden pr-2'>
          <MenuIcon sx={{ fontSize: '2em' }} />
        </div>
      <Animation>
        {isOpen && <motion.ul
          className='absolute top-0 right-0 backdrop-blur-lg flex flex-col pt-24 w-full text-2xl gap-20 pr-4 items-end h-screen -z-10 overflow-scroll'
          initial={{
            x: '100vh',
          }}
          animate={{
            x: '0',
            transition: {
              ease: 'linear',
              duration: 0.2
            }
          }}
          exit={{
            x: '100vh',
          }}
        >
          {navItems.map((item, index) => {
            return <a onClick={() => setIsOpen(!isOpen)} href={`#${item.title}`}><motion.li key={index} whileHover={{x: '-20px'}}>{item.title}</motion.li></a>
          })}
        </motion.ul>}
      </Animation>
      </nav>
    </header>
  )
}

export default Header