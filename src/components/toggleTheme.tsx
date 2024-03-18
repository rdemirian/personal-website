import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { useColorMode, IconButton } from "@chakra-ui/react"

const ToggleColorMode = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<IconButton
			onClick={() => toggleColorMode()}
			icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
			aria-label={"Toggle Theme Colour"}
			pos={"absolute"}
			top={0}
			right={0}
			margin={"1rem"}
			className="themeIcon"
			backgroundColor={
				colorMode === "light"
					? "rgba(0, 0, 0, 0.1)"
					: "rgba(128, 128, 128, 0.3)"
			}
			_hover={{
				backgroundColor:
					colorMode === "light"
						? "rgba(0, 0, 0, 0.2)"
						: "rgba(128, 128, 128, 0.4)",
			}}
			_active={{
				backgroundColor:
					colorMode === "light"
						? "rgba(0, 0, 0, 0.5)"
						: "rgba(128, 128, 128, 0.8)",
			}}
		/>
	)
}

export default ToggleColorMode
