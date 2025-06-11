import { StyleSheet } from "react-native";
import { themes } from "./Themes";

export const AppStyles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: themes.dark.background,
		justifyContent: "center",
		alignItems: "center",
	},
});
