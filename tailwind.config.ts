import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        /* ── Brand Primitives ───────────────────── */
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50:  "#F0FBF8",
          100: "#D2F0E6",
          200: "#A5E0CD",
          300: "#70C9B0",
          400: "#3EAF8F",
          500: "#1E8F72",
          600: "#0E7058",
          700: "#065A45",
          800: "#034536",
          900: "#013229",
          950: "#001A16",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50:  "#FFFBEB",
          100: "#FFF4C2",
          200: "#FFE87E",
          300: "#FFD653",
          400: "#FFC220",
          500: "#E8A200",
          600: "#CC8500",
          700: "#A36900",
          800: "#7A4E00",
          900: "#523500",
          950: "#301F00",
        },
        intense: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50:  "#F0FBF7",
          100: "#D3F2E6",
          200: "#A8E4CE",
          300: "#75D4B5",
          400: "#61CAA0",
          500: "#3BB688",
          600: "#28956E",
          700: "#1B7455",
          800: "#12543E",
          900: "#0B3D2C",
          950: "#06271C",
        },
        neutral: {
          50:  "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#333333",
          900: "#1A1A1A",
          950: "#0D0D0D",
        },
        /* ── ShadCN Semantic ─────────────────────── */
        background:    "hsl(var(--background))",
        foreground:    "hsl(var(--foreground))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
      },
      borderRadius: {
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in":        "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [animate],
};

export default config;
