import React, { useState, useEffect, useRef } from "react"
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component"
import jobs from "../app/about/jobs.json"
import "react-vertical-timeline-component/style.min.css"
import { useColorMode, Text, List, ListItem, Stack } from "@chakra-ui/react"
import { School } from "@mui/icons-material"
import { Work } from "@mui/icons-material"

const Timeline = () => {
	const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])
	const timelineRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (timelineRef.current) {
				const timelineRect = timelineRef.current.getBoundingClientRect()
				const elements = timelineRef.current.querySelectorAll(
					".vertical-timeline-element"
				)
				const indexes: number[] = []

				elements.forEach((el, index) => {
					const rect = el.getBoundingClientRect()
					const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
					if (isVisible) {
						indexes.push(index)
					}
				})

				setVisibleIndexes(indexes)
			}
		}
		handleScroll()

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const { colorMode } = useColorMode()
	const reversedJobs = [...jobs].reverse()

	return (
		<div ref={timelineRef}>
			<VerticalTimeline
				layout="2-columns"
				className="timeline"
				lineColor={colorMode === "light" ? "#252425" : "#FFFADD"}
				animate={true}
			>
				{reversedJobs.map((job, index) => (
					<VerticalTimelineElement
						key={index}
						data-index={index}
						dateClassName="timelineDate"
						date={job.year}
						visible={visibleIndexes.includes(index)}
						icon={<Work />}
						contentStyle={{
							boxShadow: "none",
							borderRadius: "15px",
							fontSize: "12px",
							background:
								colorMode === "light"
									? "rgba(0, 0, 0, 0.1)"
									: "rgba(128, 128, 128, 0.3)",
						}}
						contentArrowStyle={{
							borderRightColor:
								colorMode === "light"
									? "rgba(0, 0, 0, 0.1)"
									: "rgba(128, 128, 128, 0.3)",
						}}
						iconStyle={{
							color: colorMode === "light" ? "#252425" : "#FFFADD",
							background: "orange",
							boxShadow:
								colorMode === "light"
									? "#252425 0px 0px 0px 4px, rgba(0, 0, 0, 0.08) 0px 2px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 3px 0px 4px"
									: "#FFFADD 0px 0px 0px 4px, rgba(0, 0, 0, 0.08) 0px 2px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 3px 0px 4px",
						}}
					>
						<Stack direction={"column"}>
							<Text
								className="timelineTitleAndCompany"
								color={"orange"}
								fontSize={"1em"}
							>
								{job.title} @ {job.company}
							</Text>
							{job.extraTitle && (
								<Text className="timelineExtraTitle" fontWeight={"bold"}>
									{job.extraTitle}
								</Text>
							)}
							{job.extra && job.extra !== null && (
								<List>
									{job.extra.map((value, key) => (
										<ListItem key={key}>- {value}</ListItem>
									))}
								</List>
							)}
							<Text fontSize={"12px"}>Responsibilities</Text>
							{typeof job.description === "object" && (
								<List>
									{Object.entries(job.description).map(([key, value]) => (
										<ListItem key={key} fontSize={"12px"}>
											- {value}
										</ListItem>
									))}
								</List>
							)}
						</Stack>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	)
}

export default Timeline
