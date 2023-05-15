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
      transparent: 'var(--transparent)',
      accent: 'var(--acc-color)',
      glassw: 'var(--glass-w)',
      glassb: 'var(--glass-w)',
      shadow: 'var(--shadow)',
      hover: 'var(--link-hover)',
      minthov: 'var(--mint-hover)'
    },
    fontFamily: {
      'display': ['druk'],
      'body': ['monserrat-medium'],
      'italic': ['monserrat-italic']
    }
    // fontSize: {
    //   'xs': ['0.75rem', {
    //     lineHeight: '1rem',
    //     fontFamily: 'monserrat-italic',
    //   }],
    //   'sm': ['0.875rem', {
    //     lineHeight: '1.25rem',
    //     fontFamily: 'monserrat-italic',
    //   }],
    //   'base': ['1rem', {
    //     lineHeight: '1.5rem'
    //   }],
    //   'lg': ['1.125rem', {
    //     lineHeight: '1.75rem'
    //   }],
    //   'xl': ['1.25rem', {
    //     lineHeight: '1.75rem'
    //   }],
    //   '2xl': ['1.5rem', {
    //     lineHeight: '2rem'
    //   }],
    //   '3xl': ['1.875rem', {
    //     lineHeight: '2.25rem'
    //   }],
    //   '5xl': ['3rem', {
    //     lineHeight: '1'
    //   }],
    // }
  },
  plugins: [],
  darkMode: 'class',
}