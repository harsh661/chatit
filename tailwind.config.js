/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-gray': '#1b1b1b',
        'alt-gray': '#242424',
        'lighter-gray': '#36373a',
        'lightest-gray': '#a9abad',
        'dark-text': '#7e7e7e',
        'accent-green': '#258c60',
        'hover-green': '#40bf86'
      }
    },
  },
  plugins: [],
}
