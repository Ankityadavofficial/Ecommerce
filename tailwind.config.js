// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.text-shadow-sm': {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-md': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          },
          '.text-shadow-lg': {
            textShadow: '3px 3px 7px rgba(190, 24, 93, 0.4)',
          },
          '.text-shadow-none': {
            textShadow: 'none',
          },
        });
      },
    ],
  
  
}
