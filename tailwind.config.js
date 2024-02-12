/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      navBarColor: "#f9fafb",
      navBarText: "#020617",
      navBarHover: "##dc2626",
      navBarHamburger: "#020617",
      sectionLight: "#f3f4f6",
      sectionLightText: "#020617",
      sectionDark: "#262626",
      sectionDarkText: "#f8fafc",
      burgandy: "#450a0a",
      white: "#f8fafc",
      black: "#020617",
      lightGrey: "#94a3b8",
      green: "#064e3b",
    },
  },
  plugins: [],
};
