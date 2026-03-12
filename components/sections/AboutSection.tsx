"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ABOUT_IMAGE = "/person.PNG";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-satoshi font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-text mb-6 sm:mb-8">
              About
            </h2>
            <div className="space-y-4 sm:space-y-6 font-inter text-base sm:text-lg text-secondary-text leading-relaxed">
              <p>
                I&apos;ve spent the last decade at the intersection of design and
                development—building products that people actually use.
              </p>
              <p>
                What drives me: solving real problems with thoughtful systems.
                Not flashy demos. Not over-engineered solutions. Just software
                that works when it matters.
              </p>
              <p>
                I&apos;ve shipped products for startups and enterprises alike,
                always with a focus on clarity, performance, and maintainability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-square max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={ABOUT_IMAGE}
                alt="Portrait - Developer and Product Builder"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 600px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
