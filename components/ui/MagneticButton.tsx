"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  href,
  variant = "primary",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const strength = 0.2;
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-inter font-medium transition-all duration-300 rounded-xl px-6 py-3";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-accent/40",
    secondary:
      "border border-white/20 text-primary-text hover:border-accent/50 hover:bg-white/5",
    ghost: "text-secondary-text hover:text-primary-text hover:bg-white/5",
  };

  // Use Link for internal page routes (not hash links) so navigation works
  if (href && href.startsWith("/") && !href.startsWith("/#")) {
    return (
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <Link
          href={href}
          className={cn(baseStyles, variants[variant], className)}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  const Component = href ? "a" : "button";
  const componentProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { type, disabled };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        {...componentProps}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </Component>
    </motion.div>
  );
}
