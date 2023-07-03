import { motion } from "framer-motion"

function Button ({ text, url }) {
  return (
    <motion.a
    whileHover={{ y:-5}} className="px-8 py-4 border-[2px] rounded-3xl sm:text-lg md:text-xl" href={url}
    >
      {text}
    </motion.a>
  )
}

export default Button