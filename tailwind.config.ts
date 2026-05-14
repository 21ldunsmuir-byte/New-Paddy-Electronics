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
        background: "#09090B",
        surface: "#18181B",
        surface2: "#09090B",
        border: "#27272A",
        accent: {
          DEFAULT: "#EA580C",
          light: "#F97316",
          dark: "#C2410C",
          bg: "rgba(234,88,12,0.1)",
          border: "rgba(234,88,12,0.25)",
        },
        ink: {
          DEFAULT: "#FAFAFA",
          secondary: "#A1A1AA",
          muted: "#52525B",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)",
        nav: "0 1px 0 rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
