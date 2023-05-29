/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily:{
      inter: "var(--font-inter)"
    },
    letterSpacing: {
      normal: "-.025em",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
      textColor: {
        default: "#374151",
        emphasis: "#111827",
        subtle: "#6b7280",
        muted: "#9ca3af",
        inverted: "#fff",
        info: "#253985",
        success: "#285231",
        attention: "#73321b",
        error: "#752522",
      },
      borderColor: {
        emphasis: "#9ca3af",
        border: "#d1d5db",
        subtle: "#e5e7eb",
        booker: "#e5e7eb",
        muted: "#f3f4f6",
      },
      backgroundColor: {
        emphasis: "#e5e7eb",
        default: "#fff",
        subtle: "#f3f4f6",
        muted: "#f9fafb",
        inverted: "#111827",
        info: "#dee9fc",
        success: "#e2fbe8",
        attention: "#fceed8",
        error: "#f9e3e2",

      },
      colors: {
        "brand": {
          default: "#111827",
          emphasis: "#101010",
          text: "#fff",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
}