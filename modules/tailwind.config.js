const { color } = require('./tailwind/palette');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins.{js,ts}',
      'nuxt.config.{js,ts}',
      'assets/css/**/*.{scss,css}',
    ],
  },
  darkMode: false,
  // Reference: https://tailwindcss.com/docs/theme
  theme: {
    colors: {
      ...color,
    },
    fontFamily: {
      head: ['Nunito', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      // body: ['Nunito Sans', 'Impact', 'Arial', 'sans-serif'],
      // body: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      body: [
        '-system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      flexGrow: {
        2: 2,
      },
      // Default Styles: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.head').join(),
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              fontFamily: theme('fontFamily.head').join(),
            },
            h3: {
              fontFamily: theme('fontFamily.head').join(),
            },
            h4: {
              fontFamily: theme('fontFamily.head').join(),
            },
            h5: {
              fontFamily: theme('fontFamily.head').join(),
            },
            a: {
              color: color.fuscia,
              textDecoration: 'none',
              fontWeight: theme('fontWeight.normal'),
              '&:hover': {
                color: color['fuscia-70'],
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: color['gray-dark'],
              backgroundColor: color['gray-lightest'],
              fontWeight: theme('fontWeight.normal'),
            },
            'blockquote > p': {
              paddingTop: theme('spacing.6'),
              paddingBottom: theme('spacing.6'),
            },
            code: {
              color: color['purple-dark'],
              backgroundColor: color['gray-lightest'],
              padding: `${theme('spacing["0.5"]')} ${theme('spacing["1.5"]')}`,
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          },
        },
        lg: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
            },
          ],
        },
        xl: {
          css: [
            {
              h1: {
                fontSize: '2.75rem',
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
