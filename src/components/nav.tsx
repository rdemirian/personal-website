import { Link, Stack, useBreakpointValue, useColorMode } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { css, keyframes } from "@emotion/react"
import { usePathname } from "next/navigation"

// Define the keyframes
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

const NavLinks = [
	{ id: 1, name: "Home", path: "/" },
	//{ id: 2, name: "About", path: "/about" },
	//{ id: 3, name: "Projects", path: "/projects" },
	//{ id: 4, name: "Contact", path: "/contact" },
]

const Nav: React.FC = () => {
	const fadeInNav = useBreakpointValue({ base: false, sm: true })
	const { colorMode } = useColorMode()
	const pathname = usePathname()
	const isActive = (path: string) => path === pathname

	const [animatedLinks, setAnimatedLinks] = useState<number[]>([])

	useEffect(() => {
		// Generate an array of link IDs in the original order
		const originalOrder = NavLinks.map((link) => link.id)
		setAnimatedLinks(originalOrder)
	}, [])

	return (
		<Stack
			direction={["column", "row"]}
			gap={["30px", "12", "14"]}
			bottom={0}
			paddingTop={["60%", "8px"]}
			align={"center"}
			fontSize={["24px", "16px", "16px", "20px", "24px"]}
		>
			{animatedLinks.map((id, index) => {
				const link = NavLinks.find((link) => link.id === id)
				if (!link) return null
				if (isActive(link.path) && link.path === "/") return null // Hide home link when active path is "/"
				return (
					<Stack
						key={link.id}
						css={css`
							animation: ${fadeInNav ? bounceIn : "none"} 0.5s forwards;
							animation-delay: ${3 + Math.random()}s;
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
							sx={{
								padding: "20px",
								margin: "-20px",
							}}
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
