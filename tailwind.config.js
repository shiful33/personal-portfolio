/** @type {import('tailwindcss').Config} */
export default {
  // এই লাইনটিই ডার্ক মোডকে সচল করে
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // আপনি চাইলে এখানে আপনার পছন্দের কালার সেভ করে রাখতে পারেন
        primaryDark: '#0b0d11',
      },
    },
  },
  plugins: [],
}