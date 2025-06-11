import { StyleSheet } from "react-native";
import { Button, Text, View } from "tamagui";

export default function ShopScreen() {
	return (
		<View style={{ flex: 1 }}>
			<Text>Welcome!</Text>
			<Button theme="blue">Hello world</Button>
		</View>
	);
}

const styles = StyleSheet.create({});
