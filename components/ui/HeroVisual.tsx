"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { useMousePosition } from "@/lib/useMousePosition";

// Premium developer workspace - clean, modern aesthetic
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=90";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref);

  const rotateX = useSpring(y * -8, { stiffness: 100, damping: 25 });
  const rotateY = useSpring(x * 8, { stiffness: 100, damping: 25 });
  const transform = useMotionTemplate`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="relative h-[280px] sm:h-[340px] md:h-[400px] lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0"
    >
      <motion.div
        style={{ transform }}
        className="relative w-full max-w-lg"
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/10">
          <Image
            src={HERO_IMAGE}
            alt="Developer workspace - clean, modern setup"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 500px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5" />
        </div>
        <motion.div
          className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="font-inter-tight text-sm text-accent font-medium">
            Building in public →
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
