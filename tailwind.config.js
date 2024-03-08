/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          light: "#000000",
          dark: "#b9d5f8",
        },
        secondary: {
          light: "#e6f3ff",
          dark: "#66b5ff",
        },
        text: {
          light: "#fff",
          dark: "#000000",
        },
        background: {
          light: "#cce6ff",
          dark: "#000d1a",
        },
      },
    },
  },
  plugins: [],
};
