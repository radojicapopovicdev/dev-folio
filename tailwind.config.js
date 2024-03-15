/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    screens: {
      sm: "393px", // mobile
      md: "768px", // tablets
      lg: "1024px", // small laptops
      xl: "1280px", // laptops/desktops
      "2xl": "1920px", // large screens
      "3xl": "2560px", // 2k screens
    },
  },
  plugins: [],
};
