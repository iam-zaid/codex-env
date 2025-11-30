import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1D2E',
        tealGlow: '#00D1FF',
        sfBlue: '#1C7ED6'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(12,68,120,0.5), transparent 70%)'
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
