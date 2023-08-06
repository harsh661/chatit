/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-gray': '#141419',
        'alt-gray': '#0f0f13',
        'lighter-gray': '#222429',
        'lightest-gray': '#a9abad',
        'dark-text': '#7e7e7e',
        'accent-green': '#258c60',
        'hover-green': '#40bf86'
      }
    },
  },
  plugins: [],
}
