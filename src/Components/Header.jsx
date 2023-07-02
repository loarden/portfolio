import { motion } from "framer-motion";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import Animation from "./Animation";
import { navItems } from "../Assets/datas";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    if (windowWidth >= 640) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <nav className="fixed mx-auto w-full z-50 bg-primary bg-opacity-40">
      <div className="w-full md:h-16 h-14 mx-auto relative flex flex-row justify-between items-center z-50 px-2 sm:px-3 md:px-4 lg:px-6">
        <h2 className="text-text relative text-2xl md:text-3xl font-bold -z-50">
          <a href="#Home">Örs.</a>
        </h2>
        <div className="md:flex items-center text-text hidden gap-11">
          <ul className="flex gap-10 text-text text-xl">
            {navItems.map((item, index) => {
              return (
                <a key={index} href={`#${item.title}`}>
                  <li className="cursor-pointer py-1 relative before:transition-all before:duration-300 hover:before:absolute before:w-0 hover:before:w-full hover:before:bottom-0 hover:before:h-[2px] hover:before:bg-text">
                    {item.title}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden pr-2"
        >
          {isOpen ? (
            <ClearIcon sx={{ fontSize: "2em" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "2em" }} />
          )}
        </div>
        <Animation>
          {isOpen && (
            <motion.div
              className="absolute top-0 right-0 backdrop-blur-lg bg-primary bg-opacity-40 flex flex-col justify-between pt-24 w-full text-2xl items-end h-screen -z-10 overflow-auto"
              initial={{
                x: "100%",
              }}
              animate={{
                x: "0",
                transition: {
                  ease: "linear",
                  duration: 0.2,
                },
              }}
              exit={{
                x: "100%",
              }}
            >
              <ul className="flex flex-col items-end gap-20 pr-4">
                {navItems.map((item, index) => {
                  return (
                    <a
                      key={index}
                      onClick={() => setIsOpen(!isOpen)}
                      href={`#${item.title}`}
                    >
                      <motion.li whileHover={{ x: "-20px" }}>
                        {item.title}
                      </motion.li>
                    </a>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </Animation>
      </div>
    </nav>
  );
}

export default Header;
