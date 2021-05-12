const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				'3xl': '2000px',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				rose: colors.rose,
				fuchsia: colors.fuchsia,
				lightBlue: colors.lightBlue,
				indigo: colors.indigo,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
