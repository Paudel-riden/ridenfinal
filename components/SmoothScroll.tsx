"use client";

import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  // Lenis disabled - was preventing Link navigation to /contact
  return <>{children}</>;
}
