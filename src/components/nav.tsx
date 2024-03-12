import { Link, Stack } from "@chakra-ui/react"
import React from "react"

const Nav = () => {

    return (
        <Stack direction={"row"} gap={14} className="navBar">
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </Stack>
    )
}

export default Nav