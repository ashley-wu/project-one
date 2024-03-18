import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-noto-sans-tc)', 'ui-sans-serif', 'system-ui'],
      'mono': ['var(--font-noto-sans-mono)', 'ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      primary: 'rgb(var(--color-primary))',
      primary_light: 'rgb(var(--color-primary) / 10%)',
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.blue,
      gray: colors.gray,
      white: '#ffffff',
      offwhite: '#fafafa',
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
