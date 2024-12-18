/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/App.jsx", "./components/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto, sans-serif"]
      },
    },
  },
  plugins: [],
}

