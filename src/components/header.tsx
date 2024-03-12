import { Link, Stack } from "@chakra-ui/react"
import React from "react"
import Nav from "./nav"
import ToggleColorMode from "./toggleTheme"

interface HeaderProps {
    showNav?: boolean
}

const Header: React.FC<HeaderProps> = ({ showNav }) => {
    return (
        <Stack direction={'row'} align={'center'} margin={'1rem'}>
        {showNav && <Nav></Nav>}
        <ToggleColorMode />
      </Stack>
    )
}

export default Header