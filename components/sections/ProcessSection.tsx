"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedProcessLine } from "@/components/ui/AnimatedProcessLine";

const steps = [
  { number: "01", title: "Discovery", description: "Understanding the problem, users, and constraints." },
  { number: "02", title: "Strategy", description: "Defining approach, scope, and success metrics." },
  { number: "03", title: "Design", description: "Creating flows, interfaces, and design systems." },
  { number: "04", title: "Development", description: "Building with clean code and best practices." },
  { number: "05", title: "Launch", description: "Shipping, iterating, and supporting in production." },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="font-satoshi font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-text mb-3 sm:mb-4">
            Process
          </h2>
          <p className="font-inter text-base sm:text-lg text-secondary-text max-w-2xl">
            A repeatable approach that delivers consistent results.
          </p>
        </motion.div>

        <AnimatedProcessLine stepsCount={5}>
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 1, x: 0 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-4 sm:gap-6 md:gap-8 pl-2 sm:pl-4"
              >
                <motion.div
                  className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-accent/50 flex items-center justify-center bg-background"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  <span className="font-inter-tight font-semibold text-xs text-accent">
                    {step.number}
                  </span>
                </motion.div>
                <div>
                  <h3 className="font-satoshi font-semibold text-lg sm:text-xl text-primary-text mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-secondary-text">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedProcessLine>
      </div>
    </section>
  );
}
