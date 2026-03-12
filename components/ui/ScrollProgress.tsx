"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(Math.min(scrolled, 100));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-accent to-highlight"
        style={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </div>
  );
}
