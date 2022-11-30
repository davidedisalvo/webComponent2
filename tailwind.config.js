module.exports = {
	content: [
		'./src/**/*.vue'
	],
	theme: {
		fontSize: {
			'h1': 'clamp(2.13rem, calc(1.52rem + 3.04vw), 4.25rem)',
			'h2': 'clamp(1.75rem, calc(1.25rem + 2.50vw), 3.50rem)',
			'h3': 'clamp(1.50rem, calc(1.29rem + 1.07vw), 2.25rem)',
			'h4': 'clamp(1.25rem, calc(1.11rem + 0.71vw), 1.75rem)',
			'subtitle': 'clamp(1.13rem, calc(1.00rem + 0.64vw), 1.58rem)',
			'body-1': 'clamp(1.00rem, calc(0.94rem + 0.29vw), 1.20rem)',
			'body-2': 'clamp(0.88rem, calc(0.83rem + 0.25vw), 1.05rem)',
			'caption': 'clamp(0.75rem, calc(0.71rem + 0.21vw), 0.90rem)',
		},
		extend: {},
	},
	plugins: [],
}
