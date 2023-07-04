import { FaEye, FaGithub } from "react-icons/fa6";
import InViewAnimation from "./InViewAnimation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ProjectDetails({ img, title, url, code, desc, stacks }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <InViewAnimation className="relative overflow-hidden max-w-md w-full max-h-64 rounded-xl backdrop-brightness-75">
        <img className="w-full h-full object-cover" src={img} alt={title} />
        <div
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
          className="absolute top-0 left-0 w-full h-full"
        >
          <AnimatePresence>
            {isShow ? (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col items-center text-center p-6 bg-opacity-80 bg-black"
              >
                <div className="flex flex-col w-full h-full justify-center items-center">
                  <p className="text-xl font-semibold">{desc}</p>
                  <div className="flex flex-wrap justify-center gap-3 my-4">
                    {stacks?.map((stack, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-text px-2 font-semibold rounded-lg text-primary"
                        >
                          {stack.title}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex w-full justify-around text-3xl md:text-4xl">
                  <a href={url}>
                    <FaEye />
                  </a>
                  <a href={code}>
                    <FaGithub />
                  </a>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
      </InViewAnimation>
    </>
  );
}

export default ProjectDetails;
