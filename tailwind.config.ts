import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PowerGrotesk', 'sans-serif'],
        'mabry-pro': ['MabryPro', 'sans-serif'],
        'MabryPro-Medium': ['MabryPro-Medium', 'sans-serif'],
        'MabryPro-Regular': ['MabryPro-Regular', 'sans-serif'],
      },
      colors: {
        buttomBlue: '#3A00FA',
        buttomPink: '#E400ED',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
