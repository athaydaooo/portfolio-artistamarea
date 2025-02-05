import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    `aspect-[1/1]`,
    `aspect-[4/3]`,
    `aspect-[3/4]`,
    `aspect-[16/9]`,
    `aspect-[9/16]`,
    `w-[7vw]`,
    `w-[6vw]`,
    `w-[5vw]`,
    `w-[4vw]`,
    `w-[5em]`,
    `w-[8vh]`,
    `max-w-[120px]`,
    `max-w-[80px]`,
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSerif: ["Noto Serif", "serif"], // Noto Serif (Fonte padrão)
        notoSerifGujarati: ["Noto Serif Gujarati", "serif"], // Noto Serif Gujarati
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: { max: "325px" }, // Dispositivos menores que 325px
        "2k": { min: "2560px" },
        "4k": { min: "3840px" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
