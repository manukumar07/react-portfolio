/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50", // Dark Slate Blue
        secondary: "#34495E", // Midnight Blue
        accent1: "#E67E22", // Carrot Orange
        accent2: "#1ABC9C", // Turquoise
        background: "#ECF0F1", // Clouds
        text: "#2C3E50", // Dark Slate Blue
        textHighlight: "#FFFFFF", // White
        linkHover: "#2980B9", // Bright Blue
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
