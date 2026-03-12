"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export function CursorSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15]"
        style={{
          left: x,
          top: y,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(34, 211, 238, 0.2) 30%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </motion.div>
  );
}
