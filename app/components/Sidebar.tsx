"use client";

import { usePathname } from "next/navigation";
import type { NavSection, SocialLink } from "../data/portfolio";
import TransitionLink from "./ui/TransitionLink";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  sections: NavSection[];
  email: string;
  socialLinks: SocialLink[];
};

function resolveNavHref(href: string, pathname: string) {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}

export default function Sidebar({
  isOpen,
  onClose,
  sections,
  email,
  socialLinks,
}: SidebarProps) {
  const pathname = usePathname();
  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        className="sidebar-backdrop"
        data-open={isOpen}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className="sidebar-panel"
        data-open={isOpen}
      >
        <div className="sidebar-panel-inner">
          <p className="sidebar-label font-label-sm uppercase tracking-[0.3em] text-primary">
            Navigation
          </p>

          <nav className="sidebar-nav">
            <ul className="flex flex-col gap-2">
              {sections.map((section, index) => (
                <li
                  key={section.href}
                  className="sidebar-nav-item"
                  data-open={isOpen}
                  style={{ transitionDelay: `${120 + index * 70}ms` }}
                >
                  <TransitionLink
                    href={resolveNavHref(section.href, pathname)}
                    onClick={onClose}
                    className="sidebar-link group"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <span className="font-label-md text-label-md text-primary/60 transition-colors group-hover:text-primary">
                      {section.index}
                    </span>
                    <span className="font-headline-lg text-[clamp(1.75rem,5vw,2.5rem)] uppercase leading-none text-pure-white transition-colors group-hover:text-primary">
                      {section.label}
                    </span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="sidebar-footer"
            data-open={isOpen}
            style={{ transitionDelay: `${120 + sections.length * 70 + 80}ms` }}
          >
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-label-md text-label-md uppercase text-on-surface transition-colors hover:text-primary"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${email}`}
              className="block break-all font-label-md text-[clamp(0.875rem,2.5vw,1rem)] lowercase text-muted-gray transition-colors hover:text-primary"
              tabIndex={isOpen ? 0 : -1}
            >
              {email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
