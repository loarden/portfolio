import { useState, useRef, useEffect } from "react";
import InViewAnimation from "./InViewAnimation";
import { motion } from "framer-motion";
import { Input, Textarea } from "@material-tailwind/react";
import emailjs from "emailjs-com";

const inputStyle = {
  inputStyle:
    "bg-primary border-text text-text text-lg md:text-xl resize-none w-full",
  buttonStyle:
    "px-8 py-4 rounded-3xl sm:text-lg md:text-xl border-[2px] border-text",
  divStyle: "w-full",
};
function ContactForm() {
  const formRef = useRef();

  const [isSent, setIsSent] = useState({
    sent: false,
    error: false
  })
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
          setIsSent((prev) => ({...prev, sent: true}))
          console.log(result.text);
        },
        (error) => {
          setIsSent((prev) => ({...prev, error: true}))
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    console.log(isSent)
  },[isSent])

  return (
    <form
      onSubmit={sendEmail}
      ref={formRef}
      className="flex flex-col items-end sm:items-center gap-4 w-full"
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
    </form>
  );
}

export default ContactForm;
