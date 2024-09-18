/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppinslight: ["PoppinsLight", "sans-serif"],
        poppinsextralight: ["PoppinsExtraLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
