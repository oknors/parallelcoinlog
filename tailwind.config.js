const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
module.exports = {
  purge: {
    content: [ "./src/**/*.svelte" ],
    options: {
      defaultExtractor: (content) => [
        ...tailwindExtractor(content),
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
      keyframes: true,
    },
  },
  theme: {
    colors: {
      'light': {
        'fg': '#303030',
        'bg': '#CFCFCF',
        'bg_border': '#EAECEF',
        'meta': '#586069',
        'table_border': '#dfe2e5'
      },
      'dark': {
        'fg': '#CFCFCF',
        'bg': '#303030',
        'bg_border': '#4C4C4C',
        'meta': '#9B9B9B',
        'table_border': '#586069'
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
