/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {
  keyframes: {
    'fade-in-scale': {
      '0%': { opacity: '0', transform: 'scale(0.95)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
    'fade-out-scale': {
      '0%': { opacity: '1', transform: 'scale(1)' },
      '100%': { opacity: '0', transform: 'scale(0.95)' },
    },
  },
  animation: {
    'fade-in-scale': 'fade-in-scale 0.25s ease-out',
    'fade-out-scale': 'fade-out-scale 0.2s ease-in forwards',
  },
}
 },
  plugins: [],
}

