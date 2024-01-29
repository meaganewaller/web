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
        DEFAULT: '#E342A0',
        '50': '#FCF2FA',
        '100': '#FCEBF8',
        '200': '#F7CBEB',
        '300': '#F5B0E0',
        '400': '#EB75C2',
        '500': '#E342A0',
        '600': '#CC3588',
        '700': '#AB266A',
        '800': '#87174B',
        '900': '#660D32',
        '950': '#42051D',
      },
      coral: {
        DEFAULT: '#EF6F6C',
        '50': '#FFFBF7',
        '100': '#FCF6F0',
        '200': '#FCE7D9',
        '300': '#FAD4C3',
        '400': '#F5A798',
        '500': '#EF6F6C',
        '600': '#D95B59',
        '700': '#B33F3D',
        '800': '#8F2827',
        '900': '#6B1715',
        '950': '#450A09',
      },
      white: {
        DEFAULT: '#FEFFFC',
        '50': '#FFFFFF',
        '100': '#FEFFFC',
        '200': '#FEFFFC',
        '300': '#FCFFFA',
        '400': '#F9FFF5',
        '500': '#F3FFEF',
      },
      blue: {
        DEFAULT: '#19619C',
        '50': '#F0F8FA',
        '100': '#E1F0F5',
        '200': '#B5D8E6',
        '300': '#8DBFD6',
        '400': '#4C90BA',
        '500': '#19619C',
        '600': '#14528C',
        '700': '#0E4075',
        '800': '#092E5E',
        '900': '#051E45',
        '950': '#02122E',
      },
      yellow: {
        DEFAULT: '#FFD447',
        '50': '#FFFEF5',
        '100': '#FFFDED',
        '200': '#FFF8D1',
        '300': '#FFF3B5',
        '400': '#FFE680',
        '500': '#FFD447',
        '600': '#E6B839',
        '700': '#BF8D28',
        '800': '#99681A',
        '900': '#73460F',
        '950': '#4A2806',
      },
      green: {
        DEFAULT: '#8FB339',
        '50': '#FBFCF5',
        '100': '#F4F7E6',
        '200': '#E6EDC5',
        '300': '#D3E0A4',
        '400': '#B1C969',
        '500': '#8FB339',
        '600': '#7BA12F',
        '700': '#5E8520',
        '800': '#466B14',
        '900': '#2D4F0B',
        '950': '#193305',
      },
      gray: {
        DEFAULT: '#2E3532',
        '50': '#F2F5F4',
        '100': '#E8EBEA',
        '200': '#C6CCCA',
        '300': '#A5ADAB',
        '400': '#68736F',
        '500': '#2E3532',
        '600': '#26302B',
        '700': '#1B2922',
        '800': '#112118',
        '900': '#09170F',
        '950': '#040F08',
      },
      lime: {
        DEFAULT: '#CBFF4D',
        '50': '#FEFFF7',
        '100': '#FCFFED',
        '200': '#F7FFD4',
        '300': '#F0FFB8',
        '400': '#E0FF82',
        '500': '#CBFF4D',
        '600': '#AEE63E',
        '700': '#86BF2A',
        '800': '#63991C',
        '900': '#41730F',
        '950': '#254A07',
      },
      turquoise: {
        DEFAULT: '#03F7EB',
        '50': '#F2FFFF',
        '100': '#E6FFFE',
        '200': '#BDFCFA',
        '300': '#97FCF9',
        '400': '#4DFAF1',
        '500': '#03F7EB',
        '600': '#02DEC8',
        '700': '#02BA9B',
        '800': '#019472',
        '900': '#00704D',
        '950': '#00472C',
      },
      mauve: {
        DEFAULT: '#C9AEFF',
        '50': '#FDFAFF',
        '100': '#FCF7FF',
        '200': '#F7EBFF',
        '300': '#F0DEFF',
        '400': '#DFC7FF',
        '500': '#C9AEFF',
        '600': '#A88CE6',
        '700': '#7E62BF',
        '800': '#573F99',
        '900': '#372473',
        '950': '#1C0F4A',
      },
      purple: {
        DEFAULT: '#6E2594',
        '50': '#F8F0FA',
        '100': '#F1E4F5',
        '200': '#DCBAE6',
        '300': '#C494D4',
        '400': '#9957B5',
        '500': '#6E2594',
        '600': '#5D1E85',
        '700': '#47156E',
        '800': '#350D59',
        '900': '#230742',
        '950': '#14032B',
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
      },
      backgroundImage: {
        clouds: "url('/images/bg/clouds.gif')",
        windowTitleBarButton: 'linear-gradient(to bottom right, #9c9c9c, #fff)',
        windowTitleBarButtonActive: 'linear-gradient(to bottom right, #444, #aaa)',
        windowTitleBar: 'repeating-linear-gradient(#fff, #000 2px)',
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
