/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ZTH design system — verified from Figma
        ink: '#111111',
        blue: {
          DEFAULT: '#2449B8',
          hover: '#1D3C9C',
        },
        navy: '#102B66',
        'blue-50': '#EEF3FF',
        'blue-50b': '#F0F4FF', // Investor Mock Room background variant
        body: '#596579',
        'body-dark': '#3A4354',
        'body-muted': '#4C5A78',
        border: '#E3E8F0',
        surface: '#FCFDFF',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        rest: '0 1px 2px rgba(16,43,102,.04)',
        hover: '0 8px 24px rgba(16,43,102,.08)',
      },
    },
  },
  plugins: [],
}
