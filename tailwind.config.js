/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkPurple: "#1A1A29",
				customBlack: "#181824",
				customTeal: "#003049",
			},
		},
	},
	plugins: [],
};
