/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'], // 400, 600, 700
        cabin: ['Cabin'], // 400
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
        10: ['0.625rem', '1.125rem'],
      },
      colors: {
        primary: {
          900: '#0D100C',
          800: '#272F25',
          750: '#343E32',
          700: '#404E3E',
          600: '#5A6D57',
          DEFAULT: '#748C70',
          400: '#839980',
          300: '#93A690',
          200: '#A2B39F',
          100: '#D1D9CF',
        },
        black: '#0C0C0C',
        gray: {
          750: '#202020',
          700: '#404040',
          600: '#606060',
          DEFAULT: '#868686',
          400: '#ADADAD',
          300: '#CBCBCB',
          200: '#DFDFDF',
          100: '#EDEDED',
          50: '#F9F9F9',
        },
        state: {
          error: '#C30000',
          'error-light': '#ED2E2E',
          'error-bg': '#FFF2F2',
          warning: '#E09126',
          'warning-light': '#E09126',
          'warning-bg': '#F7E4C9',
          success: '#00966D',
          'success-light': '#00BA88',
          'success-bg': '#F3FDFA',
        },
      },
    },
  },
  plugins: [],
}
