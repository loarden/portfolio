import ContactForm from "./ContactForm";
import InViewAnimation from "./InViewAnimation";
import SectionHeader from "./SectionHeader";
import { SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <section
      id="Contact"
      className="w-full h-screen flex flex-col justify-center items-center bg-primary"
    >
      <SectionHeader text="Contact me!" />
      <InViewAnimation>
        <div className="text-xl sm:text-2xl text-center font-thin max-w-xl px-4" v>
          <p>
            If you'd like to send me a message, I can be reached through various
            ways! If you prefer email, simply fill out the form below or send me
            a message directly at{" "}
            <span className="font-semibold">biacsi.ors@gmail.com</span>.
          </p>
          <p className="mt-3 inline-block">
            Or send me a message on {" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/%C3%B6rs-biacsi-345b3b239/"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </InViewAnimation>
      <div className="pt-8 w-full max-w-xl">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
