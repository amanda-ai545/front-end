/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-transparent': 'rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        jost: ['Jost', 'san-serif'],
      },
      screens: {
        xs: { max: '575.98px' }, // X-Small devices (portrait phones, 320px and up)
        sm: { min: '576px', max: '767.98px' }, // Small devices (landscape phones, 576px and up)
        md: { min: '768px', max: '991.98px' }, // Medium devices (tablets, 768px and up)
        lg: { min: '992px', max: '1199.98px' }, // Large devices (desktops, 992px and up)
        xl: { min: '1200px' }, // X-Large devices (large desktops, 1200px and up)
      },
    },
  },
  plugins: [],
};
