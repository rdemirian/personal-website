"use client"
import { Link, Stack, useBreakpointValue, useColorMode } from "@chakra-ui/react"
import React from "react"
import { css, keyframes } from "@emotion/react"
import { usePathname } from "next/navigation"

// Define the keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const NavLinks = [
	{ id: 1, name: "Home", path: "/" },
	{ id: 2, name: "About", path: "/about" },
	{ id: 3, name: "Projects", path: "/projects" },
	{ id: 4, name: "Contact", path: "/contact" },
]

const Nav: React.FC = () => {
	const fadeInNav = useBreakpointValue({ base: false, sm: true })
	const { colorMode } = useColorMode()
	const pathname = usePathname()
	const isActive = (path: string) => path === pathname

	return (
		<Stack
			css={css`
				opacity: ${fadeInNav ? 0 : 1};
				animation: ${fadeInNav ? fadeIn : "none"} 1s forwards;
				animation-delay: 2.5s;
			`}
			direction={["column", "row"]}
			gap={["30px", "14"]}
			bottom={0}
			paddingTop={["60%", "8px"]}
			align={"center"}
			fontSize={["24px", "16px", "16px", "20px", "24px"]}
		>
			{NavLinks.map((link) => {
				return (
					<Stack key={link.id}>
						<Link
							href={link.path}
							className={
								isActive(link.path) && link.path !== "/"
									? "page.activePage"
									: "page.nonActivePage"
							}
							style={{
								// Add styles here for individual links
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
