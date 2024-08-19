/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        TK: {
          background: '#131921',
          default: '#131921'
        },
        lightpink: '#ffb6c1',
        firebrick: '#b22222',
        limegreen: '#32CD32',
      },
    },
  },
  plugins: [],
};