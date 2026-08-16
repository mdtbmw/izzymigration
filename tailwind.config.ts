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
          900: "#050548",
          850: "#090959",
          800: "#0e0e6e",
          700: "#17178a",
          600: "#2222ad",
        },
        gold: {
          700: "#7a5209",
          600: "#996515",
          500: "#b8860b",
          400: "#d4af37",
          300: "#e5c158",
          200: "#fae8a4",
          100: "#fdf6d8",
          50: "#fffdf5",
        },
        surface: {
          0: "#ffffff",
          50: "#f8f9fc",
          100: "#f4f5f8",
          200: "#e9ecf2",
          300: "#d6dae5",
        },
        ink: {
          DEFAULT: "#555555",
          light: "#73777d",
          dark: "#1c1c28",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 25px rgba(0, 0, 0, 0.04)",
        "card-hover": "0px 18px 50px rgba(5, 5, 72, 0.12)",
        sovereign: "0px 10px 40px rgba(5, 5, 72, 0.08)",
        "sovereign-lg": "0px 24px 70px rgba(5, 5, 72, 0.16)",
        gold: "0px 10px 30px rgba(184, 134, 11, 0.22)",
        "gold-lg": "0px 16px 45px rgba(184, 134, 11, 0.3)",
      },
      borderRadius: {
        card: "20px",
        xl2: "22px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-600px 0" },
          "100%": { backgroundPosition: "600px 0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 1.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;