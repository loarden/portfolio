import type { SocialLink } from "../../data/portfolio";
import MaterialIcon from "../ui/MaterialIcon";
import Reveal from "../ui/Reveal";

type ContactSectionProps = {
  label: string;
  prompt: string;
  email: string;
  socialLinks: SocialLink[];
  cvHref: string;
  attribution: string;
  copyright: string;
};

export default function ContactSection({
  label,
  prompt,
  email,
  socialLinks,
  cvHref,
  attribution,
  copyright,
}: ContactSectionProps) {
  return (
    <footer
      className="flex flex-col items-center border-t border-white/5 py-32 text-center"
      id="contact"
    >
      <Reveal className="mb-12">
        <h2 className="mb-8 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
          {label}
        </h2>
        <p className="mb-8 font-body-md text-muted-gray">{prompt}</p>
        <a
          className="block break-all font-headline-xl text-headline-xl leading-tight lowercase text-pure-white transition-colors hover:text-primary"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </Reveal>
      <Reveal
        delay="100ms"
        className="flex flex-col items-center gap-12 md:flex-row"
      >
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="font-label-md uppercase text-on-surface transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          download={cvHref.split("/").pop()}
          href={cvHref}
          target="_blank"
          className="flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-label-md uppercase text-on-primary transition-opacity hover:opacity-90"
        >
          <span>Download CV</span>
          <MaterialIcon name="download" size={20} />
        </a>
      </Reveal>
      <div className="mt-32 flex w-full flex-col items-center justify-between gap-4 opacity-40 md:flex-row">
        <p className="font-label-sm uppercase tracking-widest">{attribution}</p>
        <p className="font-label-sm uppercase tracking-widest">{copyright}</p>
      </div>
    </footer>
  );
}
