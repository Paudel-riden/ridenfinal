"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { useMousePosition } from "@/lib/useMousePosition";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref);

  const rotateX = useSpring(y * -8, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(x * 8, { stiffness: 150, damping: 20 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <motion.div
      ref={ref}
      style={{ transform }}
      className={cn("transition-shadow duration-300", className)}
    >
      {children}
    </motion.div>
  );
}
