/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Claude-style warm cream + coral palette
        cream: {
          50:  '#fdfcf8',
          100: '#faf9f5',
          200: '#f5f3ec',
          300: '#ebe8dc',
          400: '#d8d3c2',
          500: '#a8a39a',
          600: '#6b6a65',
          700: '#3d3a35',
          800: '#2a2724',
          900: '#1f1d1a',
          950: '#15130f',
        },
        coral: {
          50:  '#fdf6f1',
          100: '#fae4d6',
          200: '#f5d4c0',
          300: '#eeb295',
          400: '#e89a7a',
          500: '#d97757', // Claude accent
          600: '#c05b3d',
          700: '#9d4730',
          800: '#7a3826',
          900: '#5a291c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
    },
  },
  plugins: [],
}
