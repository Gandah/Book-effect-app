/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const threeDTranforms = require("@xpd/tailwind-3dtransforms") 

// Rotate X utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.arotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(-180deg)',
    },
  })
})

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "lighter-gray": "rgb(243, 243, 243)",
        "white-400": "rgb(254, 254, 254)"
      },
    },
  },
  plugins: [rotateY, threeDTranforms],
}

