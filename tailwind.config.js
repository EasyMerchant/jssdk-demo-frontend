/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '392': '392px',
        '1-392': 'calc(100% - 392px)',
      },
      height: {
        '051':'51px',
      },
      padding: {
        '034': '34px',
      },
      boxShadow: {
        'sidebar': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

