/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1e5631',
          light:   '#2d7044',
          lighter: '#469060',
          dark:    '#143d22',
        },
        gold: {
          DEFAULT: '#c19a3b',
          light:   '#d4b25a',
          dark:    '#a07f2b',
          pale:    '#f4ecd6',
        },
        cream:    '#f7f4ec',
        parchment:'#eee5d0',
        // Keep navy as alias for backwards compat while migrating
        navy: {
          DEFAULT: '#1e5631',
          light:   '#2d7044',
          dark:    '#143d22',
        },
      },
      fontFamily: {
        serif:  ['"Palanquin Dark"', '"Roboto Slab"', 'Georgia', 'serif'],
        sans:   ['"Palanquin"', '"Inter"', 'system-ui', 'sans-serif'],
        body:   ['"Palanquin"', 'system-ui', 'sans-serif'],
        slab:   ['"Roboto Slab"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom, rgba(20,61,34,0.15) 0%, rgba(20,61,34,0.35) 60%, rgba(20,61,34,0.55) 100%)',
        'forest-gradient':
          'linear-gradient(135deg, #1e5631 0%, #143d22 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #c19a3b 0%, #d4b25a 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease-out both',
        'fade-up-200': 'fadeUp 0.6s 0.2s ease-out both',
        'fade-up-400': 'fadeUp 0.6s 0.4s ease-out both',
        'fade-up-600': 'fadeUp 0.6s 0.6s ease-out both',
        'fade-in':     'fadeIn 0.5s ease-out both',
        'slide-right': 'slideRight 0.5s ease-out both',
      },
      boxShadow: {
        'card':      '0 2px 12px rgba(30,86,49,0.06)',
        'card-hover':'0 6px 20px rgba(30,86,49,0.12)',
        'gold':      'none',
      },
    },
  },
  plugins: [],
}
