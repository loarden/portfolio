import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function SectionHeader({text}) {
  const ref = useRef()
  const inView = useInView(ref)

  const variants = {
    visible: {
      opacity: 1,
      x: 0
    },
    hidden: {
      opacity: 0,
      x: -50
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
      className="text-2xl my-4"
    >
      {text}
    </motion.h2>
  )
}

export default SectionHeader