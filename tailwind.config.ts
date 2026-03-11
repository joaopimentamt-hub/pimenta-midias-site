import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pimenta: {
          red: "#E63946",
          "red-dark": "#C1121F",
          "red-light": "#FF6B6B",
          dark: "#0A0A0A",
          "dark-2": "#111111",
          "dark-3": "#1A1A1A",
          "dark-4": "#222222",
          gray: "#888888",
          "gray-light": "#AAAAAA",
          white: "#F5F5F5",
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
