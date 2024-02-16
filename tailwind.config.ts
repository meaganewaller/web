/** @type { import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

const sansFontFamily = ['var(--font-sans)', ...fontFamily.sans];
const extraFontFamily = ['var(--font-extra)', ...fontFamily.sans];
const serifFontFamily = ['var(--font-serif)', ...fontFamily.serif];
const monoFontFamily = ['var(--font-mono)', ...fontFamily.mono];
const pixelFontFamily = ['var(--font-pixel)', ...fontFamily.mono];

const contentWidth = (theme, width = '3') => {
  return {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme('spacing.3'),
    paddingRight: theme('spacing.3'),

    '@screen md': {
      textAlign: theme('text.left'),
      maxWidth: theme(`maxWidth.${width}xl`),
      paddingLeft: theme('spacing.0'),
    },
  }
}

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  mode: 'jit',
  important: true,
  theme: {
    colors: {
      pink: {
        50: '#FEF0F7',
        100: '#FEE2EF',
        200: '#FCC5DF',
        300: '#FBACD1',
        400: '#F98FC1',
        500: '#F872B1',
        600: '#F52E8B',
        700: '#D10A67',
        800: '#880743',
        900: '#440322',
        950: '#220211',
      },
      green: {
        50: '#F7FEF0',
        100: '#EFFEE2',
        200: '#DFFCC5',
        300: '#D1FBAC',
        400: '#C1F98F',
        500: '#B1F872',
        600: '#8BF52E',
        700: '#67D10A',
        800: '#438807',
        900: '#224403',
        950: '#112202',
      },
      blue: {
        50: '#F0F7FE',
        100: '#E2EFFE',
        200: '#C5DFFC',
        300: '#ACD1FB',
        400: '#8FC1F9',
        500: '#72B1F8',
        600: '#2E8BF5',
        700: '#0A67D1',
        800: '#074388',
        900: '#032244',
        950: '#021122',
      },
      orange: {
        50: '#FEF6F0',
        100: '#FEECE2',
        200: '#FCDAC5',
        300: '#FBCAAC',
        400: '#F9B88F',
        500: '#F8A672',
        600: '#F57A2E',
        700: '#D1560A',
        800: '#883807',
        900: '#441C03',
        950: '#220E02',
      },
      yellow: {
        50: '#FEFEF0',
        100: '#FDFEE2',
        200: '#FAFCC5',
        300: '#F8FBAC',
        400: '#F6F98F',
        500: '#F4F872',
        600: '#EEF52E',
        700: '#CAD10A',
        800: '#848807',
        900: '#424403',
        950: '#212202',
      },
      turquoise: {
        50: '#F0FEFE',
        100: '#E2FEFD',
        200: '#C5FCFA',
        300: '#ACFBF8',
        400: '#8FF9F6',
        500: '#72F8F3',
        600: '#2EF5EE',
        700: '#0AD1CA',
        800: '#078884',
        900: '#034442',
        950: '#022221',
      },
      purple: {
        50: '#FAF0FE',
        100: '#F5E2FE',
        200: '#EBC5FC',
        300: '#E2ACFB',
        400: '#D88FF9',
        500: '#CD72F8',
        600: '#B62EF5',
        700: '#920AD1',
        800: '#5F0788',
        900: '#300344',
        950: '#180222',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.pink.900'),
          fontSize: theme('fontSize.lg')[0],
          '@screen md': {
            fontSize: theme('fontSize.xl')[0],
          },
          lineHeight: theme('lineHeight.7'),
          '> *': {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10'),
          },
          p: {
            marginTop: theme('spacing.7'),
            marginBottom: theme('spacing.7'),
            overflowX: 'auto',
            ...contentWidth(theme),
          },

          'h2, h3, h4': {
            color: theme('colors.purple.700'),
            fontWeight: theme('fontWeight.semibold'),
            ...contentWidth(theme),
          },
          h2: {
            fontSize: theme('fontSize.3xl')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.12'),
            marginBottom: theme('spacing.4'),
            '@screen md': {
              marginTop: theme('spacing.16'),
              marginBottom: theme('spacing.4'),
            },
          },
          h3: {
            fontSize: theme('fontSize.xl')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.4'),
            '@screen md': {
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.4'),
            },
          },
          h4: {
            fontSize: theme('fontSize.lg')[0],
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.4'),
            '@screen md': {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.2'),
            },
          },
          ':is(h2, h3) + *': {
            marginTop: 0,
          },

          // Images
          'img:not(.pic)': {
            marginLeft: 'auto',
            marginRight: 'auto',
            '@screen lg': {
              textAlign: theme('text.left'),
              maxWidth: theme('maxWidth.5xl'),
              paddingLeft: theme('spacing.0'),
            },
          },

          a: {
            color: theme('colors.pink.600'),
            fontWeight: theme('fontWeight.semibold'),
            textDecoration: 'underline',
            textDecorationColor: theme('colors.pink.700'),
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.150'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
          },
          'a:hover': {
            color: theme('colors.pink.700'),
            textDecorationColor: theme('colors.pink.800'),
          },
          strong: {
            color: theme('colors.blue.900'),
            fontWeight: theme('fontWeight.semibold'),
          },
          code: {
            display: 'inline-block',
            color: theme('colors.purple.700'),
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
            backgroundColor: theme('colors.purple.100'),
            borderRadius: theme('borderRadius.lg'),
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1'),
          },
          'a code': {
            color: 'inherit',
          },
          ':is(h2, h3) code': {
            fontWeight: theme('fontWeight.bold'),
          },

          // Quotes
          blockquote: {
            // @apply px-24 border-blue-500 py-8 relative mx-auto
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),

            width: '100%',
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.4'),
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderColor: theme('colors.blue.500'),
            borderTopWidth: '8px',
            borderBottomWidth: '8px',
            borderRadius: theme('borderRadius.md'),

            '@screen sm': {
              paddingTop: theme('spacing.4'),
              paddingBottom: theme('spacing.1'),
              borderTopWidth: '0px',
              borderBottomWidth: '0px',
              borderLeftWidth: '8px',
              borderRightWidth: '0px',
              maxWidth: theme('maxWidth.4xl'),
            },

            p: {
              // @apply text-2xl leading-normal font-semibold text-grey-800 text-justify mb-4
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: theme('spacing.4'),
              marginTop: theme('spacing.2'),
              padding: 0,
              fontSize: theme('fontSize.2xl')[0],
              color: theme('colors.pink.800'),
              lineHeight: theme('lineHeight.8'),
              width: '100%',

              '@screen md': {
                marginTop: theme('spacing.0'),
                maxWidth: theme('maxWidth.3xl'),
                lineHeight: theme('lineHeight.9'),
              },
            },
            cite: {
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              '@screen md': {
                width: theme('maxWidth.3xl'),
                marginBottom: theme('spacing.2'),
              },
            },
          },

          // Figures
          figure: {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: theme('spacing.2'),
            marginBottom: theme('spacing.2'),
            '@screen sm': {
              '&.alignright': {
                float: 'right',
                marginLeft: '1rem',
              },
            },
            '@screen lg': {
              textAlign: theme('text.left'),
              maxWidth: theme('maxWidth.5xl'),
              paddingLeft: theme('spacing.0'),
            },
            textAlign: 'center',

            '.wp-block-embed__wrapper iframe': {
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              '@screen md': {
                maxWidth: theme('maxWidth.5xl'),
              },
            },
          },
          figcaption: {
            color: theme('colors.green.600'),
            fontSize: theme('fontSize.sm')[0],
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.3'),
            paddingLeft: theme('spacing.2'),
          },
          'figcaption > p': {
            margin: 0,
          },

          // Lists
          ul: {
            listStyleType: 'disc',
          },
          ol: {
            listStyleType: 'decimal',
          },
          'ul, ol': {
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.1'),

            '@screen md': {
              textAlign: theme('text.left'),
              width: theme('maxWidth.3xl'),
              paddingLeft: theme('spacing.4'),
              paddingRight: theme('spacing.0'),
            },
          },
          li: {
            marginTop: theme('spacing.1'),
            marginBottom: theme('spacing.1'),
            // paddingLeft: theme('spacing[3.5]'),
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
          },
          'ol > li::marker': {
            color: theme('colors.green.600'),
          },
          'ul > li::marker': {
            color: theme('colors.green.400'),
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.1'),
            marginBottom: theme('spacing.1'),
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.0'),
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.1'),
            marginBottom: theme('spacing.1'),
          },

          // Code blocks
          pre: {
            color: theme('colors.purple.700'),
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
            backgroundColor: theme('colors.purple.100'),
            padding: theme('spacing.4'),
            overflowX: 'auto',

            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: theme('spacing.3'),
            paddingRight: theme('spacing.3'),

            '@screen md': {
              textAlign: theme('text.left'),
              maxWidth: theme('maxWidth.4xl'),
              paddingLeft: theme('spacing.16'),
              paddingRight: theme('spacing.4'),
              border: '1px solid',
              borderColor: theme('colors.pink.700'),
              borderRadius: theme('borderRadius.2xl'),
            },
          },
          'pre code': {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'inline',
            color: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            backgroundColor: 'transparent',
            borderRadius: 0,
            padding: 0,
          },

          // Horizontal rules
          hr: {
            marginTop: theme('spacing.20'),
            marginBottom: theme('spacing.20'),
            borderTopWidth: '1px',
            borderColor: theme('colors.purple.400'),
            '@screen lg': {
              marginLeft: `calc(${theme('spacing.12')} * -1)`,
              marginRight: `calc(${theme('spacing.12')} * -1)`,
            },
          },

          // Tables
          table: {
            ...contentWidth(theme),
            tableLayout: 'auto',
            textAlign: 'left',
            fontSize: theme('fontSize.base')[0],
          },
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.purple.500'),
          },
          'thead th': {
            color: theme('colors.purple.500'),
            fontWeight: theme('fontWeight.semibold'),
            verticalAlign: 'bottom',
            fontSize: theme('fontSize.lg')[0],
            paddingBottom: theme('spacing.2'),
          },
          'thead th:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          'thead th:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
          'tbody tr': {
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.pink.300'),
          },
          'tbody tr:last-child': {
            borderBottomWidth: 0,
          },
          'tbody td': {
            verticalAlign: 'baseline',
          },
          tfoot: {
            borderTopWidth: '1px',
            borderTopColor: theme('colors.pink.300'),
          },
          'tfoot td': {
            verticalAlign: 'top',
            fontSize: theme('fontSize.lg')[0],
          },
          ':is(tbody, tfoot) td': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
        },
      },
    }),
    extend: {
      gridTemplateAreas: {
        landing: ['recent-posts about', 'recent-posts about', 'outlinks outlinks'],
        landingMobile: ['recent-posts recent-posts', 'about about', 'outlinks outlinks'],
      },
      gridTemplateColumns: {
        landing: '2fr 4fr',
      },
      opacity: {
        7: '0.07',
        8: '0.08',
        9: '0.09',
        12: '0.12',
        15: '0.15',
        35: '0.35',
        65: '0.65',
        85: '0.85',
        98: '0.98',
      },
      borderWidth: {
        3: '3px',
      },
      outlineWidth: {
        3: '3px',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        5: '5',
        15: '15',
      },
      spacing: {
        0.5: '2px',
        1.5: '0.375rem',
        1.6: '0.4375rem',
        2.1: '0.5625rem',
        2.5: '0.625rem',
        3.2: '0.8125rem',
        4.5: '1.125rem',
        11: '2.75rem',
      },
      animation: {
        'page-transition': 'page-transition 300ms ease-in-out backwards',
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        'waving-hand': 'wave 2s linear infinite',
      },
      backgroundImage: {
        clouds: "url('/images/bg/clouds.gif')",
        windowTitleBarButton: 'linear-gradient(to bottom right, #9c9c9c, #fff)',
        windowTitleBarButtonActive: 'linear-gradient(to bottom right, #444, #aaa)',
        windowTitleBar: 'repeating-linear-gradient(#fff, #000 2px)',
      },
      borderImage: {
        imageBorder: "url('/images/ui/imageBorder.png') 8 fill round",
      },
      fontFamily: {
        sans: sansFontFamily,
        serif: serifFontFamily,
        mono: monoFontFamily,
        pixel: pixelFontFamily,
        extra: extraFontFamily,
      },
      fontWeight: {
        normal: '400',
      },
      lineHeight: {
        relaxed: '1.75',
      },
      saturate: {
        125: '1.25',
      },
      transformOrigin: {
        waving: '70% 70%',
      },
      transitionTimingFunction: { eio: 'ease-in-out', DEFAULT: 'ease-in-out' },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'page-transition': {
          '0%': { transform: 'scale(0.975)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      listStyleType: {
        flower: '"✿ "',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    typography,
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwindcss-debug-screens'),
    forms,
    require('@tailwindcss/container-queries'),
  ],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
} satisfies Config;
