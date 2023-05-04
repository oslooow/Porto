/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active", "loading"],
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("loading", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.isLoading .${className}::before`;
        });
      });
    },
  ],
};
