import { useState, useRef, useEffect } from "react";
import InViewAnimation from "./InViewAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { Input, Textarea } from "@material-tailwind/react";
import emailjs from "emailjs-com";

const inputStyle = {
  inputStyle:
    "bg-primary border-text text-text text-lg md:text-xl resize-none w-full",
  buttonStyle:
    "px-8 py-4 rounded-3xl sm:text-lg md:text-xl border-[2px] border-text",
  divStyle: "w-full",
};

const animate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function ContactForm() {
  const formRef = useRef();

  const [isSent, setIsSent] = useState({
    sent: false,
    error: false,
  });
  const [email, setEmail] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const changeHandler = (e) => {
    setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_pdpe4xo",
        formRef.current,
        "bgKCC9p0J_Ht-PZQo"
      )
      .then(
        (result) => {
          setIsSent((prev) => ({ ...prev, sent: true }));
          setTimeout(() => {
            setIsSent((prev) => ({ ...prev, sent: false }));
          }, 1500);
          console.log(result.text);
        },
        (error) => {
          setIsSent((prev) => ({ ...prev, error: true }));
          setTimeout(() => {
            setIsSent((prev) => ({ ...prev, error: false }));
          }, 1500);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={formRef}
      className=" relative flex flex-col items-end sm:items-center gap-4 w-full"
    >
      <InViewAnimation className={inputStyle.divStyle}>
        <Input
          onChange={changeHandler}
          name="name"
          className={inputStyle.inputStyle}
          required
          variant="standard"
          label="Your Name"
        />
      </InViewAnimation>
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
        <motion.button
          disabled={isSent.sent ? true : false}
          whileHover={{ y: -5 }}
          className={inputStyle.buttonStyle}
        >
          Send
        </motion.button>
      </InViewAnimation>
      <AnimatePresence>
        {isSent.sent ? (
          <motion.p
            initial={animate.hidden}
            animate={animate.visible}
            exit={animate.hidden}
            className="absolute -bottom-10"
          >
            Email sent
          </motion.p>
        ) : (
          ""
        )}
        {isSent.error ? (
          <p
            initial={animate.hidden}
            animate={animate.visible}
            exit={animate.hidden}
            className="absolute -bottom-10"
          >
            Something went wrong
          </p>
        ) : (
          ""
        )}
      </AnimatePresence>
    </form>
  );
}

export default ContactForm;
