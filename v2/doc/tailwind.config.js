module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#21222b',
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
};