import { motion } from "framer-motion";
import { sidebarIcons } from "../Assets/datas";

function SideBar() {
  return (
    <div className="fixed md:flex hidden flex-col top-2/4 left-0 z-50">
      {sidebarIcons.map((icon, index) => {
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
                ease: "linear",
              },
            }}
          >
            <a href={icon.url}>{icon.icon}</a>
          </motion.div>
        );
      })}
    </div>
  );
}

export default SideBar;
