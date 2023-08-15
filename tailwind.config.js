/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: {
        DEFAULT: "#A626D3", // You can set the default solid color
        dark: "#672280",
      },
      black1: "#000000",
      black2: "#222222",
      white: "#FFFFFF",
      gray:"#D5D4D8",
    },
    extend: {
      boxShadow: {
        bottom: "0px 2.9825618267059326px 7.456404209136963px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
