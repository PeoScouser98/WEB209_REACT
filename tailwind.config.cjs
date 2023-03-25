/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			xs: {
				min: '300px',
				max: '374px',
			},
			sm: {
				min: '375px',
				max: '767px',
			},

			md: {
				min: '768px',
				max: '1023px',
			},
			lg: {
				min: '1024px',
				max: '1365px',
			},
			xl: { min: '1366px' },
			xxl: { min: '1920px' },
		},
	},
	plugins: [require('daisyui'), require('prettier-plugin-tailwindcss')],
};
