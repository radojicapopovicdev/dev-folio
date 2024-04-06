/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gridular: ['"Gridular"', 'sans-serif'],
      sora: ["Sora", "sans-serif"],
      karla: ["Karla", "sans-serif"],
      pathway: ['"Pathway Gothic One"', "sans-serif"],
      bigs: ["Big Shoulders Display", "sans-serif"]
    },
    screens: {
      sm: "375px", // mobile
      smx: "320px", //smol mobile
      md: "768px", // tablets
      lg: "1024px", // small laptops
      xl: "1280px", // laptops/desktops
      "2xl": "1920px", // large screens
      "3xl": "2400px", // 2k screens
      mac: "3020px",
      ultrawide: "3600px",
    },
    extend: {
      backgroundImage: {
        'custom-radial': "radial-gradient(56.31% 35.93% at 50% 50%, #4E6E58 0%, #000000 98.72%)",
      }
    },
  },
  plugins: [],
};
