/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Pure near-black base + layered charcoal/graphite panels.
        ink: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#161616',
          600: '#1c1c1c',
        },
        // Crimson accent — used sparingly on a black base. Black dominates,
        // red is the punch. DEFAULT = rich crimson, soft = lighter red for
        // legible text/hover, deep = darker stop for gradients.
        accent: {
          DEFAULT: '#dc2626', // red-600 — primary crimson
          soft: '#f87171', // red-400 — readable red for text/hover
          deep: '#991b1b', // red-800 — dark gradient stop
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -3%) scale(1.06)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.97)' },
        },
        driftAlt: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-5%, 3%) scale(1.08)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite',
        driftAlt: 'driftAlt 28s ease-in-out infinite',
        bob: 'bob 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
