import { Box, Stack, useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import React from "react"
import Nav from "./nav"
import ToggleColorMode from "./toggleTheme"
import Hamburger from "./hamburger"

interface HeaderProps {
	showNav?: boolean
}

const Header: React.FC<HeaderProps> = ({ showNav: initialShowNav = true }) => {
	const showNav = useBreakpointValue({ base: false, sm: initialShowNav })
	return (
		<Stack
			direction={"row"}
			justify={"center"} // Center the content horizontally
			width={"100%"} // Set width to 100% to span the entire width of the screen
			padding={"1rem"} // Adjust padding as needed
		>
			<Hamburger />
			{showNav && (
				<Box>
					<Nav />
				</Box>
			)}

			<ToggleColorMode />
		</Stack>
	)
}

export default Header
