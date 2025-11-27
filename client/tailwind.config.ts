import { Config } from 'tailwindcss';

const config: Config = {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  important: '#twRoot',
  theme: {
    extend: {
      colors: {
        'custom-gray': '#8d8d8d',
        'custom-orange': '#f60',
      },
      borderColor: {
        'custom-dark': '#221616',
      },
    },
  },

  corePlugins: {
    preflight: true,
  },
  plugins: [],
};

export default config;
