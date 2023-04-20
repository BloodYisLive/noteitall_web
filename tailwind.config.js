/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5ea",
        secondary: "#0bd1d1",
        textPrimary: "#94A9CA",
        textSecondary: "#B9E0F2",
        cardBackground: "#131C31",
        borderColor: "#222F43",
        navy: "#0F172A",
      },
    },
  },
  plugins: [],
};
