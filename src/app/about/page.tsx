"use client"
import Header from "@/components/header"
import Timeline from "@/components/timeline"
import { Box, Center, Stack, Text } from "@chakra-ui/react"

export default function About() {
	return (
		<Box className="aboutPageContents">
			<Header showNav={true}></Header>
			<Center>
				<Stack
					className="aboutSummary"
					width={"95%"}
					gap={"1em"}
					textAlign={"center"}
					padding={"1em"}
					fontSize={"1em"}
					borderColor={"black"}
					border={"solid"}
					borderWidth={"4px"}
					marginTop={"15px"}
					maxWidth={"900px"}
					sx={{
						"@media only screen and (min-width: 1170px)": {
							width: "80%",
						},
					}}
				>
					<Text>
						As an ambitious and hardworking software engineer, I am recognized
						for my commitment, reliability, and ability to strive in all
						environments. I am experienced in tech, operations, and project
						management with a demonstrated history of excellence in Customer
						Experience.
					</Text>
					<Text>
						My passion for fostering cohesion and driving results makes me adept
						at bridging the gap between technical and non-technical staff,
						ultimately enhancing productivity and achieving organizational
						goals.
					</Text>
				</Stack>
			</Center>
			<Timeline />
		</Box>
	)
}
