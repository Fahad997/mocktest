/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        beat: {
          to: {
            transform: `scale(1.08)`,
          },
      },
    },
    animation: {
      beat: `beat .40s infinite alternate`,
    }
  },
  plugins: [],
}
}
