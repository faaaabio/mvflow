/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
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
    },
  },
  plugins: [],
}
