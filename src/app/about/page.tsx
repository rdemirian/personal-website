"use client"
import Header from "@/components/header"
import Timeline from "@/components/timeline"
import { Box } from "@chakra-ui/react"
import jobs from "./jobs.json"

export default function About() {
	return (
		<Box className="pageContents">
			<Header showNav={true}></Header>
			<Timeline jobs={jobs}></Timeline>
		</Box>
	)
}
