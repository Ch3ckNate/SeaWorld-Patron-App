/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f8ff',
          100: '#ebf1ff',
          200: '#d6e4ff',
          300: '#b3ccff',
          400: '#809fff',
          500: '#4d73ff',
          600: '#1a45ff',
          700: '#0033ff',
          800: '#0029cc',
          900: '#001f99',
        },
        navy: {
          50: '#f2f5f9',
          100: '#e6ebf3',
          200: '#bfcce0',
          300: '#99adcd',
          400: '#4d6fa7',
          500: '#003181',
          600: '#002c74',
          700: '#002461',
          800: '#001d4d',
          900: '#00173f',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}