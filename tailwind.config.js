/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.{html,js}', './source/**/**/*.{js,pug,html}', './source/pug/**/**/*.pug'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gotham Pro"', '"Arial"', '"Helvetica"', 'sans-serif'],
      },
    },
    screens: {
      xs: '425px',
      // => @media (min-width: 425px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xlg: '1100px',
      // => @media (min-width: 1100px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      black: {
        '0': '#000000',
      },
      dark: {
        '50': '#171818',
      },
      white: {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
      mako: {
        '50': '#f4f5f7',
        '100': '#e4e7e9',
        '200': '#ccd1d5',
        '300': '#a8b1b8',
        '400': '#7d8993',
        '500': '#626e78',
        '600': '#545d66',
        '700': '#484f56',
        '800': '#42474d',
        '900': '#383b41',
        '950': '#232529',
      },
      'picton-blue': {
        '50': '#f1f9fe',
        '100': '#e2f1fc',
        '200': '#bfe3f8',
        '300': '#86cef3',
        '400': '#3fb1e9',
        '500': '#1e9bd9',
        '600': '#117bb8',
        '700': '#0f6395',
        '800': '#10547c',
        '900': '#134667',
        '950': '#0d2d44',
      },
      mischka: {
        '50': '#f6f7f8',
        '100': '#eaecef',
        '200': '#d0d5dd',
        '300': '#bfc7d1',
        '400': '#a0aaba',
        '500': '#8993a8',
        '600': '#788098',
        '700': '#6b718a',
        '800': '#5a5f73',
        '900': '#4b4f5d',
        '950': '#30323b',
      },
      'curious-blue': {
        '50': '#f1f8fe',
        '100': '#e2f1fc',
        '200': '#bfe1f8',
        '300': '#86cbf3',
        '400': '#46afea',
        '500': '#1c8ac8',
        '600': '#1177b8',
        '700': '#0f5f95',
        '800': '#10517c',
        '900': '#134467',
        '950': '#0d2b44',
      },
      'lemon-chiffon': {
        '50': '#fefce8',
        '100': '#fff9c2',
        '200': '#ffef88',
        '300': '#ffdf44',
        '400': '#fecb11',
        '500': '#eeb204',
        '600': '#cd8801',
        '700': '#a46004',
        '800': '#874b0c',
        '900': '#733e10',
        '950': '#431f05',
      },
      'mexican-red': {
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fecaca',
        '300': '#fda4a4',
        '400': '#f97070',
        '500': '#f14242',
        '600': '#de2424',
        '700': '#ba1b1b',
        '800': '#a71c1c',
        '900': '#801c1c',
        '950': '#460909',
      },
      porcelain: {
        '50': '#f3f6f8',
        '100': '#ebf0f3',
        '200': '#d3dee4',
        '300': '#acc2cd',
        '400': '#7fa2b1',
        '500': '#5f8698',
        '600': '#4b6d7e',
        '700': '#3d5867',
        '800': '#354b57',
        '900': '#30404a',
        '950': '#202a31',
      },
    },
  },
  plugins: [],
};
