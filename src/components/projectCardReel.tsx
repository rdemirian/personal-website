import { Grid, useColorMode } from "@chakra-ui/react"
import ProjectCard from "./projectCard"

interface ProjectCardReelProps {}

const ProjectCardReel: React.FC<ProjectCardReelProps> = ({}) => {
	const { colorMode } = useColorMode()

	return (
		<Grid
			gap={"16px"}
			templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
			maxWidth={"1100px"}
			width={"80%"}
			className="homepageProjectReel"
		>
			<ProjectCard
				heading={"What's the pay?"}
				summary={
					"This site allows you to paste the link for a job advert and it will then return the salary that was listed on the backend of the listing, even if it is not displayed on the site."
				}
				theme={colorMode}
			></ProjectCard>
			<ProjectCard
				heading={"What's New?"}
				summary={
					"A custom group email subsription that helps friends stay up to date with eachothers lives"
				}
				theme={colorMode}
			></ProjectCard>
			<ProjectCard
				heading={"Spirit Spy"}
				summary={
					"A platform that allows you to seek out the best discounts on alcohol"
				}
				theme={colorMode}
			></ProjectCard>
		</Grid>
	)
}

export default ProjectCardReel
