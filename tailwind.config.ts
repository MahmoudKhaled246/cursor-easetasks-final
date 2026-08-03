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
        background: {
          DEFAULT: "#18181B",
          secondary: "#1F2023",
        },
        surface: "#26272C",
        accent: {
          DEFAULT: "#D7FA75",
          glow: "rgba(215, 250, 117, 0.15)",
        },
        text: {
          primary: "#F2F2F2",
          muted: "#8C8C8C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        glow: "0 0 40px rgba(215, 250, 117, 0.15)",
        "glow-sm": "0 0 20px rgba(215, 250, 117, 0.1)",
        "glow-btn": "0 0 30px rgba(215, 250, 117, 0.25)",
      },
      borderRadius: {
        card: "16px",
        btn: "8px",
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
