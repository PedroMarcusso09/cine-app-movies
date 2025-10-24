/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        surface: "#1e293b",
        accent: "#e50914",
        accentHover: "#b00710",
        textPrimary: "#f8fafc",
        textSecondary: "#94a3b8",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(229, 9, 20, 0.4)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(229, 9, 20, 0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(229, 9, 20, 0.7)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.6s ease-out forwards",
        pulseGlow: "pulseGlow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
