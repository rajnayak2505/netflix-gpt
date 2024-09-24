/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'nfred': '#d9232e',
        'bginput': '#181717',
        'divcenter': 'rgba(0, 0, 0, 0.7)'
        
      },
    },
  },
  plugins: [],
}