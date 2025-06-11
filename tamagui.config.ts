import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "@tamagui/core";
import { fonts, themes } from "./constants/Themes";

export const config = createTamagui({
	...defaultConfig,
	defaultTheme: "dark",

	themes: {
		...defaultConfig.themes,
		...themes,
	},
	fonts: {
		...defaultConfig.fonts,
		body: fonts.pixel,
		heading: fonts.pixel,
		mono: fonts.pixel,
	},
});

type Conf = typeof config;

// make imports typed
declare module "@tamagui/core" {
	interface TamaguiCustomConfig extends Conf {}
}
