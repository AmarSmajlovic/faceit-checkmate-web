import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        faceit: {
          orange: "#FF5500",
          glow: "#FF6A1F",
          dim: "#B93E00",
        },
        ink: {
          DEFAULT: "#08080A",
          900: "#0C0C0F",
          800: "#121216",
          700: "#1A1A1F",
          600: "#24242A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
