import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          surface: "rgb(var(--color-surface) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
          muted: "rgb(var(--color-muted) / <alpha-value>)",
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgb(15 23 42 / 0.10)",
        lift: "0 12px 30px rgb(15 23 42 / 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
