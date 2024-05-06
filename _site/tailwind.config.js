/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      
    },
  },
  plugins: [],
}

