import React from "react"
import { keyframes } from "styled-components"
import { Box, Card, List, ListItem, Text } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

interface Job {
	index: number
	year: string
	company: string
	title: string
	description: string[]
	extraTitle?: string
	extra?: string[]
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

interface TimelineProps {
	jobs: Job[]
}

const Timeline: React.FC<TimelineProps> = ({ jobs }) => {
	const reversedJobs = [...jobs].reverse()
	const { colorMode } = useColorMode()
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			position="relative"
			width="100%"
		>
			{/* Vertical Line */}
			<Box
				position="absolute"
				top={0}
				bottom={0}
				left="50%"
				borderLeft="1px solid #000"
				height="100%"
			/>

			<Box display="flex" flexDirection="column" width="50%">
				{reversedJobs.map((job, index) => (
					<Box
						key={index}
						display="flex"
						alignItems="center"
						justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
						position="relative"
						padding={2}
						marginBottom={4}
						width="100%"
						marginLeft={index % 2 === 0 ? "-15%" : "15%"} // Adjusted marginLeft for better positioning
						marginRight={index % 2 === 0 ? "20%" : "10%"} // Adjusted marginRight for better positioning
					>
						{/* Circle Marker */}
						<Box
							position="absolute"
							left="50%"
							transform="translateX(-50%)"
							borderRadius="50%"
							width="12px"
							height="12px"
							backgroundColor="#000"
						/>
						<Card
							padding={"1em"}
							margin={"10px"}
							sx={{
								backgroundColor:
									colorMode === "light"
										? "rgba(0, 0, 0, 0.1)"
										: "rgba(128, 128, 128, 0.4)",
								borderRadius: "15px",
								minHeight: 200,
								color: colorMode === "light" ? "#141214" : "#FFFADD",
								fontSize: "14px",
								maxWidth: "400px",
							}}
						>
							<Text fontWeight={"bold"} color={"orange"}>
								{job.title} @ {job.company}
							</Text>
							<Text paddingBottom={"1rem"}>{job.year}</Text>
							<List>
								{job.description.map((value, key) => (
									<ListItem key={key}>
										<Text>- {value}</Text>
									</ListItem>
								))}
							</List>
							{job.extraTitle && (
								<Text paddingTop={"1rem"} fontWeight={"bold"}>
									{job.extraTitle}
								</Text>
							)}
							{job.extra && job.extra !== null && (
								<List>
									{job.extra.map((value, key) => (
										<ListItem key={key}>
											<Text>- {value}</Text>
										</ListItem>
									))}
								</List>
							)}
						</Card>
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default Timeline
