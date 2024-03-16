/** @type { import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import svgDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import type { PluginAPI } from "tailwindcss/types/config";
import animate from "tailwindcss-animate";

const sansFontFamily = ["var(--font-sans)", ...fontFamily.sans];
const extraFontFamily = ["var(--font-extra)", ...fontFamily.sans];
const serifFontFamily = ["var(--font-serif)", ...fontFamily.serif];
const monoFontFamily = ["var(--font-mono)", ...fontFamily.mono];
const monoItalicFontFamily = ["var(--font-mono-italic)", ...fontFamily.mono];
const pixelFontFamily = ["var(--font-pixel)", ...fontFamily.mono];

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const contentWidth = (theme: any, width = "3") => {
  return {
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: theme("spacing.3"),
    paddingRight: theme("spacing.3"),

    "@screen md": {
      textAlign: theme("text.left"),
      maxWidth: theme(`maxWidth.${width}xl`),
      paddingLeft: theme("spacing.0"),
    },
  };
};

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  mode: "jit",
  important: true,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      typography: (theme: (value: string) => void) => {
        return {
          DEFAULT: {
            css: {
              color: theme("colors.pink.900"),
              a: {
                textDecoration: "none",
                color: theme("colors.purple.600"),
                "&:hover": {
                  textDecoration: "underline",
                  color: theme("colors.purple.600"),
                },
              },
            },
          },
        };
      },
      colors: {
        primary: {
          100: "#FDE6EA",
          200: "#FBCEDB",
          300: "#F4B3CC",
          400: "#EA9BC2",
          500: "#DD7AB4",
          600: "#BE599E",
          700: "#9F3D8A",
          800: "#802675",
          900: "#6A1768",
        },
        success: {
          100: "#CFFCD7",
          200: "#A0FAB9",
          300: "#6FF2A1",
          400: "#4AE695",
          500: "#15D685",
          600: "#0FB882",
          700: "#0A9A7A",
          800: "#067C6D",
          900: "#046664",
        },
        info: {
          100: "#CDFEFC",
          200: "#9BFAFE",
          300: "#69EDFD",
          400: "#44DAFB",
          500: "#07BDF9",
          600: "#0593D6",
          700: "#036EB3",
          800: "#024E90",
          900: "#013877",
        },
        warning: {
          100: "#FEFDD0",
          200: "#FDFAA2",
          300: "#FBF673",
          400: "#F8F050",
          500: "#F4E918",
          600: "#D1C711",
          700: "#AFA50C",
          800: "#8D8407",
          900: "#756D04",
        },
        danger: {
          100: "#FFECDB",
          200: "#FFD4B8",
          300: "#FFB795",
          400: "#FF9A7A",
          500: "#FF6C4F",
          600: "#DB4739",
          700: "#B72927",
          800: "#931921",
          900: "#7A0F1E"
        },
        pink: {
          50: "#FEF0F7",
          100: "#FEE2EF",
          200: "#FCC5DF",
          300: "#FBACD1",
          400: "#F98FC1",
          500: "#F872B1",
          600: "#F52E8B",
          700: "#D10A67",
          800: "#880743",
          900: "#440322",
          950: "#220211",
        },
        green: {
          50: "#F7FEF0",
          100: "#EFFEE2",
          200: "#DFFCC5",
          300: "#D1FBAC",
          400: "#C1F98F",
          500: "#B1F872",
          600: "#8BF52E",
          700: "#67D10A",
          800: "#438807",
          900: "#224403",
          950: "#112202",
        },
        blue: {
          50: "#F0F7FE",
          100: "#E2EFFE",
          200: "#C5DFFC",
          300: "#ACD1FB",
          400: "#8FC1F9",
          500: "#72B1F8",
          600: "#2E8BF5",
          700: "#0A67D1",
          800: "#074388",
          900: "#032244",
          950: "#021122",
        },
        orange: {
          50: "#FEF6F0",
          100: "#FEECE2",
          200: "#FCDAC5",
          300: "#FBCAAC",
          400: "#F9B88F",
          500: "#F8A672",
          600: "#F57A2E",
          700: "#D1560A",
          800: "#883807",
          900: "#441C03",
          950: "#220E02",
        },
        yellow: {
          50: "#FEFEF0",
          100: "#FDFEE2",
          200: "#FAFCC5",
          300: "#F8FBAC",
          400: "#F6F98F",
          500: "#F4F872",
          600: "#EEF52E",
          700: "#CAD10A",
          800: "#848807",
          900: "#424403",
          950: "#212202",
        },
        turquoise: {
          50: "#F0FEFE",
          100: "#E2FEFD",
          200: "#C5FCFA",
          300: "#ACFBF8",
          400: "#8FF9F6",
          500: "#72F8F3",
          600: "#2EF5EE",
          700: "#0AD1CA",
          800: "#078884",
          900: "#034442",
          950: "#022221",
        },
        purple: {
          50: "#FAF0FE",
          100: "#F5E2FE",
          200: "#EBC5FC",
          300: "#E2ACFB",
          400: "#D88FF9",
          500: "#CD72F8",
          600: "#B62EF5",
          700: "#920AD1",
          800: "#5F0788",
          900: "#300344",
          950: "#180222",
        },
      },
      gridTemplateAreas: {
        landing: [
          "recent-posts about",
          "recent-posts about",
          "outlinks outlinks",
        ],
        landingMobile: [
          "recent-posts recent-posts",
          "about about",
          "outlinks outlinks",
        ],
      },
      gridTemplateColumns: {
        landing: "2fr 4fr",
      },
      opacity: {
        "marquee-left": "marquee-left var(--duration, 50s) linear infinite",
        "marquee-up": "marquee-up var(--duration, 50s) linear infinite",
        7: "0.07",
        8: "0.08",
        9: "0.09",
        12: "0.12",
        15: "0.15",
        35: "0.35",
        65: "0.65",
        85: "0.85",
        98: "0.98",
      },
      borderWidth: {
        3: "3px",
      },
      outlineWidth: {
        3: "3px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        5: "5",
        15: "15",
      },
      spacing: {
        0.5: "2px",
        1.5: "0.375rem",
        1.6: "0.4375rem",
        2.1: "0.5625rem",
        2.5: "0.625rem",
        3.2: "0.8125rem",
        4.5: "1.125rem",
        11: "2.75rem",
      },
      animation: {
        equalize: "equalize 0.8s infinite",
        "marquee-left": "marquee-left var(--duration, 50s) linear infinite",
        "marquee-up": "marquee-up var(--duration, 50s) linear infinite",
        "page-transition": "page-transition 300ms ease-in-out backwards",
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        "waving-hand": "wave 2s linear infinite",
        glitch: 'glitch 1s linear infinite',
        'glitch-top': 'glitch-top 1s linear infinite',
        'glitch-bottom': 'glitch-bottom 1.5s linear infinite',
      },
      backgroundImage: {
        "rainbow-gradient":
          "linear-gradient(to right, #d25778, #ec585c, #e7d155, #56a8c6)",
        "rainbow-gradient-inverse":
          "linear-gradient(to right, #56a8c6, #e7d155, #ec585c, #d25778)",
        clouds: "url('/images/bg/clouds.gif')",
        windowTitleBarButton: "linear-gradient(to bottom right, #9c9c9c, #fff)",
        windowTitleBarButtonActive:
          "linear-gradient(to bottom right, #444, #aaa)",
        windowTitleBar: "repeating-linear-gradient(#fff, #000 2px)",
      },
      borderImage: {
        imageBorder: "url('/images/ui/imageBorder.png') 8 fill round",
      },
      fontFamily: {
        sans: sansFontFamily,
        serif: serifFontFamily,
        mono: monoFontFamily,
        monoItalic: monoItalicFontFamily,
        pixel: pixelFontFamily,
        extra: extraFontFamily,
      },
      fontWeight: {
        normal: "400",
      },
      lineHeight: {
        relaxed: "1.75",
      },
      saturate: {
        125: "1.25",
      },
      transformOrigin: {
        waving: "70% 70%",
      },
      transitionTimingFunction: { eio: "ease-in-out", DEFAULT: "ease-in-out" },
      keyframes: {
        equalize: {
          "0%, 100%": {
            height: "0px",
          },
          "50%": {
            height: "0.75rem",
          },
        },
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-up": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "page-transition": {
          "0%": { transform: "scale(0.975)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        glitch: {
          '2%, 64%': {
            transform: 'translate(2px, 0) skew(0deg)',
          },
          '4%, 60%': {
            transform: 'translate(-2px, 0) skew(0deg)',
          },
          '62%': {
            transform: 'translate(0, 0) skew(5deg)',
          },
        },
        'glitch-top': {
          '2%, 64%': {
            transform: 'translate(2px, -2px)',
          },
          '4%, 60%': {
            transform: 'translate(-2px, 2px)',
          },
          '62%': {
            transform: 'translate(13px, -1px) skew(-13deg)',
          },
        },
        'glitch-bottom': {
          '2%, 64%': {
            transform: 'translate(-2px, 0)',
          },
          '4%, 60%': {
            transform: 'translate(-2px, 0)',
          },
          '62%': {
            transform: 'translate(-22px, 5px) skew(21deg)',
          },
        }
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
    function({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          "grid-pattern": (value) => ({
            backgroundImage: `url("${svgDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="${value}" stroke-dasharray="6 3" transform="scale(1)"><path d="M36 .5H1.5V36"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
    typography,
    animate,
    require("@savvywombat/tailwindcss-grid-areas"),
    require("tailwindcss-debug-screens"),
    forms,
    require("@tailwindcss/container-queries"),
  ],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
} satisfies Config;
