/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar" : {
          "-ms-overflow-style" : "none",
          "scrollbar-width" : "none"
        },
      };
      addUtilities(newUtilities);
    }
  ],
}



