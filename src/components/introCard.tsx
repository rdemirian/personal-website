import { Card, Divider, Stack, Text, useColorMode } from "@chakra-ui/react"

interface IntroCardProps {
	para1: string
	para2?: string
	showDivider: boolean
}

const IntroCard: React.FC<IntroCardProps> = ({ para1, para2, showDivider }) => {
	const { colorMode } = useColorMode()
	return (
		<Card
			variant={"elevated"}
			sx={{
				backgroundColor:
					colorMode === "light"
						? "rgba(0, 0, 0, 0.1)"
						: "rgba(128, 128, 128, 0.3)",
				borderRadius: "15px",
				minHeight: 150,
				color: colorMode === "light" ? "#252425" : "#FFFADD",
				alignItems: "center",
				maxWidth: "1100px",
				width: "80%",
			}}
		>
			<Stack
				direction={"column"}
				gap={"20px"}
				fontSize={"14px"}
				padding={"20px"}
			>
				<Text align={"center"}>{para1}</Text>
				{showDivider === true && (
					<Divider
						borderColor={colorMode === "light" ? "#252425" : "#FFFADD"}
						width={"150px"}
						alignSelf={"center"}
					/>
				)}
				<Text align={"center"}>{para2}</Text>
			</Stack>
		</Card>
	)
}

export default IntroCard
