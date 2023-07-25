/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA6444',
        secondary: '#12141D',
        success: '#34D399',
        light: '#CBD5E1',
        lightBlue: '#F8FBFB',
        darkBlue: '#0F172A',
      },
    },
  },
  plugins: [],
};
