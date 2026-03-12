"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  {
    name: "React",
    description: "Component-based UI with hooks and server components.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework with App Router.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg",
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript for APIs and tooling.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg",
  },
  {
    name: "Express",
    description: "Minimal web framework for Node.js backends.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg",
  },
  {
    name: "Flutter",
    description: "Cross-platform mobile and desktop development.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/flutter.svg",
  },
  {
    name: "AI APIs",
    description: "OpenAI, Anthropic, and custom model integrations.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/openai.svg",
  },
  {
    name: "Automation Tools",
    description: "Zapier, n8n, Make, and custom workflows.",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/n8n.svg",
  },
];

export function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
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
            Tech Stack
          </h2>
          <p className="font-inter text-lg text-secondary-text max-w-2xl">
            Tools and technologies I use to build robust systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.05 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-4 sm:p-5 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5 min-w-0
                hover:border-accent/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10
                transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-white/5 rounded-lg overflow-hidden p-1">
                  <img
                    src={tech.logo}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-inter-tight font-semibold text-primary-text line-clamp-2">
                  {tech.name}
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  height: hoveredIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="font-inter text-sm text-secondary-text mt-3 overflow-hidden"
              >
                {tech.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
