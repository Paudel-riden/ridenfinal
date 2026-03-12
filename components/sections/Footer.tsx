"use client";

import { motion } from "framer-motion";

const links = [
  { href: "mailto:riden@pravidhipvtltd.com", label: "Email" },
  { href: "https://github.com/Paudel-riden", label: "GitHub", external: true },
  { href: "https://linkedin.com/in/ridenpaudel", label: "LinkedIn", external: true },
];

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          <motion.p
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-sm text-secondary-text"
          >
            © {new Date().getFullYear()} Riden. Crafted with care.
          </motion.p>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-inter text-sm text-secondary-text hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
