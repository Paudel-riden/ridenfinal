"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagneticNavLink } from "@/components/ui/MagneticNavLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact", isContact: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "w-full max-w-7xl mx-auto left-1/2 -translate-x-1/2 px-3 sm:px-4 mt-3 sm:mt-4 md:px-8 md:mt-6"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300",
          scrolled
            ? "bg-background/60 backdrop-blur-xl border border-white/5 shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          <Link
            href="/"
            className="font-satoshi font-semibold text-base sm:text-lg text-primary-text hover:text-accent transition-colors shrink-0"
          >
            Riden
          </Link>

          {/* Desktop nav - right behind Riden */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-5 ml-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {"isContact" in link && link.isContact ? (
                <Link
                  href="/contact"
                  data-lenis-prevent
                  className="relative font-inter text-xs sm:text-sm text-secondary-text hover:text-primary-text transition-colors py-2 inline-block group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ) : (
                <MagneticNavLink href={link.href}>{link.label}</MagneticNavLink>
              )}
            </li>
          ))}
        </ul>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg text-primary-text hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[72px] left-4 right-4 z-50 md:hidden rounded-2xl bg-background/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-4 rounded-xl font-inter text-primary-text hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
