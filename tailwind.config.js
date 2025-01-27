/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/img/floresta.jpg')",
        "map-lines": "url('/assets/img/padrao.svg')",
      },
      fontFamily: {
        fontFamily: {
          sans: ["DM Sans", "system-ui", "sans-serif"],
          serif: ["DM Serif Text", "Georgia", "serif"],
        },
      },
      colors: {
        verde: {
          200: "#ACEF75",
          300: "#91EE77",
          400: "#17E880",
          700: "#2E482C",
          800: "#16281F",
          900: "#0F1C15",
          950: "#030504",
        },
      },
    },
  },
  plugins: [],
};
