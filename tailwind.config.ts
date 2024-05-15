import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '375': '375px',
      },
      colors: {
        tabBarGray: '#8C8787',
        buttonGray: '#C4C4C4',
        buttonHover: 'rgb(163, 163, 163)',
      },
    },
  },
  plugins: [],
};
export default config;
