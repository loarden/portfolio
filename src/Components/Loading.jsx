import { AnimatePresence, motion, usePresence } from "framer-motion"
import { useRef, useEffect } from "react";

function Loading() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const [isPresent, safeToRemove] = usePresence()
  const ref = useRef()

  useEffect(() => {
    if(!isPresent) {

    }
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])

  return (
      <motion.div
        ref={ref}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        className="w-full bg-primary h-screen flex justify-center items-center">
        <motion.svg
          width="300"
          height="200"
          viewBox="0 0 600 250"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            fill='#111111'
            variants={draw}
            custom={1}
            strokeWidth='10'
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            fill='#111111'
            variants={draw}
            custom={2}
            strokeWidth='10'
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            fill='#111111'
            variants={draw}
            custom={2.5}
            strokeWidth='10'
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            fill='#111111'
            variants={draw}
            custom={3}
            strokeWidth='10'
          />
        </motion.svg>
      </motion.div>
  )
}

export default Loading