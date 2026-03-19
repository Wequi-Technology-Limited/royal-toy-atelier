/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#f9f6f1',
          100: '#f2ece3',
          200: '#e8dece',
          300: '#d8c8ad',
          400: '#c6af86',
          500: '#b69460',
        },
        stone: {
          950: '#1e1a16',
        },
        gold: {
          300: '#d7c29a',
          400: '#c5a96c',
        },
      },
      opacity: {
        68: '0.68',
      },
      boxShadow: {
        soft: '0 20px 60px -24px rgba(76, 58, 34, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(215,194,154,0.26), transparent 38%)',
      },
      letterSpacing: {
        luxury: '0.24em',
      },
    },
  },
  plugins: [],
};
