import { Link, Stack, useBreakpointValue, useColorMode } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { css, keyframes } from "@emotion/react"
import { usePathname } from "next/navigation"
import NavLinkData from "./navLinkData.json"

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  70% {
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Nav: React.FC = () => {
	const fadeInNav = useBreakpointValue({ base: false, sm: true }) //need to get rid of this shit at some point
	const { colorMode } = useColorMode()
	const pathname = usePathname()
	const isActive = (path: string) => path === pathname

	const [animatedLinks, setAnimatedLinks] = useState<number[]>([])

	useEffect(() => {
		const originalOrder = NavLinkData.map((link) => link.id)
		setAnimatedLinks(originalOrder)
	}, [])

	return (
		<Stack
			direction={["column", "row"]}
			gap={["60px", "12", "14"]}
			paddingTop={["60%", "0"]}
			align={"center"}
			fontSize={["24px", "16px", "20px", "22px", "24px"]}
			maxHeight={[null, "40px"]}
		>
			{animatedLinks.map((id, index) => {
				const link = NavLinkData.find((link) => link.id === id)
				if (!link || (pathname === "/" && link.path === "/")) return null

				let delay = pathname === "/" ? 3.5 : 0.5
				delay += Math.random() * 0.5

				return (
					<Stack
						key={link.id}
						css={css`
							animation: ${fadeInNav ? bounceIn : "none"} 1s forwards;
							animation-delay: ${delay}s;
							opacity: ${fadeInNav ? 0 : 1};
							animation-fill-mode: both;
						`}
					>
						<Link
							href={link.path}
							className={
								isActive(link.path) ? "page.activePage" : "page.nonActivePage"
							}
							style={{
								color: isActive(link.path)
									? "orange"
									: colorMode === "dark"
									? "#FFFADD"
									: "#141214",
							}}
							_hover={{
								textDecoration: isActive(link.path) ? "none" : "underline",
								textDecorationColor: "orange",
							}}
							sx={{}}
						>
							{link.name}
						</Link>
					</Stack>
				)
			})}
		</Stack>
	)
}

export default Nav
