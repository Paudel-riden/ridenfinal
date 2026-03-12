"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const statusColors: Record<string, string> = {
  LIVE: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "IN DEVELOPMENT": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  PROTOTYPE: "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.article
          whileHover={{ y: featured ? -8 : -4, transition: { duration: 0.3 } }}
          className={`
            group relative overflow-hidden rounded-2xl border border-white/5
            bg-white/[0.02] transition-all duration-500 min-w-0
            hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10
            ${featured ? "md:rounded-3xl" : ""}
          `}
        >
          {/* Accent glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/5 via-transparent to-highlight/5" />

          <div
            className={`relative flex flex-col ${
              featured
                ? "md:flex-row md:min-h-[420px]"
                : ""
            }`}
          >
            {/* Content - featured: left col; grid: below image */}
            <div
              className={`flex flex-col justify-between p-6 sm:p-8 ${
                featured ? "order-2 md:order-1 md:w-1/2 md:pr-4" : "order-2"
              }`}
            >
              <div>
                <span
                  className={`inline-block px-2.5 py-1 text-[10px] sm:text-xs font-inter-tight font-semibold rounded-lg border mb-4 ${
                    statusColors[project.status] || "bg-white/10 text-secondary-text"
                  }`}
                >
                  {project.status}
                </span>
                <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-primary-text mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="font-inter text-sm text-accent/90 mb-3">
                  {project.tagline}
                </p>
                <p
                  className={`font-inter text-secondary-text leading-relaxed mb-4 ${
                    featured
                      ? "text-sm sm:text-base"
                      : "text-sm line-clamp-3"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-inter text-secondary-text bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="inline-flex items-center gap-2 font-inter text-sm text-accent mt-4 group-hover:gap-3 transition-all">
                View Case Study
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>

            {/* Image - featured: right col; grid: top */}
            <div
              className={`relative overflow-hidden ${
                featured
                  ? "order-1 md:order-2 h-48 sm:h-64 md:h-auto md:w-1/2 md:min-h-[420px]"
                  : "order-1 h-40 sm:h-48 md:h-52 min-h-[160px]"
              }`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} - Product preview`}
                  fill
                  sizes={
                    featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 30vw"
                  }
                  className="object-cover"
                />
              </motion.div>
              <div
                className={`absolute inset-0 ${
                  featured
                    ? "bg-gradient-to-r from-background via-background/50 to-transparent md:from-background md:via-background/80 md:to-transparent"
                    : "bg-gradient-to-t from-background via-transparent to-transparent"
                }`}
              />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
