/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f2ff",
          100: "#cce5ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#0080ff",
          600: "#0066cc",
          700: "#004d99",
          800: "#003366",
          900: "#001a33",
        },
        blue: {
          50: "#e6f2ff",
          100: "#cce5ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#0080ff",
          600: "#0066cc",
          700: "#004d99",
          800: "#003366",
          900: "#001a33",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        "custom-header": "7.2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        custom: "0 4px 20px rgba(0, 51, 102, 0.15)",
        "custom-lg": "0 8px 30px rgba(0, 51, 102, 0.2)",
      },
    },
  },
  plugins: [],
};
