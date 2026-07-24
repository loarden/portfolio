"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type TransitionLinkProps = ComponentProps<typeof Link> & {
  back?: boolean;
};

gsap.registerPlugin(useGSAP);

function isPageNavigation(href: string, pathname: string) {
  if (href.startsWith("#") || href.startsWith("http")) return false;

  const path = href.split("#")[0] || "/";
  const targetPath = path === "" ? "/" : path;

  return targetPath !== pathname;
}

export default function TransitionLink({
  href,
  onClick,
  children,
  back = false,
  ...rest
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const hrefString = href?.toString() ?? "/";

  const { contextSafe } = useGSAP(() => {});

  const handleLinkClick = contextSafe((event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === "_blank"
    ) {
      return;
    }

    if (!isPageNavigation(hrefString, pathname) && !back) {
      onClick?.(event);
      return;
    }

    event.preventDefault();
    onClick?.(event);

    gsap.set(".page-transition", { yPercent: 100 });
    gsap.set(".page-transition--inner", { yPercent: 100 });

    gsap
      .timeline()
      .to(".page-transition", {
        yPercent: 0,
        duration: 0.35,
        ease: "power3.inOut",
      })
      .then(() => {
        if (back) {
          router.back();
          return;
        }

        if (href) {
          router.push(hrefString);
          return;
        }

        onClick?.(event);
      });
  });

  return (
    <Link href={href} {...rest} onClick={handleLinkClick}>
      {children}
    </Link>
  );
}
