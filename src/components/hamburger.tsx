import React, { useState } from "react"
import {
	Box,
	Drawer,
	DrawerContent,
	IconButton,
	useBreakpointValue,
	useColorMode,
	useDisclosure,
} from "@chakra-ui/react"
import Nav from "./nav"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { keyframes, css } from "@emotion/react"
import { usePathname } from "next/navigation"

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

const Hamburger = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode } = useColorMode()
	const showBurger = useBreakpointValue({ base: true, sm: false })
	const [showBackdropFilter, setShowBackdropFilter] = useState(false)
	const [showOtherStuff, setshowOtherStuff] = useState(false)
	const pathname = usePathname()
	let delay = pathname === "/" ? 3.5 : 0.5
	delay += Math.random() * 0.5

	const handleDrawerOpen = () => {
		onOpen()
		setShowBackdropFilter(true)
		setshowOtherStuff(true)
	}

	const handleDrawerClose = () => {
		setShowBackdropFilter(false)
		setshowOtherStuff(false)
		setTimeout(() => {
			onClose()
		}, 300)
	}

	return (
		<>
			{showBurger && (
				<IconButton
					onClick={isOpen ? handleDrawerClose : handleDrawerOpen}
					sx={{
						backgroundColor:
							colorMode === "light"
								? "rgba(0, 0, 0, 0.1)"
								: "rgba(128, 128, 128, 0.3)",
					}}
					aria-label={isOpen ? "Close Menu" : "Open Menu"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					className="hamburgerIcon"
					_hover={{
						backgroundColor:
							colorMode === "light"
								? "rgba(0, 0, 0, 0.2)"
								: "rgba(128, 128, 128, 0.4)",
					}}
					css={css`
						animation: ${bounceIn} 1s forwards;
						animation-delay: ${delay}s;
						opacity: 0;
						animation-fill-mode: both;
					`}
				/>
			)}
			<div
				className="burgerDrawerBackdrop"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: showBackdropFilter ? "100%" : "0%",
					height: "100%",
					backdropFilter: showBackdropFilter ? "blur(12px)" : "none",
					backgroundColor: "rgba(128, 128, 128, 0.5)",
					transition: "backdrop-filter .1s ease-in-out, width .44s",
					zIndex: isOpen ? 98 : -1,
					opacity: isOpen ? 1 : 0,
					pointerEvents: isOpen ? "auto" : "none",
				}}
				onClick={handleDrawerClose}
			/>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={handleDrawerClose}
				size={"full"}
			>
				<DrawerContent
					sx={{
						background: "none",
					}}
				>
					<IconButton
						onClick={handleDrawerClose}
						visibility={showOtherStuff ? "visible" : "hidden"}
						position="absolute"
						top=".5rem"
						right=".5rem"
						aria-label="Close"
						icon={<CloseIcon />}
						sx={{
							backgroundColor:
								colorMode === "light"
									? "rgba(0, 0, 0, 0.1)"
									: "rgba(128, 128, 128, 0.3)",
						}}
						_hover={{
							backgroundColor:
								colorMode === "light"
									? "rgba(0, 0, 0, 0.2)"
									: "rgba(128, 128, 128, 0.4)",
						}}
					/>
					<Box
						maxWidth="100%"
						paddingLeft={"1em"}
						visibility={showOtherStuff ? "visible" : "hidden"}
					>
						<Nav />
					</Box>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Hamburger
