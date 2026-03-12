import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        "primary-text": "#F8FAFC",
        "secondary-text": "#94A3B8",
        accent: "#6366F1",
        highlight: "#22D3EE",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        "inter-tight": ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
