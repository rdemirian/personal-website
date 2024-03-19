import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { useColorMode, IconButton } from "@chakra-ui/react"
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

const ToggleColorMode: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const pathname = usePathname()
	let delay = pathname === "/" ? 3.5 : 0.5
	delay += Math.random() * 0.5
	return (
		<IconButton
			onClick={() => toggleColorMode()}
			icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
			aria-label={"Toggle Theme Colour"}
			className="themeIcon"
			backgroundColor={
				colorMode === "light"
					? "rgba(0, 0, 0, 0.1)"
					: "rgba(128, 128, 128, 0.3)"
			}
			css={css`
				animation: ${bounceIn} 1s forwards;
				animation-delay: ${delay}s;
				opacity: 0;
				animation-fill-mode: both;
			`}
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
