import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020224",
          900: "#050548", // Brand Primary
          850: "#090959",
          800: "#0e0e6e",
          700: "#17178a",
          600: "#2222ad",
        },
        gold: {
          600: "#996515",
          500: "#b8860b", // Brand Secondary Gold
          400: "#d4af37",
          300: "#e5c158",
          200: "#fae8a4",
          100: "#fdf6d8",
          50: "#fffdf5",
        },
        surface: {
          50: "#ffffff",
          100: "#f8f9fc",
          200: "#f4f5f8", // Routex card gray
          300: "#e9ecf2",
          400: "#d6dae5",
        },
        whatsapp: {
          500: "#25D366",
          600: "#128C7E",
          700: "#075E54",
        },
        body: "#555555",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sovereign: "0px 10px 40px rgba(5, 5, 72, 0.08)",
        "sovereign-lg": "0px 20px 60px rgba(5, 5, 72, 0.12)",
        gold: "0px 10px 30px rgba(184, 134, 11, 0.2)",
        card: "0px 4px 25px rgba(0, 0, 0, 0.04)",
        "card-hover": "0px 15px 45px rgba(5, 5, 72, 0.10)",
      },
      borderRadius: {
        card: "20px",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
