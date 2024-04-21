/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  safelist: [
    {
      pattern: /grid-(cols|rows)-\d+$/
    },
    {
      pattern: /gap-\d+$/
    },
    {
      pattern: /btn-.*$/
    }
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}
