import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1A2F',
          700: '#142A48',
        },
        gold: {
          500: '#C9A24B',
          300: '#E2C684',
        },
        ivory: {
          50: '#F7F3EA',
          100: '#EFE9D9',
        },
        ink: {
          900: '#15202B',
          600: '#4A5663',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '20': '1.25rem',
        '28': '1.75rem',
        '40': '2.5rem',
        '56': '3.5rem',
        '76': '4.75rem',
        '104': '6.5rem',
      },
      letterSpacing: {
        display: '-0.02em',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '400ms',
        slow: '800ms',
        cinematic: '1400ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
