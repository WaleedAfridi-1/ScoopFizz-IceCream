
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Cedarville Cursive"', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        apple: ['"Homemade Apple"', 'cursive'],
      },
    },
  },
  plugins: [],
}

