/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#007AFF',
        'apple-gray': '#1d1d1f',
        'apple-light-gray': '#f5f5f7',
        'apple-text-gray': '#86868b',
        'apple-orange': '#ff6900',
        'apple-yellow': '#ffcc02'
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [],
}