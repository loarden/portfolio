import { useEffect, useState } from "react";
import InViewAnimation from "./InViewAnimation";
import { motion } from "framer-motion";
import { Input, Textarea } from "@material-tailwind/react";

const inputStyle = {
  inputStyle:
    "bg-primary border-text text-text text-lg md:text-xl resize-none w-full",
  buttonStyle:
    "px-5 sm:px-6 md:px-7 py-2 md:py-3 sm:text-lg md_text-xl border-[1px] border-text",
  divStyle: "w-full",
};
function ContactForm() {
  const [email, setEmail] = useState({
    email: "",
    subject: "",
    body: "",
  });

  const changeHandler = (e) => {
    setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="flex flex-col items-end sm:items-center gap-4 w-full px-4">
      <InViewAnimation className={inputStyle.divStyle}>
        <Input
          onChange={changeHandler}
          name="email"
          className={inputStyle.inputStyle}
          required
          variant="standard"
          label="Email"
        />
      </InViewAnimation>
      <InViewAnimation className={inputStyle.divStyle}>
        <Input
          onChange={changeHandler}
          name="subject"
          className={inputStyle.inputStyle}
          required
          variant="standard"
          label="Subject"
        />
      </InViewAnimation>
      <InViewAnimation className={inputStyle.divStyle}>
        <Textarea
          onChange={changeHandler}
          name="body"
          className={inputStyle.inputStyle}
          required
          variant="standard"
          label="Message"
        />
      </InViewAnimation>
      <InViewAnimation>
        <a
          href={`mailto:biacsi.ors@gmail.com?subject=${email.subject}&body=${email.body}`}
        >
          <motion.button
            type="button"
            whileHover={{ y: -5 }}
            className={inputStyle.buttonStyle}
          >
            Send
          </motion.button>
        </a>
      </InViewAnimation>
    </form>
  );
}

export default ContactForm;
