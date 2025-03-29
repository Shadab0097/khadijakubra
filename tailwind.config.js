export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C5282", // Professional blue
        secondary: "#2B6CB0",
        accent: "#ED8936", // Warm orange for CTAs
        neutral: {
          100: "#F7FAFC",
          200: "#EDF2F7",
          800: "#2D3748",
          900: "#1A202C",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}