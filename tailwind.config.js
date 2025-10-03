/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:           '900': 'oklch(0.309 0.119 259.65)',
        },
      },
    },
  },
  plugins: [],
}
