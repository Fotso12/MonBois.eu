import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#fdfbf7',
          100: '#f7f2e8',
          200: '#eee0cb',
          300: '#e1c8a4',
          400: '#cfaa76',
          500: '#be8c4e',
          600: '#a9733f',
          700: '#895634',
          800: '#71452e',
          900: '#5c3928',
          950: '#341d14',
        },
        forest: {
          800: '#1c3829',
          900: '#14291e',
        }
      },
    },
  },
  plugins: [],
};
export default config;
