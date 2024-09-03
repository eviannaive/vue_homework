/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      black: {
        DEFAULT: '#404040'
      },
      blue: { light: '#78a5bc', DEFAULT: '#79a6bd' },
      white: '#fff',
      yellow: '#fbedca',
      pink: '#fcbfc7'
    },
    extend: {
      padding: {
        5: '5px',
        10: '10px',
        15: '15px',
        30: '30px'
      },
      margin: {
        5: '5px',
        10: '10px',
        15: '15px',
        30: '30px'
      },
      borderRadius: {
        5: '5px',
        10: '10px'
      }
    }
  },
  plugins: []
}
