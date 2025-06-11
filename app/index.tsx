import BalatroCard from "@/components/BalatroCard";
import { AppStyles } from "@/constants/Styles";
import { Dimensions, StyleSheet } from "react-native";

import { Button, Image, Text, View, XStack } from "tamagui";

export default function HomeScreen() {
	const { width, height } = Dimensions.get("window");

	return (
		<View style={AppStyles.page}>
			<Image src={require("@/assets/images/balatro/background.jpg")} position="absolute" width={width} height={height} />

			{/* Logo */}
			<View style={{ width: "50%", height: "40%", marginBottom: 20, marginTop: "auto" }}>
				<Image src={require("@/assets/images/balatro/logo.png")} width="100%" height="100%" />
			</View>

			{/* Buttons */}
			<XStack
				width="100%"
				justify="space-between"
				verticalAlign="middle"
				style={{ marginTop: "auto", marginBottom: 25, paddingHorizontal: 50 }}
			>
				<View style={{ width: 150 }}>
					<BalatroCard style={styles.profileCard}>
						<Text>Perfil</Text>
						<Button style={styles.profileButton}>J1</Button>
					</BalatroCard>
				</View>

				<BalatroCard style={styles.buttonsCard}>
					<XStack gap="$2" justify="space-between" verticalAlign="middle">
						<Button theme="accent" fontSize="$6">
							JOGAR
						</Button>
						<Button theme="teste" fontSize="$4" size="$3" mt="auto" mb="auto">
							OPÇÕES
						</Button>
						<Button theme="green" fontSize="$5">
							COLEÇÃO
						</Button>
					</XStack>
				</BalatroCard>

				<View style={{ width: 150, alignItems: "flex-end" }}>
					<BalatroCard style={styles.languageCard}>
						<Button style={styles.languageButton}>Português</Button>
					</BalatroCard>
				</View>
			</XStack>
		</View>
	);
}

const styles = StyleSheet.create({
	profileCard: {
		justifyContent: "center",
		alignItems: "center",
		width: 70,
		marginRight: "auto",
	},
	profileButton: {
		width: "100%",
		height: 30,
	},

	buttonsCard: {
		justifyContent: "center",
		alignItems: "center",
		marginLeft: "auto",
		marginRight: "auto",
	},

	languageCard: {
		justifyContent: "center",
		alignItems: "center",
		width: 120,
		height: 40,
		marginTop: "auto",
	},
	languageButton: {
		width: "100%",
		height: 30,
	},

	rightAlign: {
		width: 70,
		marginLeft: "auto",
	},
	shareButton: {
		position: "absolute",
		top: -23,
		right: -7,
		width: 35,
		height: 35,
		backgroundColor: "#216696",
	},
});
