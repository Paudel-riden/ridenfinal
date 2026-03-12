"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#0b0f19", color: "#f8fafc" }}
    >
      <h2 className="font-satoshi font-bold text-xl mb-4">Something went wrong</h2>
      <p className="font-inter text-secondary-text text-center mb-6 max-w-md">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 rounded-xl bg-accent text-white font-inter font-medium hover:bg-accent/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
