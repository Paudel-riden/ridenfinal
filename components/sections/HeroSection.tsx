"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactLink } from "@/components/ui/ContactLink";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { HeroVisual } from "@/components/ui/HeroVisual";

const roles = [
  "Developer",
  "Product Builder",
  "AI Integrator",
  "Automation Architect",
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />
      <FloatingParticles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-primary-text">
                <AnimatedText text="I design and build digital systems that actually work." />
              </h1>
              <p className="font-inter text-base sm:text-lg md:text-xl text-secondary-text max-w-xl">
                Developer • Product Designer • Automation Builder
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <ContactLink variant="primary" className="w-full sm:w-auto text-center">
                  Let&apos;s get started
                </ContactLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <span className="font-inter text-sm text-secondary-text">
                Currently building as
              </span>
              <div className="h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="block font-inter-tight font-semibold text-accent"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
