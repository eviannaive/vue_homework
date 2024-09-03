/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      blue: '#79a6bd',
      white: '#fff'
    },
    extend: {
      padding: {
        10: '10px',
        15: '15px',
        30: '30px'
      }
    }
  },
  plugins: []
}
