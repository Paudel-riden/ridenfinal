"use client";

import { useEffect, useRef, useState } from "react";

export function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const render = () => {
      const { width, height } = canvas;
      const gradient = ctx.createRadialGradient(
        width * (0.3 + mouse.x * 0.2),
        height * (0.2 + mouse.y * 0.2),
        0,
        width * (0.5 + mouse.x * 0.3),
        height * (0.5 + mouse.y * 0.3),
        width * 0.8
      );
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.15)");
      gradient.addColorStop(0.4, "rgba(34, 211, 238, 0.06)");
      gradient.addColorStop(0.7, "rgba(99, 102, 241, 0.03)");
      gradient.addColorStop(1, "transparent");

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mouse]);

  return (
    <>
      {/* Static fallback - visible on first paint before canvas mounts */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(99, 102, 241, 0.15), transparent 70%)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />
    </>
  );
}
