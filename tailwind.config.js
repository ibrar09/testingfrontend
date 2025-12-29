/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        /* --- Existing animations --- */
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-color': {
          '0%, 100%': { backgroundColor: '#facc15' },
          '50%': { backgroundColor: '#f59e0b' },
        },
        'cart-wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(15deg)' },
        },

        /* --- Hero / general animations --- */
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        growLine: {
          '0%': { width: '0' },
          '100%': { width: '8rem' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },

        /* --- Bottom popup animations --- */
        trolley: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        slideRightBounce: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(50%) translateY(-10px)' },
          '100%': { transform: 'translateX(120%)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        floatTool: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(10deg)' },
          '100%': { transform: 'translateY(0) rotate(-10deg)' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(200%) rotate(360deg)', opacity: 0 },
        },

        /* ----------------------------- */
        /* ⭐ NEW ANIMATIONS FOR SPOTLIGHT */
        /* ----------------------------- */

        fadeScale: {
          "0%": { opacity: 0, transform: "scale(0.94)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        },

        fadeUpSmooth: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },

      animation: {
        /* Existing animations */
        'bounce-slow': 'bounce-slow 2s infinite',
        'pulse-color': 'pulse-color 3s infinite',
        'cart-wiggle': 'cart-wiggle 0.5s infinite',

        slideUp: 'slideUp 0.9s ease-out forwards',
        fadeInSlow: 'fadeInSlow 1.5s ease-in-out forwards',
        growLine: 'growLine 1.2s ease-out forwards',
        shine: 'shine 3s linear infinite',

        trolley: 'trolley 4s linear infinite',
        slideRightBounce: 'slideRightBounce 4s ease-in-out infinite',
        bounceSlow: 'bounceSlow 1s infinite',
        spinSlow: 'spinSlow 4s linear infinite',
        fadeUp: 'fadeUp 0.7s ease-out',
        floatTool: 'floatTool 2s ease-in-out infinite',
        confetti: 'confetti 4s linear infinite',

        /* ⭐ NEW Spotlight Animations */
        fadeScale: "fadeScale 0.6s ease-out",
        fadeUpSmooth: "fadeUpSmooth 0.55s ease-out",
      },

      colors: {
        primary: "#023A9A",
        secondary: "#F28C38",
        "text-color": "#000000",
        background: "#FFFFFF",
      },

      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
