/** @type {import('tailwindcss').Config} */

// Shuttle Service palette — forest green on warm paper, with a terracotta
// accent. Token names (brand / ink / sun) are shared with the sibling
// storefronts so shared components re-theme without edits.
// brand DEFAULT is 5.0:1 on white and readable on dark; do not lighten it.
const brand = {
  DEFAULT: '#15803D',
  50: '#F0FDF4',
  100: '#DCFCE7',
  200: '#BBF7D0',
  300: '#86EFAC',
  400: '#15803D',
  500: '#166534',
  600: '#14532D',
  700: '#0F3F22',
  800: '#0B2E19',
  900: '#071D10',
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
        ink: { DEFAULT: '#1C1917', 800: '#292524', 700: '#44403C' },
        sun: { DEFAULT: '#C2410C', 600: '#9A3412' },
        paper: { DEFAULT: '#FAF7F2', 200: '#F1EBE1', 300: '#E3DACB' },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
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
