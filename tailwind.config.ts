import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)", // Nome da variável corrigido
    },
    extend: {


	  keyframes: {
		"accordion-down": {
			from: { height: "0"},
			to: { height: "var(--radix-accordion-content-height)"},
		},
		"accordion-up": {
			to: { height: "var(--radix-accordion-content-height)"},
			from: { height: "0"},
		},
	  },
	  animation: {
		"accordion-down": "accordion-down 0.2s ease-out",
		"accordion-up": "accordion-up 0.2s ease-out",
	  },
      colors: {
		primary: '#1c1c22',
		accent: {
			DEFAULT: '#00ffff',
			hover: '#8000ff',
		},
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;