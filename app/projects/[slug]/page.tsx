import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | Case Study`,
    description: project.description,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-inter text-sm text-secondary-text hover:text-accent transition-colors mb-12"
        >
          ← Back to projects
        </Link>

        {/* Hero */}
        <header className="mb-16">
          <span
            className={`inline-block px-3 py-1.5 text-xs font-inter-tight font-semibold rounded-lg border mb-6 ${
              project.status === "LIVE"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : project.status === "IN DEVELOPMENT"
                ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                : "bg-violet-500/20 text-violet-400 border-violet-500/30"
            }`}
          >
            {project.status}
          </span>
          <h1 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl text-primary-text mb-4">
            {project.name}
          </h1>
          <p className="font-inter text-lg text-accent mb-6">
            {project.tagline}
          </p>
          <p className="font-inter text-lg text-secondary-text leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Preview image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-16">
          <Image
            src={project.image}
            alt={`${project.name} - System preview`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Case study sections */}
        <div className="space-y-16">
          <section>
            <h2 className="font-satoshi font-bold text-xl text-primary-text mb-4">
              Problem
            </h2>
            <p className="font-inter text-secondary-text leading-relaxed">
              {project.name} was built to solve operational fragmentation—
              disconnected systems, manual workflows, and lack of real-time
              visibility. Businesses needed a unified platform to streamline
              {project.tagline.toLowerCase().includes("restaurant")
                ? " restaurant"
                : project.tagline.toLowerCase().includes("recruitment")
                ? " recruitment"
                : project.tagline.toLowerCase().includes("service")
                ? " service"
                : " core"}{" "}
              operations and make data-driven decisions.
            </p>
          </section>

          <section>
            <h2 className="font-satoshi font-bold text-xl text-primary-text mb-4">
              Solution
            </h2>
            <p className="font-inter text-secondary-text leading-relaxed mb-6">
              A centralized system that brings order management, analytics, and
              role-based controls into one ecosystem. Built with scalability and
              maintainability in mind—clean architecture, modular components,
              and clear separation of concerns.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <span className="text-accent mt-0.5">✓</span>
                  <span className="font-inter text-secondary-text">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-satoshi font-bold text-xl text-primary-text mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-inter text-primary-text bg-white/5 rounded-xl border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-satoshi font-bold text-xl text-primary-text mb-4">
              Outcome
            </h2>
            <p className="font-inter text-secondary-text leading-relaxed">
              Delivered a production-ready system that reduced manual work,
              improved operational visibility, and scaled with business growth.
              The platform is actively used in real-world environments,
              continuously improved based on user feedback.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-white/10 text-center">
          <p className="font-inter text-secondary-text mb-6">
            Interested in a similar system for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-inter font-medium hover:bg-accent/90 transition-colors"
          >
            Let&apos;s get started
          </Link>
        </div>
      </article>
    </main>
  );
}
