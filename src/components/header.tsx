import React, { useEffect, useState } from "react"
import {
	Box,
	Stack,
	useBreakpointValue,
	Text,
	useColorMode,
	Flex,
	Center,
} from "@chakra-ui/react"
import Nav from "./nav"
import ToggleColorMode from "./toggleTheme"
import Hamburger from "./hamburger"
import logoLight from "../../public/logoLight.svg"
import logoDark from "../../public/logoDark.svg"
import Image from "next/image"
import { usePathname } from "next/navigation"
import NavLinkData from "../components/navLinkData.json"
import { keyframes, css } from "@emotion/react"

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

interface Page {
	id: number
	name: string
	path: string
	title: string
}

interface HeaderProps {
	showNav?: boolean
}

const Header: React.FC<HeaderProps> = ({ showNav: initialShowNav = true }) => {
	const { colorMode } = useColorMode()
	const showNav = useBreakpointValue({ base: false, sm: initialShowNav })
	const showPageTitle = useBreakpointValue({ base: true, sm: false })
	const pathname = usePathname()
	const [pageTitle, setPageTitle] = useState<string | null>(null)

	useEffect(() => {
		const matchedPage = NavLinkData.find((page: Page) => page.path === pathname)
		if (matchedPage) {
			setPageTitle(matchedPage.title)
		}
	}, [pathname])

	let delay = pathname === "/" ? 3.5 : 0.5
	delay += Math.random() * 0.5

	return (
		<Center>
			<Flex justifyContent="center" width="100%">
				<Box width="100%" maxWidth="900px">
					<Stack
						direction={"row"}
						width={"100%"}
						padding={".5rem"}
						marginBottom={"20px"}
						alignItems="center"
					>
						<Box
							marginRight={"auto"}
							css={css`
								animation: ${bounceIn} 1s forwards;
								animation-delay: ${delay}s;
								opacity: 0;
								animation-fill-mode: both;
							`}
						>
							<Image
								src={colorMode === "light" ? logoDark : logoLight}
								alt={""}
								width={40}
								priority={true}
							/>
						</Box>

						{showNav && (
							<Box>
								<Nav />
							</Box>
						)}
						{showPageTitle && pageTitle != "home" && (
							<Box
								className="mobilePageTitle"
								style={{
									position: "absolute",
									left: "50%",
									transform: "translateX(-50%)",
								}}
							>
								<Text
									letterSpacing={"1px"}
									fontSize={"25px"}
									css={css`
										animation: ${bounceIn} 1s forwards;
										animation-delay: ${delay}s;
										opacity: 0;
										animation-fill-mode: both;
									`}
								>
									{pageTitle}
								</Text>
							</Box>
						)}
						<Stack
							direction={"row"}
							alignItems={"right"}
							marginLeft={"auto"}
							gap={".5em"}
						>
							<ToggleColorMode />
							<Hamburger />
						</Stack>
					</Stack>
				</Box>
			</Flex>
		</Center>
	)
}

export default Header
