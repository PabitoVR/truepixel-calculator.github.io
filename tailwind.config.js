module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              primary: { 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e' },
              ai: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6' }
          },
          fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] }
      }
  }
}
