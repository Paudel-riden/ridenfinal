"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

const cards = [
  {
    title: "Product Development",
    description:
      "End-to-end product delivery from concept to launch. I build scalable systems that grow with your business.",
    icon: "◇",
  },
  {
    title: "UI/UX Architecture",
    description:
      "Thoughtful design systems and interfaces. Clean, intuitive experiences that users actually enjoy.",
    icon: "◈",
  },
  {
    title: "AI & Automation",
    description:
      "Integrating AI APIs and automation tools to eliminate repetitive work and unlock new capabilities.",
    icon: "⬡",
  },
];

export function WhatIDoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-satoshi font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-text mb-3 sm:mb-4">
            What I Do
          </h2>
          <p className="font-inter text-lg text-secondary-text max-w-2xl">
            A focused set of capabilities honed over years of shipping products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TiltCard
                className="group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 
                  shadow-xl shadow-black/5 hover:shadow-accent/10 hover:shadow-2xl
                  hover:border-accent/30 hover:-translate-y-2
                  transition-all duration-500 ease-out"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <motion.span
                  className="text-2xl text-accent/80 mb-4 block"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {card.icon}
                </motion.span>
                <h3 className="font-satoshi font-semibold text-xl text-primary-text mb-3">
                  {card.title}
                </h3>
                <p className="font-inter text-secondary-text leading-relaxed">
                  {card.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
