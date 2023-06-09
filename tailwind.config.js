/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        // 'white': 'ZZZZZZ 35px 35px rgba(0, 0, 0, 0.25)',
        'soft': [
          '5px 5px 5px rgba(0, 0, 0, 0.15)',
          '-5px -5px 5px rgba(255, 255, 255, 1)',
        ],
        'hard' : [
          '1px 1px 0px rgba(0, 0, 0, 1)',
          '-0.5px -0.5px 0px rgba(255, 255, 255, 1)'
        ],
        'glow' : [
          '0 0 8px var(--link-glow)'
        ]
      }
    },
    colors: {
      main: 'var(--main-color)',
      background: 'var(--bg-color)',
      background2: 'var(--bg-color2)',
      background3: 'var(--bg-color3)',
      transparent: 'var(--transparent)',
      hover: 'var(--link-hover)'
    },
    fontFamily: {
      'display': ['druk'],
      'body': ['monserrat-medium'],
      'italic': ['monserrat-italic']
    }
  },
  plugins: [],
  darkMode: 'class',
}