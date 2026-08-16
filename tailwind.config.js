/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16A34A',
        'primary-dark': '#15803D',
        'primary-light': '#22C55E',
        background: '#FFFFFF',
        'soft-background': '#F8FAFC',
        'main-text': '#111827',
        'secondary-text': '#6B7280',
        'muted-text': '#9CA3AF',
        border: '#E5E7EB',
        'soft-border': '#F1F5F9',
      },
    },
  },
  plugins: [],
}