/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        PurpleDark: '#1F1B27', // Cambia '#ff00ff' por el valor hexadecimal de tu color personalizado
        NavPurple: '#15161E',
      },
    },
  },
  plugins: [],
}

