/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         ghostwhite: '#F8F8FF',
//       },
//       zIndex: {
//         10: '10',
//         9: '9',
//         8: '8',
//         7: '7',
//         6: '6',
//       },
//     },
//   },
//   plugins: [],
// };
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
      colors:{
        primary:"var(--primaryGreen)",
      }
    },
  },
  plugins: [],
}
