import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sora)', 'sans-serif'],
			},
			colors: {
				primary: '',
				accent: '',
			},
		},
	},
	plugins: [],
};

export default config;
