module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#21222b',
      },
      fontSize: {
        '6xl': '4rem',
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
};