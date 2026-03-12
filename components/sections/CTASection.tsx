"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ContactLink } from "@/components/ui/ContactLink";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 sm:space-y-12"
        >
          <motion.h2
            className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-text leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Let&apos;s build something powerful.
          </motion.h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-secondary-text max-w-2xl mx-auto">
            Get in touch and let&apos;s build something together.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <ContactLink variant="primary" className="w-full sm:w-auto">Let&apos;s get started</ContactLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
