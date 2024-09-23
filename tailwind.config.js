/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        custom: '1170px', // Definindo um breakpoint personalizado de 700px
      },
    },
  },
  plugins: [],
};
