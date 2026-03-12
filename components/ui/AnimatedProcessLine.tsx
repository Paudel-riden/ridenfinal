"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedProcessLineProps {
  stepsCount: number;
  children: React.ReactNode;
}

export function AnimatedProcessLine({ children }: AnimatedProcessLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-[17px] sm:left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-white/10 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-accent via-accent/80 to-transparent"
          initial={{ height: "0%" }}
          animate={isInView ? { height: "100%" } : { height: "0%" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {children}
    </div>
  );
}
