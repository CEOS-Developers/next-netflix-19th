/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      nb: ['8.2px', '15.4px'],
      header: ['17.2px', '30.45px'],
      cont1: ['13.72px', '20px'],
      cont2: ['13.64px', '20px'],
      play : ['20.46px', '30px'],
    },
    colors: {
      'grey': '#8C8787',
    },
    extend: {},
  },
  plugins: [],
}