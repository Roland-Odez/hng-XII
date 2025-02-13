import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary: {
				"1": "#041E23",
				"2": "#052228",
				"3": "#052930",
				"4": "#08252B"
			},
			secondary: {
				"1": "#07373F",
				"2": "#0E464F",
				"3": "#197686",
				"4": "#24A0B5",
				"5": "#2BA4B9"
			},
			white: {
				"1": "#AAAAAA",
				"2": "#D9D9D9",
				"3": "#fff"
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			Road_Rage: 'Road Rage'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
