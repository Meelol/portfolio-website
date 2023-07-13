/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
            './src/**/*.{jsx,js}', 
            './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        inter: ['inter', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [require("tw-elements/dist/plugin.cjs")],
  safelist: [ 'animate-[fade-in-down_3s_ease-in-out]',
              'animate-[fade-in-left_3s_ease-in-out]',
              'animate-[fade-in-right_3s_ease-in-out]',
              'animate-[fade-in_3s_ease-in-out]',]
}

