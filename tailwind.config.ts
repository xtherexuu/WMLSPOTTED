import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm": "425px",
      "md": "600px",
      "lg": "750px",
      "xl": "1100px",
      "2xl": "1800px",
      "3xl": "2100px",
    },
    extend: {
      boxShadow: {
        'pinkbt': '0 5px 30px 0px #f9a8d4',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
