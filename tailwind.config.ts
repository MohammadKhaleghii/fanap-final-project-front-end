import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#56B280",
        secondary: "black",
        tertiary: "white",
      },
      container: {
        padding: {
          sm: "8px",
          lg: "16px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
