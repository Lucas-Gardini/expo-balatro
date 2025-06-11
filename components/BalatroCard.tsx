import { Card } from "tamagui";

interface BalatroCardProps extends React.PropsWithChildren {
	style?: React.CSSProperties;
}

export default function BalatroCard({ children, style }: BalatroCardProps): React.JSX.Element {
	return (
		<Card padding={6} style={style}>
			{children}
		</Card>
	);
}
