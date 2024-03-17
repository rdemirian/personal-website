"use client"
import Header from "@/components/header"
import IntroCard from "@/components/introCard"
import Nav from "@/components/nav"
import NightOwl from "@/components/nightOwl"
import ProjectCardReel from "@/components/projectCardReel"
import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

export default function Home() {
	const showNav = useBreakpointValue({ base: false, sm: true })
	const height = window.innerHeight < 1000 ? "10vh" : "10vw"
	const size = window.innerHeight < 1000 ? "100px" : "180px"

	return (
		<Box position="relative">
			<Box>
				<Header showNav={true}></Header>
			</Box>
			<Stack
				direction={"column"}
				align={"center"}
				marginTop={["40px ", "clamp(5px, 1vw, 100px)"]}
				position="relative"
				gap={"1em"}
			>
				{/*{showNav && <Nav></Nav>}*/}
				<Box className="nameTitleBox">
					<Text
						className="nameTitle"
						sx={{
							fontSize: [`clamp(20px, ${height}, ${size})`],
							letterSpacing: "0.1rem",
							fontWeight: [700],
							marginY: "-20px",
						}}
					>
						Raffi
					</Text>
				</Box>
				<NightOwl />
				<Stack
					direction={"column"}
					gap={"16px"}
					alignItems={"center"}
					className="intro"
					paddingBottom={"1em"}
				>
					<IntroCard
						para1={"Hi, I am a software engineer from Sydney."}
						para2={
							"I am currently focusing on helping local businesses strengthen their positions in the web space offering builds, UI/UX guidance and marketplace support."
						}
					></IntroCard>
				</Stack>
			</Stack>
		</Box>
	)
}
