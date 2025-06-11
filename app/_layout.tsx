import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { config } from "@/tamagui.config";
import { TamaguiProvider, Theme } from "@tamagui/core";

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		Jersey15: require("../assets/fonts/Jersey15-Regular.ttf"),
	});

	if (!loaded) return null;

	return (
		<TamaguiProvider config={config}>
			<Theme name="dark">
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="index" />
					<Stack.Screen name="game" />
					<Stack.Screen name="shop" />
				</Stack>
			</Theme>

			<StatusBar style="light" hidden translucent />
		</TamaguiProvider>
	);
}
