"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right";

const OFFSETS: Record<Direction, string> = {
  up: "translateY(28px)",
  down: "translateY(-28px)",
  left: "translateX(-36px)",
  right: "translateX(36px)",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(6px)",
        transform: visible ? "translate(0, 0)" : OFFSETS[direction],
      }}
    >
      {children}
    </div>
  );
}