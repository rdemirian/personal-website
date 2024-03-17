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
		<Box>
			{reversedJobs.map((job, index) => (
				<Card
					key={index}
					padding={"1em"}
					margin={"10px"}
					sx={{
						backgroundColor:
							colorMode === "light"
								? "rgba(0, 0, 0, 0.1)"
								: "rgba(128, 128, 128, 0.4)",
						borderRadius: "15px",
						minHeight: 150,
						color: colorMode === "light" ? "#141214" : "#FFFADD",
						fontSize: "14px",
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
			))}
		</Box>
	)
}

export default Timeline
