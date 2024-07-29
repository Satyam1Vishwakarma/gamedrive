import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [nextui({
  themes: {
    "light":{
      "colors": {
        "background": {
          "DEFAULT": "#FAFAFA",
          "foreground": "#262626"
        },
        "content1": "#ebebeb",
        "content2": "#dedede",
        "content3": "#d1d1d1",
        "content4": "#bfbfbf",
        "danger": {
          "50": "#fff5f8",
          "100": "#feecf0",
          "200": "#fdd3de",
          "300": "#fcbbcc",
          "400": "#fba7be",
          "500": "#f97799",
          "600": "#f7507c",
          "700": "#e50b45",
          "800": "#9c072f",
          "900": "#490316",
          "DEFAULT": "#EB154E"
        },
        "default": {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e8e8e8",
          "300": "#dbdbdb",
          "400": "#d1d1d1",
          "500": "#b8b8b8",
          "600": "#a3a3a3",
          "700": "#787878",
          "800": "#525252",
          "900": "#262626",
          "DEFAULT": "#e8e8e8",
          "foreground": "#262626"
        },
        "divider": "#a3a3a3",
        "focus": "#9800F0",
        "foreground": {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e8e8e8",
          "300": "#dbdbdb",
          "400": "#d1d1d1",
          "500": "#b8b8b8",
          "600": "#a3a3a3",
          "700": "#787878",
          "800": "#525252",
          "900": "#262626",
          "DEFAULT": "#121212",
          "foreground": "#fafafa"
        },
        "overlay": "#FAFAFA",
        "primary": {
          "50": "#fbf5ff",
          "100": "#f8ebff",
          "200": "#eed1ff",
          "300": "#e5b8ff",
          "400": "#dda3ff",
          "500": "#cb70ff",
          "600": "#bc47ff",
          "700": "#9800f0",
          "800": "#6700a3",
          "900": "#30004d",
          "DEFAULT": "#9800F0"
        },
        "secondary": {
          "50": "#f6fbfe",
          "100": "#eef7fc",
          "200": "#d8ecf8",
          "300": "#c2e2f5",
          "400": "#b1daf2",
          "500": "#85c5ea",
          "600": "#62b5e4",
          "700": "#238fcd",
          "800": "#18618c",
          "900": "#0b2d41",
          "DEFAULT": "#49BBFC"
        },
        "success": {
          "50": "#f5fffb",
          "100": "#ebfff8",
          "200": "#d1ffee",
          "300": "#b8ffe5",
          "400": "#a3ffdd",
          "500": "#70ffcb",
          "600": "#47ffbc",
          "700": "#00f098",
          "800": "#00a367",
          "900": "#004d30",
          "DEFAULT": "#00D184"
        },
        "warning": {
          "50": "#fdf7f9",
          "100": "#faeff2",
          "200": "#f4dce2",
          "300": "#eec9d3",
          "400": "#e9b9c6",
          "500": "#dd92a6",
          "600": "#d3738d",
          "700": "#b63a5b",
          "800": "#7c273e",
          "900": "#3a121d",
          "DEFAULT": "#FA789B"
        }
      },
      "extend": "light"
    },
    "dark": {
      extend: "dark", // <- inherit default values from dark theme
      colors: {
        background: "#0D001A",
        foreground: "#ffffff",
        primary: {
          50: "#3B096C",
          100: "#520F83",
          200: "#7318A2",
          300: "#9823C2",
          400: "#c031e2",
          500: "#DD62ED",
          600: "#F182F6",
          700: "#FCADF9",
          800: "#FDD5F9",
          900: "#FEECFE",
          DEFAULT: "#DD62ED",
          foreground: "#ffffff",
        },
        focus: "#F182F6",
      },
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
    },
  },
}),],
}
