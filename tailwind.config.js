/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#eff1f5",
        text: "#4c4f69",
        sky: "#04a5e5"
      },
      fontFamily: {
        jetbrains: "JetBrains Mono"
      }
    },
  },
  plugins: [],
}
