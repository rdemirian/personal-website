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
			align={"center"}
			margin={"1rem"}
			paddingBottom={"30px"}
		>
			{showNav && (
				<Box
					bottom={0}
					position={"absolute"}
					sx={{
						top: 0,
					}}
				>
					<Nav></Nav>
				</Box>
			)}
			<Hamburger></Hamburger>
			<ToggleColorMode />
		</Stack>
	)
}

export default Header
