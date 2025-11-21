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
        background: '#f9f7f4', // beżowe tło
        primary: '#222222',   // ciemny tekst
        accent: '#c9b17c',    // złoto-piaskowy akcent
        soft: '#eae6df',      // subtelny szary/beż do ramek
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0,0,0,0.05)',
        card: '0 4px 14px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        300: '300ms',
        500: '500ms',
      },
    },
  },
  plugins: [],
};
export default config;
