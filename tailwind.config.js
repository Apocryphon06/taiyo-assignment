/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#323232',
        secondary: '#525252',
        grayLight: '#f2f2f2',
        cyan: '#00c7ff',
      },
    },
  },
  plugins: [],
}
