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
      serif: ['Italiana', 'serif'],
    },
    extend: {
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      aspectRatio: {
        'landscape': '4 / 3 ',
        'portrait': '3 / 4',
        'portrait-tall': '3 / 5',
      },
      minHeight:{
        '120': '120vh',
        '110': '110vh',
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '40': '40vh',
        '30': '30vh',
      },
      colors: {
        light: '#F2D1C8',
        medium: '#CCADA1',
        dark: '#B57C71',
        accentlight: '#557879',
        accentdark: '#364448',
      }
    },
  },
  plugins: [
  ],
}

