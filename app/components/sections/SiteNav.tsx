"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import MenuButton from "../ui/MenuButton";
import {
  contactSection,
  navSections,
} from "../../data/portfolio";

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <nav className="fixed top-0 z-[80] flex w-full justify-end p-4 sm:p-6 md:p-8">
        <MenuButton isOpen={isOpen} onClick={toggle} />
      </nav>

      <Sidebar
        isOpen={isOpen}
        onClose={close}
        sections={navSections}
        email={contactSection.email}
        socialLinks={contactSection.socialLinks}
      />
    </>
  );
}
