import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

const icons = [
  {
    icon: <FaGithub />,
    bgColor: '#ffffff',
    textColor: '#000000'
  },
  {
    icon: <FaLinkedin />,
    bgColor: '#ffffff',
    textColor: '#0e76a8'
  },
  {
    icon: <SiGmail />,
    bgColor: '#ffffff',
    textColor: '#BB001B'
  }
]

function SideBar() {
  return (
    <div className="fixed md:flex hidden flex-col top-2/4 left-0 z-50">
      {
        icons.map((icon, index) => {
          return (
            <motion.div
              key={index}
              className={`text-4xl lg:text-5xl w-28 lg:w-32 flex justify-end p-2 bg-secondary`}
              initial={{ x: -60 }}
              whileHover={{
                x: -20,
                backgroundColor: `${icon.bgColor}`,
                color: `${icon.textColor}`,
                transition: {
                  duration: 0.2,
                  ease: 'linear'
                },
              }}>
              {icon.icon}
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default SideBar