/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#9333EA',
          600: '#7928CA',
          700: '#6B21A8',
        },
      },
    },
  },
  plugins: [],
};