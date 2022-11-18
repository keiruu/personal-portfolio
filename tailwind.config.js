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
        'lightpink': '#FBA7A0',
        'darkpink': '#A5514A',
        'lightpeach': '#FDCEBA',
        'darkpeach': '#836355',
        'lightgreen': '#D6DCCC',
        'darkgreen': '#919B81',
        'primary': '#383838',
        'lightgray': '#EEEFF5',
        'brightpink': '#F87165'
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}
