/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#4a7a3d',
          light:   '#5e9e50',
          lighter: '#78c068',
          dark:    '#2e5228',
        },
        gold: {
          DEFAULT: '#d4af37',
          light:   '#e6c86e',
          dark:    '#b89324',
          pale:    '#f7eed2',
        },
        cream:    '#faf6ee',
        parchment:'#f0e8d4',
        // Keep navy as alias for backwards compat while migrating
        navy: {
          DEFAULT: '#4a7a3d',
          light:   '#5e9e50',
          dark:    '#2e5228',
        },
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
        body:   ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom, rgba(46,82,40,0.15) 0%, rgba(46,82,40,0.35) 60%, rgba(46,82,40,0.55) 100%)',
        'forest-gradient':
          'linear-gradient(135deg, #4a7a3d 0%, #5e9e50 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #d4af37 0%, #e6c86e 100%)',
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
        'card':      '0 2px 12px rgba(27,122,67,0.06)',
        'card-hover':'0 6px 20px rgba(27,122,67,0.12)',
        'gold':      'none',
      },
    },
  },
  plugins: [],
}
