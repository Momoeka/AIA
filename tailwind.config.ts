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
        background: "#FFFFFF",
        foreground: "#0B0E14",
        muted: "#A3A3A3",
        secondary: "#6B6B6B",
        subtle: "#C9C9C9",
        surface: "#F5F5F5",
        "surface-light": "#FAFAFA",
        dark: "#0B0E14",
        accent: "#2E7DFF",
        "accent-hover": "#5599FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-fraunces)", "Fraunces", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        checkCircle: {
          to: { strokeDashoffset: "0" },
        },
        checkMark: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        checkCircle: "checkCircle 0.6s ease-out 0.3s forwards",
        checkMark: "checkMark 0.4s ease-out 0.7s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
