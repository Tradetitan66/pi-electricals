"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "figure" | "section" | "li" | "span";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = delay ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
