/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'slide-one': "url('/src/img/slider/bg-1.jpg')",
        'slide-two': "url('/src/img/slider/bg-2.jpg')",
        'slide-three': "url('/src/img/slider/bg-3.jpg')",
        'slide-four': "url('/src/img/slider/bg-4.jpg')",
      },
      boxShadow: {
        'card-shadow': '0px 20px 150px rgba(193, 193, 193, 0.32)',
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
