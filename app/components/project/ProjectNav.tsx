import Link from "next/link";
import MaterialIcon from "../ui/MaterialIcon";

export default function ProjectNav() {
  return (
    <nav className="project-nav fixed top-0 z-[80] w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-margin-mobile py-5 md:px-8 md:py-6">
        <Link
          href="/"
          className="font-headline-lg text-headline-lg uppercase tracking-tighter text-on-surface transition-opacity hover:opacity-80"
        >
          Örs Biacsi
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#work"
            className="relative font-label-sm text-label-sm uppercase tracking-widest text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-primary"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Expertise
          </Link>
          <Link
            href="/#about-me"
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Contact
          </Link>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 font-label-md text-label-md text-primary md:hidden"
        >
          <MaterialIcon name="arrow_back" size={18} />
          Back
        </Link>
      </div>
    </nav>
  );
}
