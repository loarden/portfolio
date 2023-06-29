import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function SectionHeader({text}) {
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
    <motion.h2
      ref={ref}
      variants={variants}
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        ease: 'easeInOut',
        duration: 1
      }}
      className="text-4xl sm:text-5xl relative py-8 md:text-center font-light"
    >
      {text}
    </motion.h2>
  )
}

export default SectionHeader

//before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-text