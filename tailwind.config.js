
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {

      container: {
        center: true,
        padding: '10%',
      },
      colors: {
        primary: '#1c1c22',
      },
      aspectRatio: {
        '16/9': '16/9',
        '4/3': '4/3',
        '1/1': '1/1',
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

