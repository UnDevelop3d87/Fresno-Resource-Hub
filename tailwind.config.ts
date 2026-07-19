import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fresno: {
          primary: '#0066cc',
          secondary: '#f59e0b',
          dark: '#1f2937',
          light: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;