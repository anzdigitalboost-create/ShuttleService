/** @type {import('tailwindcss').Config} */

// Shuttle Service palette — mint ground, deep teal, soft rounded panels.
// Token names (brand / ink / sun / paper) are shared with the sibling
// storefronts so shared components re-theme without edits.
// brand DEFAULT is 5.3:1 on white and 5.0:1 on the mint ground; do not lighten it.
const brand = {
  DEFAULT: '#0B7A6E',
  50: '#E9F7F4',
  100: '#D6F0EB',
  200: '#BFE1DB',
  300: '#8FD1C7',
  400: '#0B7A6E',
  500: '#096559',
  600: '#074F46',
  700: '#06302B',
  800: '#04211E',
  900: '#021412',
}

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        brand,
        // The mirrored booking page (copied verbatim from bookaride.co.nz and
        // never edited here) styles itself with `gold-*` classes. Pointing
        // `gold` at the brand palette re-themes it without touching the files.
        gold: brand,
        ink: { DEFAULT: '#06302B', 800: '#0A3F38', 700: '#28524D' },
        sun: { DEFAULT: '#C2410C', 600: '#9A3412' },
        paper: { DEFAULT: '#F2FAF8', 200: '#D6F0EB', 300: '#BFE1DB' },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
