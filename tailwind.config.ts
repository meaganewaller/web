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
    extend: {
      gridTemplateAreas: {
        landing: ['recent-posts about', 'recent-posts about', 'outlinks outlinks'],
        landingMobile: ['recent-posts recent-posts', 'about about', 'outlinks outlinks'],
      },
      gridTemplateColumns: {
        landing: '2fr 4fr',
      },
      fontSize: {
        md: '1rem',
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
      },
      listStyleType: {
        flower: '"✿ "',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.serif').join(', '),
              textTransform: 'capitalize',
            },
          },
        },
      }),
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
