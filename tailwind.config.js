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
        'gray-light': '#EBEBEB',

        // Cores de texto
        'text-dark': '#4D4D4D',
        'text-medium': '#6B7280',
        'text-aux': '#9CA3AF',

        // Cores de borda
        'border-gray': '#D1D5DB',
      },
    },
  },
  plugins: [],
}
