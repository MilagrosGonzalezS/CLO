/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#6396AD",
        dark: "#202020",
        bg: "#303030",
        light: "#F5F5F5",
        opacity: "rgba(48, 48, 48, 0.58)",
      },
      fontFamily: {
        primary: ["Inter-Regular", "sans"],
        primaryBold: ["Inter-Bold", "sans"],
        accent: ["Prompt", "sans"],
        accentMedium: ["Prompt-Medium", "sans"],
        accentBold: ["Prompt-Bold", "sans"],
        accentBoldItalic: ["Prompt-Bold-Italic", "sans"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        huge: "1700px",
      },
    },
  },
  plugins: ["flowbrite/plugin"],
};
