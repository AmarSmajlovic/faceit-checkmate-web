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
          DEFAULT: "#0B0B0D",
          900: "#101013",
          800: "#141418",
          700: "#1B1B20",
          600: "#26262C",
        },
        line: "#232329",
        win: "#3AD07A",
        loss: "#F2545B",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "74rem",
      },
    },
  },
  plugins: [],
};

export default config;
