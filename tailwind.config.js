/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0px',
        sm: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
      },
      screens: {
        DEFAULT: '1042px',
      },
    },
    extend: {
      fontFamily: {
        airport: ['Airport', 'sans-serif'],
      },
      colors: {
        // Cores principais
        'black-primary': '#181818',
        'white': '#FFFFFF',

        // Aux colors
        'aux-0': '#FFFFFF',
        'aux-1': '#EBEBEB',
        'aux-2': '#D4D4D4',
        'aux-3': '#828282',

        // Legacy aliases (para compatibilidade)
        'gray-light': '#EBEBEB',
        'text-dark': '#4D4D4D',
        'text-medium': '#D4D4D4',
        'text-aux': '#828282',
        'border-gray': '#D4D4D4',
      },
      fontSize: {
        '9xl': ['128px', { lineHeight: '132px', letterSpacing: '-6px' }],
        '8xl': ['96px', { lineHeight: '100px', letterSpacing: '-6px' }],
        '7xl': ['72px', { lineHeight: '76px', letterSpacing: '-4px' }],
        '6xl': ['60px', { lineHeight: '64px', letterSpacing: '-4px' }],
        '5xl': ['48px', { lineHeight: '52px', letterSpacing: '-4px' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-2px' }],
        '3xl': ['30px', { lineHeight: '34px', letterSpacing: '-2px' }],
        '2xl': ['24px', { lineHeight: '28px', letterSpacing: '-1px' }],
        'xl': ['20px', { lineHeight: '24px', letterSpacing: '-1px' }],
        'lg': ['18px', { lineHeight: '22px', letterSpacing: '-1px' }],
        'base': ['16px', { lineHeight: '20px', letterSpacing: '-1px' }],
        'sm': ['14px', { lineHeight: '18px', letterSpacing: '0px' }],
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0px' }],
      },
    },
  },
  plugins: [],
}
