import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function InViewAnimation({ children, className }) {
  const ref = useRef();
  const inView = useInView(ref);

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default InViewAnimation;
