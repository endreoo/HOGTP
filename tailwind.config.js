/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-subtle': 'bounceSoft 2s infinite',
      },
    },
  },
  plugins: [],
};