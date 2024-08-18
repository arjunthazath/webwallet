/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'custom-blue': '#1E3A8A',
        'custom-gray': '#353535',
        'custom-yellow': '#F59E0B',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}