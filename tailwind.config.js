/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '900': 'oklch(0.2099 0.0341 263.44)',
        },
      },
    },
  },
  plugins: [],
}
