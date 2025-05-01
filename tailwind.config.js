/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#754DC2",
        secondary: "#4CAF50",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'carousel-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'fade-in-out': {
          '0%, 100%': { opacity: 0, transform: 'translateY(-10px)' },
          '10%, 90%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'ping-slow': 'ping-slow 2s ease-out infinite',
        'carousel-scroll': 'carousel-scroll 25s linear infinite',
        'fade-in-out': 'fade-in-out 3.5s ease-in-out',
        'slide-fade-in-up': 'slide-fade-in-up 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}
