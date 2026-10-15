/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Richer, deeper Sage Green palette (toned up for deeper contrast and vibrancy)
        sage: {
          50: '#F2F7F1',
          100: '#E2EDE1',
          200: '#C8DCC6',
          300: '#A7C1A4',
          400: '#8EA98B',
          500: '#6E936B',
          600: '#567A53', // Deep saturated sage
          700: '#436140', // Rich dark forest sage
          800: '#31482F',
          900: '#1F301E',
          950: '#101B0F',
        },
        primary: {
          DEFAULT: '#4E724B', // Richer, darker, more saturated green
          dark: '#2A4328',
          light: '#6E956B',
        },
        secondary: {
          DEFAULT: '#62895F',
          dark: '#3F5B3D',
          light: '#8EA98B',
        },
        accent: {
          DEFAULT: '#4E724B',
          dark: '#2A4328',
          light: '#8EA98B',
          gold: '#C59A3F',
        },
        schoolBg: '#F2F6F1',
        schoolSurface: '#FFFFFF',
        mainText: '#0F1E0E', // Crisp, high-contrast dark green-black
        mutedText: '#3B5239', // Rich legible secondary text
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(20, 36, 18, 0.08), 0 1px 2px rgba(20, 36, 18, 0.04)',
        'apple': '0 12px 32px rgba(20, 36, 18, 0.1), 0 2px 8px rgba(20, 36, 18, 0.04)',
        'apple-hover': '0 22px 48px rgba(20, 36, 18, 0.16), 0 6px 16px rgba(20, 36, 18, 0.06)',
        'apple-modal': '0 35px 70px rgba(10, 20, 9, 0.35), 0 10px 30px rgba(10, 20, 9, 0.15)',
      },
      screens: {
        'xs': '360px',
        '2xs': '300px',
      },
    },
  },
  plugins: [],
}
