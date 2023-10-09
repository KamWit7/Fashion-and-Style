/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'], // 400, 600, 700
      },
      fontWeight: {
        normal: 400,
        medium: 600,
        bold: 700,
      },

      fontSize: {
        64: ['4rem', '5.6rem'],
        56: ['3.5rem', '4.2rem'],
        44: ['2.75rem', '3.85rem'],
        40: ['2.5rem', '3.5rem'],
        32: ['2rem', '2.8rem'],
        24: ['1.5rem', '2.1rem'],
        20: ['1.25rem', '1.75rem'],
        18: ['1.125rem', '2.025rem'],
        16: ['1rem', '1.4rem'],
        14: ['0.875rem', '1.575rem'],
        12: ['0.75rem', '1.35rem'],
      },
    },
  },
  plugins: [],
}
