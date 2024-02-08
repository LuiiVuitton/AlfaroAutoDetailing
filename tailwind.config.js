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
      navBarColor: "#020617",
      navBarText: "#f1f5f9",
      navBarHover: "##dc2626",
      navBarHamburger: "#f1f5f9",
    },
  },
  plugins: [],
};
