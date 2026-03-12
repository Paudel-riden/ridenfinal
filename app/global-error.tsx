"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ backgroundColor: "#0b0f19", color: "#f8fafc", padding: "2rem", fontFamily: "system-ui" }}>
        <h2>Something went wrong</h2>
        <p style={{ marginTop: "1rem", marginBottom: "1.5rem", opacity: 0.8 }}>{error.message}</p>
        <button
          onClick={reset}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "0.75rem",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
