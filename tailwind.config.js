/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["*"],
  theme: {
    screens: {
      'sm': "576px",
      'md': "768px"
    },
    fontFamily: {
      'myFont':["Kanit",'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
