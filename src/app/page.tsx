"use client"
import Header from "@/components/header"
import Nav from "@/components/nav"
import NightOwl from "@/components/nightOwl"
import ProjectCardReel from "@/components/projectCardReel"
import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

export default function Home() {
	const showNav = useBreakpointValue({ base: false, sm: true })

	return (
		<Box className="pageContents" position="relative">
			<Box>
				<Header showNav={false}></Header>
			</Box>
			<Stack
				direction={"column"}
				align={"center"}
				marginTop={"clamp(20px, 10vw, 200px)"}
				position="relative"
			>
				{showNav && <Nav></Nav>}
				<Box className="nameTitleBox">
					<Text
						className="nameTitle"
						sx={{
							fontSize: ["clamp(20px, 15vw, 200px)"],
							letterSpacing: "0.1rem",
							fontWeight: [700],
						}}
					>
						Raffi
					</Text>
				</Box>
				<Box
					zIndex={"-1"}
					position={"absolute"}
					marginTop={"150px"}
					className="nightowl"
				>
					<NightOwl />
				</Box>
				<ProjectCardReel></ProjectCardReel>
			</Stack>
		</Box>
	)
}
