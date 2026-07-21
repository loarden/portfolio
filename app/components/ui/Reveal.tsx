import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: string;
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay,
  className = "",
  style,
}: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ ...style, ...(delay ? { transitionDelay: delay } : {}) }}
    >
      {children}
    </div>
  );
}
