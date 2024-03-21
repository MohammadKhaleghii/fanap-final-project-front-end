import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#56B280",
        gray: "#D6D6D6",
      },
      container: {
        padding: {
          default: "8px",
          lg: "16px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
