import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        sidebar: "url('/sidebar.png')",
      },
      gridTemplateColumns: {
        dashboard: '14.5rem 1fr',
        card: '6.75rem 1fr',
      },
      maxWidth: {
        dashboard: '1600px',
      },
    },

    fontFamily: {
      default: 'Nunito Sans, sans-serif',
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    lineHeight: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',
      danger: '#EB5757',
      gradientStart: '#7FD1CC',
      gradientEnd: '#9694F5',

      green: {
        100: '#50B2C0',
        200: '#255D6A',
        300: '#0A313C',
      },

      purple: {
        100: '#8381D9',
        200: '#2A2879',
      },

      gray: {
        100: '#F8F9FC',
        200: '#E6E8F2',
        300: '#D1D6E4',
        400: '#8D95AF',
        500: '#303F73',
        600: '#252D4A',
        700: '#181C2A',
        800: '#0E1116',
      },

      radii: {
        xs: '2.5px',
        sm: '5px',
        md: '10px',
        lg: '20px',
        full: '99999px',
      },
    },
  },
  plugins: [],
}
export default config
