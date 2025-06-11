import * as Colors from "@tamagui/colors";
import { createThemes, defaultComponentThemes } from "@tamagui/theme-builder";
import { createFont } from "tamagui";

const darkPalette = [
	"hsla(213, 17%, 28%, 1)",
	"hsla(213, 17%, 31%, 1)",
	"hsla(213, 17%, 33%, 1)",
	"hsla(213, 17%, 35%, 1)",
	"hsla(213, 17%, 38%, 1)",
	"hsla(213, 17%, 40%, 1)",
	"hsla(213, 17%, 43%, 1)",
	"hsla(213, 17%, 45%, 1)",
	"hsla(213, 17%, 48%, 1)",
	"hsla(213, 17%, 50%, 1)",
	"hsla(0, 15%, 93%, 1)",
	"hsla(0, 15%, 99%, 1)",
];
const lightPalette = [
	"hsla(213, 17%, 28%, 1)",
	"hsla(213, 17%, 31%, 1)",
	"hsla(213, 17%, 33%, 1)",
	"hsla(213, 17%, 35%, 1)",
	"hsla(213, 17%, 38%, 1)",
	"hsla(213, 17%, 40%, 1)",
	"hsla(213, 17%, 43%, 1)",
	"hsla(213, 17%, 45%, 1)",
	"hsla(213, 17%, 48%, 1)",
	"hsla(213, 17%, 50%, 1)",
	"hsla(0, 15%, 93%, 1)",
	"hsla(0, 15%, 99%, 1)",
];

const lightShadows = {
	shadow1: "rgba(0,0,0,0.04)",
	shadow2: "rgba(0,0,0,0.08)",
	shadow3: "rgba(0,0,0,0.16)",
	shadow4: "rgba(0,0,0,0.24)",
	shadow5: "rgba(0,0,0,0.32)",
	shadow6: "rgba(0,0,0,0.4)",
};

const darkShadows = {
	shadow1: "rgba(0,0,0,0.2)",
	shadow2: "rgba(0,0,0,0.3)",
	shadow3: "rgba(0,0,0,0.4)",
	shadow4: "rgba(0,0,0,0.5)",
	shadow5: "rgba(0,0,0,0.6)",
	shadow6: "rgba(0,0,0,0.7)",
};

