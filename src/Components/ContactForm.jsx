import InViewAnimation from "./InViewAnimation";
import { motion } from "framer-motion";

function ContactForm() {
  const inputStyle = {
    inputStyle:
      "bg-text text-primary p-3 sm:p-4 sm:text-lg md_text-xl resize-none w-full",
    buttonStyle:
      "px-5 sm:px-6 md:px-7 py-2 md:py-3 sm:text-lg md_text-xl border-[1px] border-text",
    divStyle: "w-full",
  };

  return (
    <form className="flex flex-col items-end sm:items-center gap-4 w-full px-4">
      <InViewAnimation className={inputStyle.divStyle}>
        <input
          required
          className={inputStyle.inputStyle}
          type="email"
          placeholder="Email..."
        />
      </InViewAnimation>
      <InViewAnimation className={inputStyle.divStyle}>
        <input
          required
          className={inputStyle.inputStyle}
          type="text"
          placeholder="Subject..."
        />
      </InViewAnimation>
      <InViewAnimation className={inputStyle.divStyle}>
        <textarea
          required
          className={inputStyle.inputStyle}
          cols="30"
          rows="5"
          placeholder="Message..."
        ></textarea>
      </InViewAnimation>
      <InViewAnimation>
        <motion.button
          whileHover={{ y: -5 }}
          className={inputStyle.buttonStyle}
        >
          Send
        </motion.button>
      </InViewAnimation>
    </form>
  );
}

export default ContactForm;
