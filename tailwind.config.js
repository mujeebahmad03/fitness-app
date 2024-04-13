/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "info-nutrition": "url('./src/assets/who-we-are/info-nutriton-bg.png')",
        "info-workout": "url('./src/assets/who-we-are/info-workout-bg.png')",
        "info-progression":
          "url('./src/assets/who-we-are/info-progression-bg.png')",
      },
    },
    screens: {
      md1200: { max: "1200px" },
      md1000: { max: "1000px" },
      min800: { max: "800px" },
      lg: { min: "835px" },
      xl: {min: "1200px"},
      min620: { max: "620px" },
      min540: { max: "540px" },
      min450: { max: "450px" },
      min375: { max: "375px" },
    },
  },
  plugins: [],
};