const builtThemes = createThemes({
	componentThemes: defaultComponentThemes,

	base: {
		palette: {
			dark: darkPalette,
			light: lightPalette,
		},

		extra: {
			light: {
				...Colors.green,
				...Colors.red,
				...Colors.yellow,
				...lightShadows,
				shadowColor: lightShadows.shadow1,
			},
			dark: {
				...Colors.greenDark,
				...Colors.redDark,
				...Colors.yellowDark,
				...darkShadows,
				shadowColor: darkShadows.shadow1,
			},
		},
	},

	accent: {
		palette: {
			dark: [
				"hsla(206, 100%, 35%, 1)",
				"hsla(206, 100%, 38%, 1)",
				"hsla(206, 100%, 41%, 1)",
				"hsla(206, 100%, 43%, 1)",
				"hsla(206, 100%, 46%, 1)",
				"hsla(206, 100%, 49%, 1)",
				"hsla(206, 100%, 52%, 1)",
				"hsla(206, 100%, 54%, 1)",
				"hsla(206, 100%, 57%, 1)",
				"hsla(206, 100%, 60%, 1)",
				"hsla(250, 50%, 90%, 1)",
				"hsla(250, 50%, 95%, 1)",
			],
			light: [
				"hsla(206, 100%, 50%, 1)",
				"hsla(206, 100%, 52%, 1)",
				"hsla(206, 100%, 53%, 1)",
				"hsla(206, 100%, 55%, 1)",
				"hsla(206, 100%, 57%, 1)",
				"hsla(206, 100%, 58%, 1)",
				"hsla(206, 100%, 60%, 1)",
				"hsla(206, 100%, 62%, 1)",
				"hsla(206, 100%, 63%, 1)",
				"hsla(206, 100%, 65%, 1)",
				"hsla(250, 50%, 95%, 1)",
				"hsla(250, 50%, 95%, 1)",
			],
		},
	},

	childrenThemes: {
		teste: {
			palette: {
				dark: [
					"hsla(36, 100%, 40%, 1)",
					"hsla(36, 100%, 43%, 1)",
					"hsla(36, 100%, 46%, 1)",
					"hsla(36, 100%, 49%, 1)",
					"hsla(36, 100%, 52%, 1)",
					"hsla(36, 100%, 55%, 1)",
					"hsla(36, 100%, 58%, 1)",
					"hsla(36, 100%, 61%, 1)",
					"hsla(36, 100%, 64%, 1)",
					"hsla(36, 100%, 67%, 1)",
					"hsla(36, 100%, 90%, 1)",
					"hsla(36, 100%, 95%, 1)",
				],
				light: [
					"hsla(36, 100%, 55%, 1)",
					"hsla(36, 100%, 58%, 1)",
					"hsla(36, 100%, 60%, 1)",
					"hsla(36, 100%, 62%, 1)",
					"hsla(36, 100%, 65%, 1)",
					"hsla(36, 100%, 68%, 1)",
					"hsla(36, 100%, 70%, 1)",
					"hsla(36, 100%, 73%, 1)",
					"hsla(36, 100%, 75%, 1)",
					"hsla(36, 100%, 78%, 1)",
					"hsla(36, 100%, 90%, 1)",
					"hsla(36, 100%, 95%, 1)",
				],
			},
		},

		red: {
			palette: {
				dark: [
					"hsla(0, 100%, 40%, 1)",
					"hsla(0, 100%, 43%, 1)",
					"hsla(0, 100%, 46%, 1)",
					"hsla(0, 100%, 49%, 1)",
					"hsla(0, 100%, 52%, 1)",
					"hsla(0, 100%, 55%, 1)",
					"hsla(0, 100%, 58%, 1)",
					"hsla(0, 100%, 61%, 1)",
					"hsla(0, 100%, 64%, 1)",
					"hsla(0, 100%, 67%, 1)",
					"hsla(0, 100%, 90%, 1)",
					"hsla(0, 100%, 95%, 1)",
				],
				light: [
					"hsla(0, 100%, 55%, 1)",
					"hsla(0, 100%, 58%, 1)",
					"hsla(0, 100%, 60%, 1)",
					"hsla(0, 100%, 62%, 1)",
					"hsla(0, 100%, 65%, 1)",
					"hsla(0, 100%, 68%, 1)",
					"hsla(0, 100%, 70%, 1)",
					"hsla(0, 100%, 73%, 1)",
					"hsla(0, 100%, 75%, 1)",
					"hsla(0, 100%, 78%, 1)",
					"hsla(0, 100%, 90%, 1)",
					"hsla(0, 100%, 95%, 1)",
				],
			},
		},

		green: {
			palette: {
				dark: [
					"hsla(145, 60%, 30%, 1)",
					"hsla(145, 60%, 35%, 1)",
					"hsla(145, 60%, 40%, 1)",
					"hsla(145, 60%, 45%, 1)",
					"hsla(145, 60%, 50%, 1)",
					"hsla(145, 60%, 55%, 1)",
					"hsla(145, 60%, 60%, 1)",
					"hsla(145, 60%, 65%, 1)",
					"hsla(145, 60%, 70%, 1)",
					"hsla(145, 60%, 75%, 1)",
					"hsla(145, 60%, 90%, 1)",
					"hsla(145, 60%, 95%, 1)",
				],
				light: [
					"hsla(145, 60%, 50%, 1)",
					"hsla(145, 60%, 55%, 1)",
					"hsla(145, 60%, 60%, 1)",
					"hsla(145, 60%, 65%, 1)",
					"hsla(145, 60%, 70%, 1)",
					"hsla(145, 60%, 75%, 1)",
					"hsla(145, 60%, 80%, 1)",
					"hsla(145, 60%, 85%, 1)",
					"hsla(145, 60%, 90%, 1)",
					"hsla(145, 60%, 95%, 1)",
					"hsla(145, 60%, 97%, 1)",
					"hsla(145, 60%, 99%, 1)",
				],
			},
		},

		warning: {
			palette: {
				dark: Object.values(Colors.yellowDark),
				light: Object.values(Colors.yellow),
			},
		},

		error: {
			palette: {
				dark: Object.values(Colors.redDark),
				light: Object.values(Colors.red),
			},
		},

		success: {
			palette: {
				dark: Object.values(Colors.greenDark),
				light: Object.values(Colors.green),
			},
		},
	},
});

const pixelFont = createFont({
	family: "Jersey15",
	size: {
		1: 12,
		2: 14,
		3: 16,
		4: 18,
		5: 20,
		6: 24,
		7: 28,
	},
	lineHeight: {
		1: 14,
		2: 16,
		3: 18,
		4: 22,
		5: 26,
		6: 30,
		7: 34,
	},
	weight: {
		4: "400",
		7: "700",
	},
	letterSpacing: {
		4: 0,
	},
});

export type Themes = typeof builtThemes;
export const themes: Themes = builtThemes;
export const fonts = {
	pixel: pixelFont,
};
