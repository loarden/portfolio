import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionHeader from "./SectionHeader"
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaSass, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa6'
import FirebaseIcon from "./FirebaseIcon";
import MuiIcon from "./MuiIcon";
import TailwindIcon from "./TailwindIcon";

function About() {

  const ref = useRef()
  const inView = useInView(ref)

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    }
  }

  return (
    <section id="About" className="w-full h-fit bg-black">
      <article className="md:py-24 py-16 gap-20 flex flex-col sm:flex-row max-w-7xl w-full p-4 mx-auto">
        <div className="grow w-full">
          <SectionHeader
            text='About me'
          />
          <motion.p
            ref={ref}
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            variants={variants}
            className="text-sm tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam illo nobis quaerat ex accusantium laudantium. Nostrum, voluptate excepturi illo obcaecati maiores, impedit a nam, vel dolorem eveniet nulla cupiditate!</motion.p>
        </div>
        <div className="grow w-full">
          <SectionHeader
            text='Skills'
          />
          <motion.div
            variants={variants}
            className="grid grid-cols-3 text-6xl text-secondary items-center justify-items-center gap-5 transition-all">
            <div className="hover:text-text transition-all">
              <FaHtml5 />
            </div>
            <div className="hover:text-text transition-all">
              <FaCss3 />
            </div>
            <div className="hover:text-text transition-all">
              <FaJs />
            </div>
            <div className="hover:text-text transition-all">
              <FaReact />
            </div>
            <div className="hover:text-text transition-all">
              <FirebaseIcon />
            </div>
            <div className="hover:text-text transition-all">
              <MuiIcon />
            </div>
            <div className="hover:text-text transition-all">
              <TailwindIcon />
            </div>
            <div className="hover:text-text transition-all">
              <FaNodeJs />
            </div>
            <div className="hover:text-text transition-all">
              <FaSass />
            </div>
            <div className="hover:text-text transition-all">
              <FaBootstrap />
            </div>
            <div className="hover:text-text transition-all">
              <FaGitAlt />
            </div>
            <div className="hover:text-text transition-all">
              <FaGithub />
            </div>
          </motion.div>
        </div>
      </article>
    </section>
  )
}

export default About