/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creamson: "#fff0de",
        primary: "#b1454a",
        secondary: "#121212",
        "black-200": "#020202",
        "black-300": "#333333",
        "black-400": "#1f1e31",
        "black-500": "#555555",
        "gray-100": "#888888",
      },
      backgroundImage: {
        "about-1": "url('/about-1.png')",
        "about-2": "url('/about-2.png')",
        menu: "url('/menu.png')",
        contact: "url('/contact.png')",
      },
    },
  },
  plugins: [],
};
