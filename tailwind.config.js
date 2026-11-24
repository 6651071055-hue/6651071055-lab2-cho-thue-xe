/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // C = 1 -> Emerald #059669 ; bản đậm #047857 dùng cho chữ/nút để đạt tương phản AA
      colors: { brand: { DEFAULT: '#059669', dark: '#047857', light: '#ECFDF5' } },
    },
  },
  plugins: [],
};
