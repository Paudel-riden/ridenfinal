"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactLinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function ContactLink({
  children,
  className,
  variant = "primary",
}: ContactLinkProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-inter font-medium transition-all duration-300 rounded-xl px-6 py-3";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-accent/40",
    secondary:
      "border border-white/20 text-primary-text hover:border-accent/50 hover:bg-white/5",
  };

  return (
    <Link
      href="/contact"
      data-lenis-prevent
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </Link>
  );
}
