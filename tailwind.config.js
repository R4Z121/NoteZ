/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'thick-white': '#ddd',
        'app-blue': 'rgb(2 132 199)',
        'app-gray': '#C0C0C0',
        'app-gray-2': '#D3D3D3',
        'app-slate': 'rgb(203 213 225)',
        'app-red': 'red',
        'app-yellow': '#FFC000'
      },
      minHeight: {
        '72': '18rem'
      }
    },
  },
  plugins: [],
}

