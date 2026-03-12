"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

const featuredProject = projects.find((p) => p.isFeatured);
const gridProjects = projects.filter((p) => !p.isFeatured);

export function ProjectShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-satoshi font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-text mb-3 sm:mb-4">
            Selected Projects
          </h2>
          <p className="font-inter text-base sm:text-lg text-secondary-text max-w-2xl">
            SaaS, ERP, fintech, ecommerce, automation & service platforms.
            Each built for real-world operations.
          </p>
        </motion.div>

        {/* Featured project - ServeIQ */}
        {featuredProject && (
          <div className="mb-8 sm:mb-12">
            <ProjectCard project={featuredProject} featured />
          </div>
        )}

        {/* Grid: all non-featured projects */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 min-w-0">
          {gridProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
