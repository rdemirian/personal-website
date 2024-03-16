import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Box,
	Stack,
} from "@chakra-ui/react"

interface ProjectCardProps {
	heading: string
	summary: string
	theme: "light" | "dark"
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	heading,
	summary,
	theme,
}) => {
	return (
		<Card
			variant={"elevated"}
			colorScheme={"messenger"}
			sx={{
				backgroundColor:
					theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(128, 128, 128, 0.4)",
				borderRadius: "15px",
				minHeight: 150,
				maxHeight: 300,
				color: theme === "light" ? "#141214" : "#FFFADD",
			}}
		>
			<CardHeader padding={"10px"}>
				<Heading size="md" padding={"5px"}>
					{heading}
				</Heading>
			</CardHeader>
			<CardBody paddingX={"15px"} paddingY={"5px"}>
				<Stack spacing="4">
					<Box>
						<p style={{ fontSize: "12px" }}>{summary}</p>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	)
}

export default ProjectCard
