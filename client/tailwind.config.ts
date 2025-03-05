import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundDarker: "var(--background-darker)",
      },
      fontSize: {
        regular: "2.0625rem",
        mainHeading: "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config
