/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 3px 12px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

