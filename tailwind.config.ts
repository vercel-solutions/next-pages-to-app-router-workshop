import type {Config} from "tailwindcss";

import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)"],
      },
      colors: {
        primary: colors.stone,
      },
    },
  },
  plugins: [],
};

export default config;
