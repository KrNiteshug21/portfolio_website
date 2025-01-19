/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables class-based theming
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: "#1a202c",
        secondary: "#2d3748",
        light: {
          background: "#ffffff",
          text: "#000000",
        },
        dark: {
          background: "#000000",
          text: "#ffffff",
        },
      },
      borderRadius: {
        blob: "76% 24% 45% 55% / 27% 38% 62% 73%  ",
      },
    },
  },

  plugins: [],
};
