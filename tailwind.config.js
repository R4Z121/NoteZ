/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'thick-white': '#ddd',
        'app-blue': 'rgb(2 132 199)',
        'app-gray': '#C0C0C0',
        'app-gray-2': '#D3D3D3',
        'app-slate': 'rgb(203 213 225)',
        'app-red': 'red',
        'app-yellow': '#FFC000',
        'app-dark-purple': '#5B4B8A',
        'app-black': '#1B2430',
        'app-dark-blue': '#51557E',
        'app-light-blue': '#A5C9CA',
        'app-light-purple': '#7858A6'
      },
      minHeight: {
        '72': '18rem'
      }
    },
  },
  plugins: [],
}

