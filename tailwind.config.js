/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 
        "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
      },
      keyframes: {
        bounce: {
            from: { transform: "translateY(10px)" },
            to: {transform: "translateY(0)"},
        },
      },
    },
  },
  plugins: [],
}
