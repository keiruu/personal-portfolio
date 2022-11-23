/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'view': '70vh',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lightyellow': '#FFF4E0',
        'darkyellow': '#E1BE7E',
        'lightred': '#FBA7A0',
        'darkred': '#A5514A',
        'lightpink': '#FFD4D4',
        'lightpeach': '#FDCEBA',
        'darkpeach': '#836355',
        'lightgreen': '#D6DCCC',
        'darkgreen': '#919B81',
        'primary': '#383838',
        'lightgray': '#EEEFF5',
        'gray': '#676464',
        'brightpink': '#F87165'
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}
